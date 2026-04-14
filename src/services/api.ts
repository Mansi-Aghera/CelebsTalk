// services/api.ts — BASE_URL lives ONLY here

import { Influencer, InfluencersResponse, Category, CategoriesResponse, FAQ } from "@/types";

const BASE_URL = "https://celebstalks.pythonanywhere.com";

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
      image: inf.image ? `${BASE_URL}${inf.image}` : null,
    }));
  });
}

export function getInfluencerById(id: number): Promise<Influencer> {
  return fetchAPI<{ data: Influencer }>(`influencers/${id}/`).then((res) => ({
    ...res.data,
    image: res.data.image
      ? `${BASE_URL}${res.data.image}`
      : null,
  }));
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