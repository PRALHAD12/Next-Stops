"use client";
import React, { useState } from "react";
import Image from "next/image";

export default function NextPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const router = require('next/navigation').useRouter();
  const modes = [
    { label: "Travel's", color: "from-blue-500 to-blue-700", icon: "🚗" },
    { label: "AirPlane's", color: "from-green-400 to-blue-500", icon: "✈️" },
    { label: "Train", color: "from-yellow-400 to-yellow-600", icon: "🚆" },
    { label: "Tour Package's", color: "from-purple-500 to-pink-500", icon: "🎒" },
  ];
  const sidebarItems = [
    { label: "Home", icon: "🏠", href: "/" },
  ];
  const sidebarSections = [
    [
      { label: "Cancellation", icon: "❌", href: "/cancellation" },
      // { label: "Previous Booking History", icon: "📜", href: "/history" },
      { label: "Our Top Travelling Partner", icon: "🌟", href: "/partners" },
    ],
    [
      { label: "About Us", icon: "ℹ️", href: "/about" },
      { label: "Contact Details", icon: "📞", href: "/contact" },
    ],
  ];

  return (
    <main className="flex min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      {/* Mobile Sidebar Toggle Button */}
      <button
        className="sm:hidden fixed top-4 left-4 z-50 bg-white rounded-full shadow-lg p-2 border border-gray-300"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <span className="text-xl">☰</span>
      </button>
      {/* Sidebar - responsive */}
      <aside
        className={`
          ${sidebarOpen ? "flex" : "hidden"}
          sm:flex flex-col items-center py-8 px-2 sm:px-4 w-64 sm:w-56 bg-white bg-opacity-90 shadow-xl rounded-r-3xl animate-slide-in-sidebar fixed left-0 top-0 h-full z-40
        `}
      >
        {/* Mobile Close Button */}
        <button
          className="sm:hidden absolute top-4 right-4 bg-gray-800 text-white rounded-full p-3 shadow-lg border-2 border-white z-50"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        >
          <span className="text-2xl font-bold">✕</span>
        </button>
        {/* Main navigation */}
        <div className="w-full mb-8">
          {sidebarItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 sm:gap-3 mb-6 last:mb-0 group px-1 sm:px-2 py-2 rounded-lg hover:bg-blue-50 transition cursor-pointer"
            >
              <span className="text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-125 animate-bounce-slow">{item.icon}</span>
              <span className="inline text-sm font-semibold text-black">{item.label}</span>
            </a>
          ))}
        </div>
        {/* Professional sections */}
        <div className="w-full border-t border-gray-200 pt-4 sm:pt-6 mb-4 sm:mb-6">
          {sidebarSections[0].map((item) => {
            if (item.label === "Cancellation") {
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => router.push('/next/cancellation')}
                  className="flex items-center gap-2 group px-2 py-2 rounded-lg w-full text-left transition-colors cursor-pointer hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 sm:mb-5 last:mb-0"
                >
                  <span className="text-xl sm:text-2xl">{item.icon}</span>
                  <span className="inline text-sm font-semibold text-black">{item.label}</span>
                </button>
              );
            }
            if (item.label === "Our Top Travelling Partner") {
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => router.push('/next/partners')}
                  className="flex items-center gap-2 group px-2 py-2 rounded-lg w-full text-left transition-colors cursor-pointer hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-400 mb-4 sm:mb-5 last:mb-0"
                >
                  <span className="text-xl sm:text-2xl">{item.icon}</span>
                  <span className="inline text-sm font-semibold text-black">{item.label}</span>
                </button>
              );
            }
            return (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 last:mb-0 group px-1 sm:px-2 py-2 rounded-lg hover:bg-green-50 transition cursor-pointer"
              >
                <span className="text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-125">{item.icon}</span>
                <span className="inline text-sm font-semibold text-black">{item.label}</span>
              </a>
            );
          })}
        </div>
        <div className="w-full border-t border-gray-200 pt-4 sm:pt-6">
          {sidebarSections[1].map((item) => {
            if (item.label === "About Us") {
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => router.push('/next/about')}
                  className="flex items-center gap-2 group px-2 py-2 rounded-lg w-full text-left transition-colors cursor-pointer hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-4 sm:mb-5 last:mb-0"
                >
                  <span className="text-xl sm:text-2xl">{item.icon}</span>
                  <span className="inline text-sm font-semibold text-black">{item.label}</span>
                </button>
              );
            }
            if (item.label === "Contact Details") {
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => router.push('/next/contact')}
                  className="flex items-center gap-2 group px-2 py-2 rounded-lg w-full text-left transition-colors cursor-pointer hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 mb-4 sm:mb-5 last:mb-0"
                >
                  <span className="text-xl sm:text-2xl">{item.icon}</span>
                  <span className="inline text-sm font-semibold text-black">{item.label}</span>
                </button>
              );
            }
            return (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-5 last:mb-0 group px-1 sm:px-2 py-2 rounded-lg hover:bg-purple-50 transition cursor-pointer"
              >
                <span className="text-xl sm:text-2xl transition-transform duration-300 group-hover:scale-125">{item.icon}</span>
                <span className="inline text-sm font-semibold text-black">{item.label}</span>
              </a>
            );
          })}
        </div>
      </aside>
      {/* Main Content - responsive margin for sidebar */}
      <div className="flex flex-col items-center w-full sm:ml-64 md:ml-64 lg:ml-64 justify-center min-h-screen px-2 sm:px-0">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-blue-700 mb-6 sm:mb-8 text-center drop-shadow-lg animate-fade-in">
          Please Select Mode to Travel
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 w-full max-w-xs sm:max-w-2xl mb-8 sm:mb-10">
          {modes.map((mode) => {
            let href = "/next/travel";
            if (mode.label === "AirPlane's") href = "/next/airplane";
            else if (mode.label === "Train") href = "/next/train";
            else if (mode.label === "Tour Package's") href = "/next/tour";
            return (
              <a
                key={mode.label}
                href={href}
                className={`group flex flex-col items-center justify-center px-6 sm:px-8 py-8 sm:py-10 rounded-2xl shadow-xl bg-gradient-to-br ${mode.color} text-white font-bold text-lg sm:text-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300 animate-fade-in-card`}
              >
                <span className="text-4xl sm:text-5xl mb-3 sm:mb-4 animate-bounce-slow">{mode.icon}</span>
                <span className="group-hover:underline">{mode.label}</span>
              </a>
            );
          })}
        </div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes fade-in-card {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-card {
          animation: fade-in-card 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 1.5s infinite;
        }
        @keyframes slide-in-sidebar {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-sidebar {
          animation: slide-in-sidebar 0.7s cubic-bezier(0.4,0,0.2,1) both;
        }
      `}</style>
    </main>
  );
}
