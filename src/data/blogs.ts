import { existingPosts } from './posts/existingPosts';
import { architecturePosts } from './posts/architecturePosts';
import { securityPosts } from './posts/securityPosts';
import { guidePosts } from './posts/guidePosts';

export interface BlogBlock {
  type: 'paragraph' | 'heading' | 'code' | 'list' | 'blockquote' | 'table' | 'image';
  value: any;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readingTime: string;
  coverImage: string;
  excerpt: string;
  content: BlogBlock[];
}

export const blogs: BlogPost[] = [
  ...existingPosts,
  ...architecturePosts,
  ...securityPosts,
  ...guidePosts
];
