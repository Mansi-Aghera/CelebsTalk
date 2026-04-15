// services/api.ts — BASE_URL lives ONLY here

import { Influencer, InfluencersResponse, Category, CategoriesResponse, FAQ } from "@/types";

export const BASE_URL = "https://celebstalks.pythonanywhere.com";

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
  return fetchAPI<{ data: Influencer }>(`influencers/${id}/`)
    .then((res) => ({
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
    `influencer_review/?influencer_id=${influencer_id}`
  ).then((res) =>
    res.data.map((r) => ({
      id: r.id,
      name: r.user_data?.full_name || "User",
      rating: r.rating || 0,
      text: r.review || "",
      date: r.created_at,
    }))
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
    `influencer_gallery/influencer_id/${influencer_id}/`
  ).then((res) =>
    res.galleries.map((item) => ({
      id: item.id,
      title: item.name || "Highlight",
      image: item.image
        ? item.image.startsWith("http")
          ? item.image
          : `${BASE_URL}${item.image}`
        : "",
    }))
  );
}

// -followers 

export async function getFollowers(influencer_id: string) {
  return fetchAPI<{ data: any[] }>(
    `follow/influencer_id/${influencer_id}/`
  ).then((res) =>
    res.data.map((f) => ({
      id: f.id,
      image: f.user_data?.image
        ? f.user_data.image.startsWith("http")
          ? f.user_data.image
          : `${BASE_URL}${f.user_data.image}`
        : null,
    }))
  );
}