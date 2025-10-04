"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface SidebarProps {
  currentPath?: string;
}

export default function Sidebar({ currentPath }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const navigationItems = [
    {
      name: "Home",
      href: "/",
      icon: "🏠",
      color: "text-slate-600 hover:text-blue-600"
    }
  ];

  const serviceItems = [
    {
      name: "Cancellation",
      href: "/next/cancellation",
      icon: "❌",
      color: "text-slate-600 hover:text-red-600"
    },
    {
      name: "Travel Partners",
      href: "/next/partners",
      icon: "⭐",
      color: "text-slate-600 hover:text-amber-600"
    }
  ];

  const supportItems = [
    {
      name: "About Us",
      href: "/next/about",
      icon: "ℹ️",
      color: "text-slate-600 hover:text-purple-600"
    },
    {
      name: "Contact",
      href: "/next/contact",
      icon: "📞",
      color: "text-slate-600 hover:text-green-600"
    }
  ];

  const handleNavigation = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-3 bg-white rounded-xl shadow-lg border border-slate-200 hover:bg-slate-50 transition-all duration-200"
      >
        <svg
          className="w-6 h-6 text-slate-700"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
        fixed top-0 left-0 h-full w-80 bg-white border-r border-slate-200 z-50 transform transition-transform duration-300 ease-in-out shadow-xl
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0 lg:relative lg:z-auto lg:shadow-none
        animate-slide-in-left
      `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200 bg-gradient-to-r from-slate-50 to-white">
            <div className="flex items-center space-x-3">
              <div className="w-16 h-12 rounded-xl overflow-hidden bg-white/50 border border-slate-100 shadow-sm">
                <Image src="/next-stop.png" alt="NextStops Logo" width={64} height={48} className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">NextStops</h1>
                <p className="text-xs text-slate-500">Travel Management</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <svg
                className="w-5 h-5 text-slate-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-8 overflow-y-auto">
            {/* Main Navigation */}
            <div>
              <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-3">
                Navigation
              </h2>
              <ul className="space-y-2">
                {navigationItems.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={`
                        w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer
                        ${
                          currentPath === item.href
                            ? "bg-blue-50 text-blue-700 shadow-sm border border-blue-100"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }
                      `}
                    >
                      <span className="mr-3 text-lg">{item.icon}</span>
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-3">
                Services
              </h2>
              <ul className="space-y-2">
                {serviceItems.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={`
                        w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer
                        ${
                          currentPath === item.href
                            ? "bg-blue-50 text-blue-700 shadow-sm border border-blue-100"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }
                      `}
                    >
                      <span className="mr-3 text-lg">{item.icon}</span>
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4 px-3">
                Support
              </h2>
              <ul className="space-y-2">
                {supportItems.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigation(item.href)}
                      className={`
                        w-full flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 cursor-pointer
                        ${
                          currentPath === item.href
                            ? "bg-blue-50 text-blue-700 shadow-sm border border-blue-100"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                        }
                      `}
                    >
                      <span className="mr-3 text-lg">{item.icon}</span>
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-slate-200 bg-gradient-to-r from-slate-50 to-white">
            <div className="text-xs text-slate-500 text-center mb-2">
              © 2025 NextStops. All rights reserved.
            </div>
            <div className="text-xs text-center p-3 bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 rounded-xl border border-blue-100 shadow-sm">
              <div className="flex items-center justify-center space-x-1">
                <span className="text-slate-500">Developed</span>
                <span className="text-slate-500">by</span>
              <div className="mt-1 flex items-center justify-center space-x-1">
                <span className="font-bold text-sm bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                  Pralhad~
                </span>
                <span className="text-blue-500 animate-bounce">💙</span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}