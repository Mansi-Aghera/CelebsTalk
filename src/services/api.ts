// services/api.ts — BASE_URL lives ONLY here

import { Influencer, InfluencersResponse, Category, CategoriesResponse } from "@/types";

const BASE_URL = "https://celebstalks.pythonanywhere.com";

// ─── Generic Fetch ────────────────────────────────────────
export const fetchAPI = async <T = unknown>(endpoint: string): Promise<T> => {
  const res = await fetch(`${BASE_URL}/${endpoint}`, { next: { revalidate: 3600 } });

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  return res.json();
};

// ─── Promise-based Cache (called ONCE, reused forever) ───
const cache: Record<string, Promise<unknown>> = {};

function cachedFetch<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
  if (!cache[key]) {
    cache[key] = fetcher();
  }
  return cache[key] as Promise<T>;
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

// ─── Categories ───────────────────────────────────────────
export function getCategories(): Promise<Category[]> {
  return cachedFetch("categories", async () => {
    const res = await fetchAPI<CategoriesResponse>("category/");

    // Prepend BASE_URL to image paths so no other file needs it
    return res.data.map((cat) => ({
      ...cat,
      image: `${BASE_URL}${cat.image}`,
    }));
  });
}