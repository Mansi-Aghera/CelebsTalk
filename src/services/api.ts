// services/api.ts — BASE_URL lives ONLY here

import {
  Influencer,
  InfluencersResponse,
  Category,
  CategoriesResponse,
  FAQ,
} from "@/types";

export const BASE_URL = "https://celebstalks.pythonanywhere.com";

export interface LoginPayload {
  email?: string;
  password?: string;
  mobile?: string;
}

export async function loginUser(payload: LoginPayload) {
  const res = await fetch(`${BASE_URL}/user/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  let data: unknown = null;

  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) {
    const errorData = data as { message?: string; detail?: string } | null;
    const message =
      errorData?.message ||
      errorData?.detail ||
      `Login failed with status ${res.status}`;
    throw new Error(message);
  }

  return data;
}
// ─── Generic Fetch ────────────────────────────────────────
export const fetchAPI = async <T = unknown>(endpoint: string): Promise<T> => {
  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    cache: "no-store", // 🚀 ALWAYS FRESH DATA
  });

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  return res.json();
};

// ─── Promise-based Cache (called ONCE, reused forever) ───
const cache: Record<string, Promise<unknown>> = {};

function cachedFetch<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
  return fetcher(); // 🚀 NO CACHE
}

// ─── Influencers ──────────────────────────────────────────
export function getInfluencers(): Promise<Influencer[]> {
  return cachedFetch("influencers", async () => {
    const res = await fetchAPI<InfluencersResponse>("influencers/");

    // Prepend BASE_URL to image paths so no other file needs it
    return res.data.map((inf) => ({
      ...inf,
      image: inf.image
        ? inf.image.startsWith("http")
          ? inf.image
          : `${BASE_URL}${inf.image}`
        : null,
    }));
  });
}

export function getInfluencerById(id: number): Promise<Influencer> {
  return fetchAPI<{ data: Influencer }>(`influencers/${id}/`).then((res) => ({
    ...res.data,

    image: res.data.image
      ? res.data.image.startsWith("http")
        ? res.data.image
        : `${BASE_URL}${res.data.image}`
      : "",

    services_data: res.data.services_data?.map((s) => ({
      ...s,
      service_data: {
        ...s.service_data,
        image: s.service_data?.image
          ? s.service_data.image.startsWith("http")
            ? s.service_data.image
            : `${BASE_URL}${s.service_data.image}`
          : "",
      },
    })),

    expertise_data: res.data.expertise_data?.map((e) => ({
      ...e,
      image: e.image
        ? e.image.startsWith("http")
          ? e.image
          : `${BASE_URL}${e.image}`
        : null,
    })),
  }));
}

export async function getInfluencerReviews(influencer_id: string) {
  return fetchAPI<{ data: any[] }>(
    `influencer_review/?influencer_id=${influencer_id}`,
  ).then((res) =>
    res.data.map((r) => ({
      id: r.id,
      name: r.user_data?.full_name || "User",
      rating: r.rating || 0,
      text: r.review || "",
      date: r.created_at,
    })),
  );
}
// ─── Categories ───────────────────────────────────────────
export function getCategories(): Promise<Category[]> {
  return cachedFetch("categories", async () => {
    const res = await fetchAPI<CategoriesResponse>("category/"); // ✅ your correct endpoint

    return res.data.map((cat) => ({
      ...cat,
      image: cat.image
        ? `${BASE_URL}${cat.image}`
        : "/icons/default-category.png", // ✅ fallback image
    }));
  });
}

// -----------faqs

export function getFAQs(): Promise<FAQ[]> {
  return cachedFetch("faqs", async () => {
    const res = await fetchAPI<{ data: FAQ[] }>("faqs/");

    return res.data;
  });
}

// FOLLOW / UNFOLLOW
export async function followInfluencer(influencer_id: number) {
  return fetchAPI(`follow/${influencer_id}/`);
}

// highlight

export async function getInfluencerGallery(influencer_id: string) {
  return fetchAPI<{ galleries: any[] }>(
    `influencer_gallery/influencer_id/${influencer_id}/`,
  ).then((res) =>
    res.galleries.map((item) => ({
      id: item.id,
      title: item.name || "Highlight",
      image: item.image
        ? item.image.startsWith("http")
          ? item.image
          : `${BASE_URL}${item.image}`
        : "",
    })),
  );
}

// -followers

export async function getFollowers(influencer_id: string) {
  return fetchAPI<{ data: any[] }>(
    `follow/influencer_id/${influencer_id}/`,
  ).then((res) =>
    res.data.map((f) => ({
      id: f.id,
      image: f.user_data?.image
        ? f.user_data.image.startsWith("http")
          ? f.user_data.image
          : `${BASE_URL}${f.user_data.image}`
        : null,
    })),
  );
}

// ---ratings
export function getInfluencersByRating(rating: number) {
  return fetchAPI<InfluencersResponse>(`influencers/?rating=${rating}`).then(
    (res) =>
      res.data.map((inf) => ({
        ...inf,
        image: inf.image
          ? inf.image.startsWith("http")
            ? inf.image
            : `${BASE_URL}${inf.image}`
          : null,
      })),
  );
}

// ------ payment history

export async function getUserTransactions(user_id: string) {
  return fetchAPI<{ data: any[] }>(
    `user_transaction_history/user_id/${user_id}/`,
  ).then((res) => {
    const walletAmount = res.data?.[0]?.user_data?.wallet_amount ?? 0;

    return {
      walletAmount, // 🔥 ADD THIS

      transactions: res.data.map((tx) => ({
        id: tx.id,

        title: tx.payment_purpose || "-",
        subtitle: tx.transaction_title || "-",
        category: tx.transaction_type || "-",

        date: new Date(tx.transaction_date_time).toLocaleString("en-IN", {
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),

        amount: `${
          tx.transaction_type === "Credited" ? "+" : "-"
        }₹${tx.transaction_amount}`,

        isPositive: tx.transaction_type === "Credited",

        type: tx.transaction_type,
      })),
    };
  });
}

//----- services

export async function getUserBookings(user_id: string) {
  return fetchAPI<{ data: any[] }>(
    `service_booking/user_id/${user_id}/`
  ).then((res) =>
    res.data.map((item) => ({
      id: item.id,

      // ✅ COL 1
      serviceName: item.services_data?.[0]?.name || "-",

      // ✅ COL 2
      influencerName: item.influencer_data?.full_name || "-",

      // ✅ COL 3
      status: item.booking_status || "-",

      // ✅ COL 4
      totalPaid: `₹${item.total_paid || 0}`,

      // ✅ COL 5
      createdAt: new Date(item.created_at).toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    }))
  );
}

// export async function checkUserExists(email: string) {
//   const response = await fetch(
//     `https://celebstalks.pythonanywhere.com/user/${email}`
//   );

//   return response.json();
// }

export async function checkUserExists(email: string) {
  const encodedEmail = encodeURIComponent(email);

  const response = await fetch(
    `https://celebstalks.pythonanywhere.com/user/${encodedEmail}/`
  );

  return response.json();
}

export async function registerUser(payload: {
  user_id: string;
  full_name: string;
  email: string;
  mobile?: string; 
}) {
  const response = await fetch(
    "https://celebstalks.pythonanywhere.com/user/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  return response.json();
}

export async function getUserById(user_id: string) {
  return fetchAPI<{ data: any }>(`user/${user_id}/`).then(res => res.data);
}

export async function getUserByMobile(mobile: string) {
  return fetchAPI<{ data: any[] }>(`user/?mobile=${mobile}`);
}

export async function createInfluencerSlot(payload: {
  influencer: string;
  booked_by: string;
  day: string;
  start_time: string;
  end_time: string;
}) {
  const response = await fetch(`${BASE_URL}/influencer_slot/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || data.detail || "Failed to create slot");
  }
  return data;
}

export const createSlotBooking = async (payload: {
  influencer_data: string;
  user_data: string;
  slot_data: number;
  booking_type: string;
  booking_status: string;
  // service_data: number[];
  service_charge: number;
  booked_date: string;
}) => {
  const res = await fetch(
    "https://celebstalks.pythonanywhere.com/slot_booking/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data?.message || "Booking failed");
  }

  return data;
};