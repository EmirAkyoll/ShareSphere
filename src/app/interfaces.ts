export interface Post {
    userId: any;
    id: number;
    title: string;
    body: string;
}

export interface MergedPost {
    userId: number;
    id: number;
    title: string;
    body: string;
    userName: any;
    city: any;
}

export interface Comment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export interface User{
    id?: number,
    name: string,
    username: string,
    email: string
    address?: {
      street?: string,
      suite?: string,
      city?: string,
      zipcode?: string,
      geo?: {
        lat?: string,
        lng?: string
      }
    },
    phone?: string,
    website?: string,
    company?: {
      name?: string,
      catchPhrase?: string,
      bs?: string
    },
  }