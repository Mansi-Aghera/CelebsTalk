const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE ||
  "https://celebstalks.pythonanywhere.com";

export const API = {
  influencers: `${API_BASE}/influencers/`,
  categories: `${API_BASE}/category/`,
};



export function mediaUrl(path?: string | null) {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${API_BASE}${path}`;
}