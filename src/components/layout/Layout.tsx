"use client";

import { motion } from "framer-motion";
import { Eye, EyeOff, Sparkles } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FormEvent, useMemo, useState } from "react";

type LoginPayload = {
  email: string;
  password: string;
};

 export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [form, setForm] = useState<LoginPayload>({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const canSubmit = useMemo(
    () => form.email.trim().length > 0 && form.password.trim().length > 0,
    [form.email, form.password]
  );

     const loginWithApi = async (payload: LoginPayload) => {
    // Dynamic-ready hook: replace this with your API call when available.
    // Example:
    // return apiClient.post("/auth/login", payload);
    await new Promise((resolve) => setTimeout(resolve, 700));

    const isValidStaticCreds =
      payload.email === "test@gmail.com" && payload.password === "12345";

    if (!isValidStaticCreds) {
      throw new Error("Invalid credentials. Use test@gmail.com / 12345.");
    }

    return {
      success: true,
      user: {
        email: payload.email,
        rememberMe,
      },
    };
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage("");
    setIsSubmitting(true);

    try {
      await loginWithApi(form);
      alert("Login successful (static demo).");
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Something went wrong.";
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f6ecf4] px-4 py-8 sm:px-6 sm:py-10">
      {/* Decorative background elements */}


      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-[6%] top-[14%] hidden h-28 w-28 rounded-full border-2 border-[#0aa4ff] md:block"
      >
       <Sparkles
          className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#f08cc5]"
          strokeWidth={1.8}
        />
      </motion.div>

        <div className="pointer-events-none absolute bottom-[24%] left-[5%] h-12 w-12 rounded-full bg-[#f2c9e2]" />
      <div className="pointer-events-none absolute bottom-[14%] right-[8%] h-20 w-20 rounded-full bg-[#f1c6e3]" />
      <Sparkles className="pointer-events-none absolute bottom-[10%] left-[8%] h-4 w-4 text-[#f08cc5]" />
      <Sparkles className="pointer-events-none absolute right-[18%] top-[44%] h-4 w-4 text-[#f08cc5]" />

        <div className="mx-auto w-full max-w-[980px]">
        <p className="mb-5 text-sm font-medium text-[var(--neutral-700)] sm:mb-7">
          Home <span className="px-1 text-[var(--neutral-900)]">›</span>{" "}
          <span className="font-semibold text-[var(--neutral-1000)]">Login</span>
        </p>

      <motion.section
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[430px] rounded-[28px] border border-[#d5d5d5] bg-white px-5 pb-8 pt-7 shadow-[0_6px_16px_rgba(0,0,0,0.16)] sm:px-7"
        >
          <div className="absolute left-0 top-0 h-[6px] w-full rounded-t-[28px] bg-[var(--primary-100)]" />

          <h1 className="text-center text-[2.15rem] font-semibold italic leading-none text-[var(--primary-300)] [font-family:'Times_New_Roman',serif]">
            Celebstalk
          </h1>

          <h2 className="mt-6 flex items-center justify-center gap-2 text-center text-[2rem] font-bold leading-tight text-black sm:text-[2.2rem]">
            Welcome Back
            <Sparkles className="h-6 w-6 text-[var(--primary-300)]" strokeWidth={2.2} />
          </h2>

          <p className="mx-auto mt-3 max-w-[320px] text-center text-[15px] font-medium leading-6 text-[var(--neutral-500)]">
            Sign in to connect with your favourite celebrities and unlock
            exclusive fan experiences.
          </p>

          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.99 }}
            type="button"
            className="mx-auto mt-6 flex h-11 w-full max-w-[250px] items-center justify-center gap-2 rounded-full border border-[var(--primary-200)] bg-white text-sm font-medium text-[var(--neutral-700)] transition-colors duration-200 hover:bg-[#fff8fc]"
          >
            <FcGoogle size={18} />
            continue with Google
          </motion.button>

          <div className="my-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-[var(--neutral-300)]" />
            <span className="text-sm font-medium text-[var(--neutral-600)]">
              or sign in with
            </span>
            <span className="h-px flex-1 bg-[var(--neutral-300)]" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="text-sm font-extrabold uppercase tracking-wide text-[var(--primary-300)]"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, email: event.target.value }))
                }
                placeholder="yourname@gmail.com"
                autoComplete="email"
                className="mt-1 h-11 w-full rounded-lg border border-[var(--neutral-300)] bg-white px-3 text-sm text-[var(--neutral-900)] outline-none transition-shadow focus:border-[var(--primary-300)] focus:ring-2 focus:ring-[var(--primary-200)]/25"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-sm font-extrabold uppercase tracking-wide text-[var(--primary-300)]"
              >
                Password
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={form.password}
                  onChange={(event) =>
                    setForm((prev) => ({ ...prev, password: event.target.value }))
                  }
                  placeholder="••••••••"
                  autoComplete="current-password"
                  className="h-11 w-full rounded-lg border border-[var(--neutral-300)] bg-white px-3 pr-10 text-sm text-[var(--neutral-900)] outline-none transition-shadow focus:border-[var(--primary-300)] focus:ring-2 focus:ring-[var(--primary-200)]/25"
                  required
                />
                <button
                  type="button"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-[var(--neutral-500)] transition hover:text-[var(--primary-300)]"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2 pt-1 text-sm sm:flex-row sm:items-center sm:justify-between">
              <label className="inline-flex items-center gap-2 text-[var(--neutral-600)]">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(event) => setRememberMe(event.target.checked)}
                  className="h-4 w-4 rounded border-[var(--neutral-300)] accent-[var(--primary-300)]"
                />
                Remember me
              </label>
              <button
                type="button"
                className="text-left font-bold text-[var(--primary-300)] transition hover:underline sm:text-right"
              >
                Forgot password?
              </button>
            </div>

            {errorMessage ? (
              <p className="rounded-md border border-[var(--red-100)] bg-[#fff0f2] px-3 py-2 text-sm font-medium text-[var(--red-200)]">
                {errorMessage}
              </p>
            ) : null}

            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.995 }}
              type="submit"
              disabled={!canSubmit || isSubmitting}
              className="mx-auto mt-2 block h-11 w-full max-w-[250px] rounded-xl border border-[var(--neutral-400)] bg-[#f9f9f9] px-4 text-lg font-semibold text-[#222] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Signing in..." : "Sign in to Celebstalk"}
            </motion.button>
          </form>

          <p className="text-center text-sm font-semibold text-[var(--neutral-500)]">
            New to Celebstalk?{" "}
            <button type="button" className="font-bold text-[var(--primary-300)]">
              Create Account
            </button>
          </p>
        </motion.section>
      </div>
    </main>
  );
}