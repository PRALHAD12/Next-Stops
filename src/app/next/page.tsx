"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar";

export default function NextPage() {
  const router = useRouter();
  
  const modes = [
    { 
      label: "Road Travel", 
      description: "Book cars, buses & taxis",
      color: "from-blue-600 to-blue-700", 
      icon: "🚗",
      href: "/next/travel"
    },
    { 
      label: "Air Travel", 
      description: "Flight bookings & services",
      color: "from-sky-500 to-blue-600", 
      icon: "✈️",
      href: "/next/airplane"
    },
    { 
      label: "Rail Travel", 
      description: "Train tickets & reservations",
      color: "from-emerald-500 to-teal-600", 
      icon: "🚆",
      href: "/next/train"
    },
    { 
      label: "Tour Packages", 
      description: "Complete travel experiences",
      color: "from-purple-600 to-pink-600", 
      icon: "🎒",
      href: "/next/tour"
    },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar currentPath="/next" />
      
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Choose Your Travel Mode
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Select from our comprehensive travel services to plan your perfect journey
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Travel Mode Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 animate-scale-in">
            {modes.map((mode, index) => (
              <div
                key={mode.label}
                className="group cursor-pointer"
                onClick={() => router.push(mode.href)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`
                  relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 
                  bg-gradient-to-br ${mode.color} p-8 h-64 flex flex-col justify-between
                  transform hover:scale-105 hover:-translate-y-2
                `}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-white rounded-full"></div>
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-6xl transform group-hover:scale-110 transition-transform duration-300">
                        {mode.icon}
                      </div>
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-opacity-90 transition-colors">
                      {mode.label}
                    </h3>
                    <p className="text-white text-opacity-90 text-sm leading-relaxed">
                      {mode.description}
                    </p>
                  </div>
                  
                  {/* Bottom Action */}
                  <div className="relative z-10 flex items-center text-white text-sm font-medium">
                    <span className="group-hover:underline">Book Now</span>
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Features Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">24/7 Support</h3>
              <p className="text-slate-600 text-sm">Round-the-clock customer assistance for all your travel needs</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Secure Booking</h3>
              <p className="text-slate-600 text-sm">Safe and secure payment processing with instant confirmation</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Instant Booking</h3>
              <p className="text-slate-600 text-sm">Quick and easy booking process with immediate confirmation</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
