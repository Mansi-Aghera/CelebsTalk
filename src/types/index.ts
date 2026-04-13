// ─── Category ─────────────────────────────────────────────
export interface Category {
  id: number;
  name: string;
  image: string;
  status: boolean;
}

// ─── Service Data ─────────────────────────────────────────
export interface ServiceData {
  id: number;
  name: string;
  image: string;
}

export interface InfluencerService {
  price: number;
  status: string;
  description: string;
  service_data: ServiceData;
}

// ─── Expertise ────────────────────────────────────────────
export interface Expertise {
  id: number;
  category_data: Category;
  expertise_name: string;
  image: string | null;
  created_at: string;
}

// ─── Influencer (API Response) ────────────────────────────
export interface Influencer {
  id: number;
  influencer_id: string;
  full_name: string;
  dob: string;
  email: string | null;
  mobile: string;
  gender: string;
  device_token: string | null;
  bio: string;
  languages: string[];
  social_links: Record<string, string>;
  price_per_min_chat: number;
  price_per_min_audio: number;
  price_per_min_video: number;
  verification_video: string | null;
  status: string;
  wallet_current_amount: number;
  total_earning: number;
  image: string | null;
  categories: Category[];
  services: unknown[];
  services_data: InfluencerService[];
  expertise_data: Expertise[];
  avg_rating: number;
  total_reviews: number;
  chat_pending_request_count: number;
  call_pending_request_count: number;
  video_pending_request_count: number;
  completed_session_count: number;
  total_request_count: number;
  follower_count: number;
  isActive: boolean;
  isLive: boolean;
  last_seen: string | null;
  created_at: string;
}

// ─── API Response Wrapper ─────────────────────────────────
export interface InfluencersResponse {
  status: string;
  count: number;
  next: string | null;
  previous: string | null;
  data: Influencer[];
}

export interface CategoriesResponse {
  status: string;
  count: number;
  next: string | null;
  previous: string | null;
  data: Category[];
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

