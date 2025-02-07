import stockImage from '@/public/stock-image.jpg'

export const posts = [{
    id: '1',
    title: 'Beautiful sunset at the beach 🌅',
    uploaderImage: stockImage,
    date: '2h ago',
    postImage: stockImage,
    liked: true,
    username: 'traveler_jane',
    saved: false,
    numberOfLikes: 14,
    numberOfComments: 16,
    comments: [
      {
        id: '1',
        user: 'traveler_jane',
        avatar: '/avatar1.jpg',
        date: '2h ago',
        text: 'Stunning view! Where was this taken?',
      },
      {
        id: '2',
        user: 'photography_pro',
        avatar: '/avatar2.jpg',
        date: '1h ago',
        text: 'Love the colors in this shot!',
      },
    ],
}]

export const user = {
  id: "1",
  name: "Alice Johnson",
  email: "alice@example.com",
  bio: "Frontend Developer | JavaScript Enthusiast",
  avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  cover: "https://source.unsplash.com/800x400/?nature",
  followers: 1200,
  following: 300,
  posts: 45,
  socialLinks: {
    twitter: "https://twitter.com/alice_dev",
    instagram: "https://instagram.com/alice.dev",
    website: "https://alice.dev",
  },
}