import { ContentWordpressInterface } from './content-wordpress.interface';

export interface PostInterface {
  author: number;
  authorName: string;
  image: string;
  categories: number[];
  content: ContentWordpressInterface;
  excerpt: ContentWordpressInterface;
  title: ContentWordpressInterface;
  date: Date;
  modified: Date;
  featured_media: number;
  id: number;
  link: string;
  status: string;
  type: string;
  sticky: boolean;
  format: string;
  slug: string;
  tags: number[];
  _links: any;
}
