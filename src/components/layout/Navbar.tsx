"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { LogOut } from "lucide-react";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    // Clear login state
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    setIsLoggedIn(false);
    
    // Redirect to home page
    router.push('/');
  };

  useEffect(() => {
    // Check if user is logged in
    const checkLoginStatus = () => {
      const userLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(userLoggedIn);
    };

    // Check on mount and route change
    checkLoginStatus();
    
    // Listen for storage changes (in case login happens in another tab)
    const handleStorageChange = () => {
      checkLoginStatus();
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [pathname]); // Re-check when route changes

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-md border-b border-gray-200/50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="NexaCV Logo" className="w-9 h-9 self-center" />
          <div className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent self-center">NexaCV - Resume Builder</div>
        </Link>
        <div className="flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Home
          </Link>
          <Link href="/templates" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Templates
          </Link>
          <Link href="/builder" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Custom Builder
          </Link>
          {isLoggedIn ? (
            <div className="flex items-center gap-3">
              <Link href="/account" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                My Account
              </Link>
              <button
                onClick={handleLogout}
                className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-300"
                aria-label="Logout"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <Link href="/auth" className="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Get Started
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
