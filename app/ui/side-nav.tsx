'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import SearchModalWrapper from './modals/search-modal-wrapper';
import SearchModal from './modals/search-modal';
import {
  HomeIcon,
  ExploreIcon,
  BellIcon,
  ChatIcon,
  BookmarkIcon,
  UserIcon,
  CogIcon,
  LogoutIcon,
  SearchIcon
} from './icons'

export default function Sidebar() {
  const pathname = usePathname();
  const [openSearch, setOpenSearch] = useState(false);

  const navigation = [
    { name: 'Home', icon: HomeIcon, href: '/home' },
    { name: 'Search', icon: SearchIcon, href: '#', onClick: () => setOpenSearch(true) },
    { name: 'Explore', icon: ExploreIcon, href: '/home/explore' },
    { name: 'Notifications', icon: BellIcon, href: '#' },
    { name: 'Messages', icon: ChatIcon, href: '/home/messages' },
    { name: 'Bookmarks', icon: BookmarkIcon, href: '/home/bookmarks' },
    { name: 'Profile', icon: UserIcon, href: '/home/profile' },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 md:left-0 md:top-0 md:h-screen md:w-16 lg:w-72 bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out overflow-hidden border-t md:border-r border-gray-200 dark:border-gray-700 z-30">
      {/* Logo Section - Hidden on mobile, visible on desktop */}
      <div className="hidden md:flex items-center justify-center h-16 border-b border-gray-200 dark:border-gray-700">
        <div className="text-indigo-600 font-bold text-2xl">
          <span className="hidden lg:inline">Social</span>
          <span className="lg:hidden">S</span>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex md:flex-col justify-around md:justify-start md:mt-4 md:px-2 md:space-y-1">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            onClick={item.onClick}
            className={clsx(
              'group flex flex-col md:flex-row items-center justify-center md:justify-start p-2 md:px-2 md:py-3 rounded-lg transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800',
              {
                'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400':
                  pathname === item.href,
              }
            )}
          >
            <item.icon
              className={clsx('flex-shrink-0 h-6 w-6', {
                'text-indigo-600 dark:text-indigo-400': pathname === item.href,
                'text-gray-500 dark:text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400':
                  pathname !== item.href,
              })}
              aria-hidden="true"
            />
            <span className="mt-1 md:mt-0 md:ml-3 hidden lg:inline text-xs md:text-sm font-medium">
              {item.name}
            </span>
          </a>
        ))}
      </nav>

      {/* User Profile Section - Hidden on mobile, visible on desktop */}
      <div className="hidden md:block absolute bottom-0 w-full p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="flex-shrink-0">
            <img
              className="h-8 w-8 rounded-full"
              src="https://example.com/avatar.jpg"
              alt="User avatar"
            />
          </div>
          <div className="hidden lg:block">
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              John Doe
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              @johndoe
            </div>
          </div>
        </div>

        {/* More Options */}
        <div className="mt-4 space-y-2">
          <button className="w-full flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <CogIcon className="h-5 w-5 mr-3" />
            <span className="hidden lg:inline text-sm">Settings</span>
          </button>

          <button className="w-full flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
            <LogoutIcon className="h-5 w-5 mr-3" />
            <span className="hidden lg:inline text-sm">Logout</span>
          </button>
        </div>
      </div>

      {/* Search Modal */}
      {openSearch && (
        <SearchModalWrapper setOpenSearch={setOpenSearch}>
          <SearchModal />
        </SearchModalWrapper>
      )}
    </div>
  );
}