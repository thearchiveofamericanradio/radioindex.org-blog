export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  excerpt: string;
  readingTimeMinutes: number;
  html: string;
  markdown: string;
};

export type SiteMeta = {
  title: string;
  description: string;
  url: string;
  author: string;
};
