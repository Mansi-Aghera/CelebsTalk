export async function sendOtp(mobile: string, otp: string) {
  const response = await fetch(
    "https://adminapi.digiteachindia.com/send_sms/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mobile,
        otp,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to send OTP");
  }

  return response.json();
}