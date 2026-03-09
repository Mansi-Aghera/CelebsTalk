export interface Stat {
  value: string;
  label: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Celebrity {
  id: string;
  name: string;
  category: string;
  image: string;
  followers: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  category: string;
}
