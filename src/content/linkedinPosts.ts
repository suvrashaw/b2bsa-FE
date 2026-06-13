export interface LinkedInPost {
  caption: string;
  hashtag: string;
  id: string;
  image: string;
  url: string;
}

import LINKEDIN_POSTS_DATA from "./linkedin-posts.json";

export const LINKEDIN_POSTS: LinkedInPost[] = LINKEDIN_POSTS_DATA;
