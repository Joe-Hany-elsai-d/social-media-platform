export type Post = {
    id: string,
    title: string,
    uploaderImage: ImageBitmap,
    date: string,
    postImage: ImageBitmap,
    liked: boolean,
    username: string,
    saved: boolean,
    numberOfLikes: number,
    numberOfComments: number,
    comments: Comment[]
}

export type Comment = {
    id: string;
    user: string;
    avatar: string;
    date: string;
    text: string;
}

export type User = {
  id: string;
  name: string;
  email: string;
  bio: string;
  avatar: string;
  cover: string;
  followers: number;
  following: number;
  posts: number;
  socialLinks: {
    twitter?: string;
    instagram?: string;
    website?: string;
  };
}

  