export type LoginRequest = {
  email: string;
  password: string;
};

export type AuthUser = {
  id?: number | string;
  name?: string;
  email: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken?: string;
  user: AuthUser;
};

const STATIC_EMAIL = "test@gmail.com";
const STATIC_PASSWORD = "12345";

const AUTH_LOGIN_URL = process.env.NEXT_PUBLIC_AUTH_LOGIN_URL;

function mapApiResponse(payload: any, fallbackEmail: string): LoginResponse {
  const token =
    payload?.accessToken ??
    payload?.access_token ??
    payload?.token ??
    payload?.data?.accessToken ??
    payload?.data?.access_token ??
    payload?.data?.token;

  if (!token || typeof token !== "string") {
    throw new Error("Login response did not include an access token.");
  }

  const refreshToken =
    payload?.refreshToken ?? payload?.refresh_token ?? payload?.data?.refreshToken;

  const userPayload = payload?.user ?? payload?.data?.user ?? {};

  return {
    accessToken: token,
    refreshToken: typeof refreshToken === "string" ? refreshToken : undefined,
    user: {
      id: userPayload?.id,
      name: userPayload?.name ?? userPayload?.full_name,
      email:
        typeof userPayload?.email === "string" && userPayload.email.length > 0
          ? userPayload.email
          : fallbackEmail,
    },
  };
}

async function loginWithStaticCredentials(payload: LoginRequest): Promise<LoginResponse> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  const isValid =
    payload.email.toLowerCase().trim() === STATIC_EMAIL &&
    payload.password.trim() === STATIC_PASSWORD;

  if (!isValid) {
    throw new Error("Invalid email or password.");
  }

  return {
    accessToken: "static-demo-token",
    refreshToken: "static-demo-refresh-token",
    user: {
      id: "demo-user",
      name: "Demo User",
      email: STATIC_EMAIL,
    },
  };
}

export async function loginUser(payload: LoginRequest): Promise<LoginResponse> {
  if (!AUTH_LOGIN_URL) {
    return loginWithStaticCredentials(payload);
  }

  const response = await fetch(AUTH_LOGIN_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message =
      data?.message ?? data?.detail ?? "Unable to login. Please try again.";
    throw new Error(message);
  }

  return mapApiResponse(data, payload.email);
}

export const STATIC_LOGIN_CREDENTIALS = {
  email: STATIC_EMAIL,
  password: STATIC_PASSWORD,
};