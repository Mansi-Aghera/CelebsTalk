"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Eye, EyeOff, ShieldCheck, Sparkles } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";

import { fadeUp, scaleIn, slideRight } from "@/lib/animations";
import { loginUser } from "@/services/api";

type AuthMethod = "email" | "mobile";
type AuthStep = "login" | "otp" | "forgot" | "reset";
type OtpContext = "login" | "reset";

type LoginResponse = {
  token?: string;
  access?: string;
  access_token?: string;
  refresh?: string;
  user?: unknown;
  data?: {
    token?: string;
    access?: string;
    access_token?: string;
    refresh?: string;
    user?: unknown;
  };
};

const otpLength = 6;

function getLoginToken(response: unknown): string | null {
  const data = response as LoginResponse | null;

  if (!data) {
    return null;
  }

  return (
    data.token ||
    data.access ||
    data.access_token ||
    data.data?.token ||
    data.data?.access ||
    data.data?.access_token ||
    null
  );
}

export default function LoginFlow() {
  const router = useRouter();

  const [step, setStep] = useState<AuthStep>("login");
  const [method, setMethod] = useState<AuthMethod>("email");
  const [otpContext, setOtpContext] = useState<OtpContext>("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);
  const [showResetConfirmPassword, setShowResetConfirmPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(Array.from({ length: otpLength }, () => ""));
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const mobileDigitsOnly = mobile.replace(/\D/g, "");
  const otpValue = otp.join("");

  const canSubmitLogin = useMemo(() => {
    if (method === "email") {
      return email.trim().length > 0 && password.trim().length > 0;
    }

    return mobileDigitsOnly.length >= 8;
  }, [email, method, mobileDigitsOnly.length, password]);

  const canSubmitForgot = useMemo(() => {
    return method === "email" ? email.trim().length > 0 : mobileDigitsOnly.length >= 8;
  }, [email, method, mobileDigitsOnly.length]);

  const canVerifyOtp = otpValue.length === otpLength;

  const clearMessages = () => {
    setErrorMessage("");
    setSuccessMessage("");
  };

  const resetOtpState = () => {
    setOtp(Array.from({ length: otpLength }, () => ""));
  };

  const persistSession = (response: unknown) => {
    const token = getLoginToken(response);

    if (token) {
      localStorage.setItem("celebstalk_access_token", token);
    }

    const responseData = response as LoginResponse;
    const refresh = responseData?.refresh || responseData?.data?.refresh;

    if (refresh) {
      localStorage.setItem("celebstalk_refresh_token", refresh);
    }

    const user = responseData?.user || responseData?.data?.user;

    if (user) {
      localStorage.setItem("celebstalk_user", JSON.stringify(user));
    }
  };

  const loginAndRedirect = async (payload: { email?: string; password?: string; mobile?: string }) => {
    const response = await loginUser(payload);
    persistSession(response);
    setSuccessMessage("Login successful. Redirecting...");
    setTimeout(() => router.push("/"), 400);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) {
      return;
    }

    const next = [...otp];
    next[index] = value;
    setOtp(next);

    if (value && index < otpLength - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, key: string) => {
    if (key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleBack = () => {
    clearMessages();

    if (step === "otp") {
      setStep(otpContext === "reset" ? "forgot" : "login");
      return;
    }

    if (step === "forgot" || step === "reset") {
      setStep("login");
    }
  };

  const handleLoginSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    clearMessages();
    setIsSubmitting(true);

    try {
      if (method === "email") {
        await loginAndRedirect({ email: email.trim(), password });
        return;
      }

      setOtpContext("login");
      resetOtpState();
      setStep("otp");
      setSuccessMessage(`OTP sent to +${mobileDigitsOnly}.`);
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to login at the moment.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleForgotSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    clearMessages();
    setIsSubmitting(true);

    try {
      setOtpContext("reset");
      resetOtpState();
      setStep("otp");
      if (method === "email") {
        setSuccessMessage(`OTP sent to ${email.trim()}.`);
      } else {
        setSuccessMessage(`OTP sent to +${mobileDigitsOnly}.`);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleOtpSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    clearMessages();

    if (!canVerifyOtp) {
      setErrorMessage("Please enter the 6-digit code.");
      return;
    }

    if (otpContext === "reset") {
      setStep("reset");
      setSuccessMessage("OTP verified. Please set your new password.");
      return;
    }

    setIsSubmitting(true);
    try {
      await loginAndRedirect({ mobile: mobileDigitsOnly });
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unable to verify OTP right now.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    clearMessages();

    if (newPassword.trim().length < 6) {
      setErrorMessage("New password must be at least 6 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setSuccessMessage("Password reset successful. Please login again.");
    setStep("login");
    setPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f7f1f6] px-4 py-6 sm:px-6 sm:py-10">
      {/* <motion.div
        className="pointer-events-none absolute left-100 top-100 hidden h-20 w-20 rounded-full border border-[#dbcae7] sm:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      /> */}
      <Sparkles className="pointer-events-none absolute left-120 top-100 h-5 w-5 text-[#f00798]" />
      <Sparkles className="pointer-events-none absolute right-120 top-30 h-5 w-5 text-[#f00798]" />

      <motion.section
        variants={scaleIn}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-md overflow-hidden rounded-[28px] border border-[#e5d5eb] bg-white shadow-[0_12px_38px_rgba(61,27,80,0.13)] mt-15"
      >
        <div className="relative bg-[#efd6e6] px-6 pb-7 pt-8 text-center">
          {step !== "login" && (
            <button
              type="button"
              onClick={handleBack}
              className="absolute left-4 top-4 rounded-full p-2 text-[#2a2230] hover:bg-white/50"
              aria-label="Go back"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
          )}

          <h1 className="text-4xl font-semibold italic text-[#f00798] [font-family:'Times_New_Roman',serif]">
            Celebstalk
          </h1>
          <p className="mt-1 text-xs text-[#5e5564]">Talk to the Stars, Anytime</p>
        </div>

        <div className="px-5 pb-7 pt-5 sm:px-6">
          <AnimatePresence mode="wait">
            <motion.div key={step} variants={slideRight} initial="hidden" animate="visible" exit="hidden">
              <h2 className="text-center text-xl font-semibold text-[#17131c]">
                {step === "login" && "Login to get started!"}
                {step === "otp" && "Verify your number"}
                {step === "forgot" && "Forgot Password"}
                {step === "reset" && "Reset Password"}
              </h2>
              <p className="mt-1 text-center text-xs text-[#6a6370]">
                {step === "login" && "Use your credential to continue"}
                {step === "otp" && "Enter the code sent to your device"}
                {step === "forgot" && "Enter your credential to continue"}
                {step === "reset" && "Enter your new password here"}
              </p>

              {(step === "login" || step === "forgot") && (
                <div className="mt-4 grid grid-cols-2 gap-2 rounded-xl bg-[#f3f2f6] p-1">
                  {(["email", "mobile"] as const).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => {
                        setMethod(item);
                        clearMessages();
                      }}
                      className={`h-9 rounded-lg text-sm font-medium transition ${
                        method === item
                          ? "bg-[#9f2fff] text-white shadow-sm"
                          : "text-[#5f5866] hover:bg-white"
                      }`}
                    >
                      {item === "email" ? "Email" : "Mobile"}
                    </button>
                  ))}
                </div>
              )}

              {step === "login" && (
                <motion.form variants={fadeUp} initial="hidden" animate="visible" onSubmit={handleLoginSubmit} className="mt-4 space-y-3">
                  {method === "email" ? (
                    <>
                      {/* <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter Email Address"
                        autoComplete="email"
                        required
                        className="h-11 w-full rounded-lg border border-[#ddd8e2] px-3 text-sm outline-none focus:border-[#9f2fff]"
                      />
                      <div className="relative">
                        <input
                          type={showPassword ? "text" : "password"}
                          value={password}
                          onChange={(event) => setPassword(event.target.value)}
                          placeholder="Enter Password"
                          autoComplete="current-password"
                          required
                          className="h-11 w-full rounded-lg border border-[#ddd8e2] px-3 pr-10 text-sm outline-none focus:border-[#9f2fff]"
                        />
                        <button
                          type="button"
                          className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-[#726a7a]"
                          aria-label={showPassword ? "Hide password" : "Show password"}
                          onClick={() => setShowPassword((prev) => !prev)}
                        >
                          {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>

                      <button
                        type="submit"
                        disabled={!canSubmitLogin || isSubmitting}
                        className="h-11 w-full rounded-lg bg-[#9f2fff] text-sm font-medium text-white transition hover:bg-[#8b22e7] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isSubmitting ? "Please wait..." : "Login"}
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          clearMessages();
                          setStep("forgot");
                        }}
                        className="w-full text-right text-xs font-medium text-[#8b22e7] hover:underline"
                      >
                        Forgot Password?
                      </button> */}
                      
                      <button
                        type="button"
                        className="flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-[#ded7e5] text-sm font-medium text-[#4a4451] hover:bg-[#faf8fc]"
                      >
                        <FcGoogle size={18} />
                        Continue with Google
                      </button>
                    </>
                  ) : (
                    <>
                      <input
                        type="tel"
                        value={mobile}
                        onChange={(event) => setMobile(event.target.value)}
                        placeholder="Enter Mobile Number"
                        required
                        className="h-11 w-full rounded-lg border border-[#ddd8e2] px-3 text-sm outline-none focus:border-[#9f2fff]"
                      />
                      <button
                        type="submit"
                        disabled={!canSubmitLogin || isSubmitting}
                        className="h-11 w-full rounded-lg bg-[#9f2fff] text-sm font-medium text-white transition hover:bg-[#8b22e7] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isSubmitting ? "Please wait..." : "Send OTP"}
                      </button>
                    </>
                  )}
                </motion.form>
              )}

              {step === "forgot" && (
                <motion.form variants={fadeUp} initial="hidden" animate="visible" onSubmit={handleForgotSubmit} className="mt-4 space-y-3">
                  {method === "email" ? (
                    <>
                      {/* <input
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter Email Address"
                        autoComplete="email"
                        required
                        className="h-11 w-full rounded-lg border border-[#ddd8e2] px-3 text-sm outline-none focus:border-[#9f2fff]"
                      /> */}
                    </>
                  ) : (
                    <>
                      <input
                        type="tel"
                        value={mobile}
                        onChange={(event) => setMobile(event.target.value)}
                        placeholder="Enter Mobile Number"
                        required
                        className="h-11 w-full rounded-lg border border-[#ddd8e2] px-3 text-sm outline-none focus:border-[#9f2fff]"
                      />
                      <button
                        type="submit"
                        disabled={!canSubmitForgot || isSubmitting}
                        className="h-11 w-full rounded-lg bg-[#9f2fff] text-sm font-medium text-white transition hover:bg-[#8b22e7] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        Send OTP
                      </button>
                    </>
                  )}
                </motion.form>
              )}

              {step === "otp" && (
                <motion.form variants={fadeUp} initial="hidden" animate="visible" onSubmit={handleOtpSubmit} className="mt-4 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        value={digit}
                        maxLength={1}
                        inputMode="numeric"
                        onChange={(event) => handleOtpChange(index, event.target.value)}
                        onKeyDown={(event) => handleOtpKeyDown(index, event.key)}
                        className="h-11 w-11 rounded-lg border border-[#d8d2df] text-center text-base font-semibold outline-none focus:border-[#9f2fff] sm:h-12 sm:w-12"
                        required
                      />
                    ))}
                  </div>

                  <button
                    type="submit"
                    disabled={!canVerifyOtp || isSubmitting}
                    className="h-11 w-full rounded-lg bg-[#9f2fff] text-sm font-medium text-white transition hover:bg-[#8b22e7] disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSubmitting ? "Verifying..." : "Verify OTP"}
                  </button>
                </motion.form>
              )}

              {step === "reset" && (
                <motion.form variants={fadeUp} initial="hidden" animate="visible" onSubmit={handleResetSubmit} className="mt-4 space-y-3">
                  <div className="relative">
                    <input
                      type={showResetPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(event) => setNewPassword(event.target.value)}
                      placeholder="Enter your new password"
                      className="h-11 w-full rounded-lg border border-[#ddd8e2] px-3 pr-10 text-sm outline-none focus:border-[#9f2fff]"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-[#726a7a]"
                      aria-label={showResetPassword ? "Hide password" : "Show password"}
                      onClick={() => setShowResetPassword((prev) => !prev)}
                    >
                      {showResetPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>

                  <div className="relative">
                    <input
                      type={showResetConfirmPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(event) => setConfirmPassword(event.target.value)}
                      placeholder="Re-enter your password"
                      className="h-11 w-full rounded-lg border border-[#ddd8e2] px-3 pr-10 text-sm outline-none focus:border-[#9f2fff]"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-[#726a7a]"
                      aria-label={showResetConfirmPassword ? "Hide password" : "Show password"}
                      onClick={() => setShowResetConfirmPassword((prev) => !prev)}
                    >
                      {showResetConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>

                  <button
                    type="submit"
                    className="h-11 w-full rounded-lg bg-[#9f2fff] text-sm font-medium text-white transition hover:bg-[#8b22e7]"
                  >
                    Continue
                  </button>
                </motion.form>
              )}

              {/* Google button moved to Email tab */}

              {errorMessage && (
                <p className="mt-3 rounded-lg border border-[#ffd2dd] bg-[#fff3f7] px-3 py-2 text-xs text-[#c80b47]">
                  {errorMessage}
                </p>
              )}

              {successMessage && (
                <p className="mt-3 flex items-center gap-2 rounded-lg border border-[#cfe7d8] bg-[#effaf3] px-3 py-2 text-xs text-[#187047]">
                  <ShieldCheck className="h-4 w-4" />
                  {successMessage}
                </p>
              )}

              <p className="mt-4 text-center text-[10px] text-[#938b9b]">
                By continuing, you agree to our <span className="font-semibold">Terms of use</span> & <span className="font-semibold">Privacy Policy</span>.
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="grid grid-cols-3 border-t border-[#f0ebf3] px-2 py-3 text-center text-[10px] text-[#8f8898]">
          <div>
            Instant
            <br />
            Chat & Call
          </div>
          <div>
            Live call
            <br />
            Connectivity
          </div>
          <div>
            Private &
            <br />
            Confidential
          </div>
        </div>
      </motion.section>
    </main>
  );
}
