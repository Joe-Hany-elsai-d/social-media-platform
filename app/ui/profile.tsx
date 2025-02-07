'use client';

import { useState } from 'react';
import { User } from '../lib/definitions';

interface ProfileProps {
  user: User;
}

export default function Profile({ user }: ProfileProps) {
  const [activeTab, setActiveTab] = useState<'posts' | 'followers' | 'following'>('posts');

  return (
    <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 min-h-screen">
      
      <div className="w-32 h-32 rounded-full border-4 border-white dark:border-gray-900 bg-gray-100 flex items-center justify-center">
        {user.avatar ? (
          <img
            src={user.avatar}
            alt={user.name}
            className="w-full h-full rounded-full object-cover cursor-pointer"
          />
        ) : (
          <span className="text-2xl font-bold text-gray-500">
            {user.name.charAt(0)}
          </span>
        )}
       </div>

      {/* Profile Info */}
      <div className="pt-5 px-4">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {user.name}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors">
             Edit
            </button>            
          </div>
        </div>

        <p className="mt-4 text-gray-700 dark:text-gray-300">{user.bio}</p>

        {/* Stats */}
        <div className="flex gap-6 mt-4">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-gray-900 dark:text-white">
              {user.followers}
            </span>
            <span className="text-gray-600 dark:text-gray-400">Followers</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold text-gray-900 dark:text-white">
              {user.following}
            </span>
            <span className="text-gray-600 dark:text-gray-400">Following</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-semibold text-gray-900 dark:text-white">
              {user.posts}
            </span>
            <span className="text-gray-600 dark:text-gray-400">Posts</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-4">
          {user.socialLinks.twitter && (
            <a
              href={user.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600"
            >
              <TwitterIcon className="w-6 h-6" />
            </a>
          )}
          {user.socialLinks.instagram && (
            <a
              href={user.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-600"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
          )}
          {user.socialLinks.website && (
            <a
              href={user.socialLinks.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-700"
            >
              <GlobeIcon className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex justify-center mt-8 border-b w-1/2 mx-auto dark:border-gray-700">
        <div className="flex">
          {(['posts', 'following', 'followers'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-4 font-medium capitalize ${
                activeTab === tab
                  ? 'text-indigo-600 border-b-2 border-indigo-600'
                  : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4">
        {activeTab === 'posts' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="aspect-square bg-gray-100 dark:bg-gray-800 rounded-lg hover:opacity-90 transition-opacity"
              >
                {/* Post content would go here */}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'followers' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
              >
                <div className="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-700 mb-2" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  follower {i + 1}
                </span>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'following' && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
              >
                <div className="w-16 h-16 rounded-full bg-gray-300 dark:bg-gray-700 mb-2" />
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  following {i + 1}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Social Icons
function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function GlobeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 0a12 12 0 100 24 12 12 0 000-24zm-2.527 2.5h5.054c1.24 0 2.413.292 3.457.812L15.97 5.23c-.458-.18-.95-.28-1.47-.28h-4c-1.1 0-2.09.45-2.81 1.17l-1.22 1.22V7.5c0 .83-.67 1.5-1.5 1.5H4.252A9.987 9.987 0 019.473 2.5zM4 12c0-.54.046-1.07.124-1.58h3.376v1.29l-2.25.76v1.53H8.5v1.5H6.25v2H8.5A1.5 1.5 0 0110 17.5v1h1.5a1.5 1.5 0 011.5 1.5v1.41A9.912 9.912 0 014 12zm16.5-2.5h-1.5c-.83 0-1.5-.67-1.5-1.5v-.72l-2-2V6.5c0-.28-.22-.5-.5-.5h-4c-.28 0-.5.22-.5.5v1.34l-1-1C9.62 5.64 9.12 5.45 8.59 5.32l5.28-5.28c1.9.82 3.42 2.3 4.26 4.26l-1.72 1.72h1.09c.83 0 1.5.67 1.5 1.5v2.5z" />
    </svg>
  );
}