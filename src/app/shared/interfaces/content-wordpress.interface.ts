export interface ContentWordpressInterface {
  protected: boolean;
  rendered: string;

  self?: string[];
  collection?: string[];
  about?: string[];
  author?: {
    embeddable: boolean;
    href: string;
  }[];
  replies?: {
    embeddable: boolean;
    href: string;
  }[];
}
