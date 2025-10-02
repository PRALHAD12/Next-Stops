"use client";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-2 sm:px-4 relative">
      <div className="absolute top-4 right-4 z-50">
        <Image src="/new-logo.jpg" alt="Next Stops Logo" width={60} height={60} className="rounded-full shadow-lg" />
      </div>
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-4 sm:p-10 text-center animate-fade-in mx-auto border border-purple-200">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-4 drop-shadow-lg">About NextStops</h1>
        <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
          NextStops was founded on <span className="font-semibold text-purple-700">9th August 2025</span> in collaboration with <span className="font-semibold text-pink-700">Partner’s Tours & Travels</span> and <span className="font-semibold text-blue-700">Callsahead</span> (a customer support call center).<br /><br />
          Our primary goal is to make luxury bus travel more affordable by offering guaranteed discounts ranging from <span className="font-semibold text-green-700">8% to 13%</span>.<br /><br />
          We provide access to almost every bus service across Maharashtra at transparent and budget-friendly prices — with no need for negotiations. The choice is always yours.<br /><br />
          In addition to buses, we also offer domestic and international flights, ensuring convenience for every kind of traveler.<br /><br />
          <span className="italic text-purple-600">Coming soon:</span> train ticket bookings along with curated tour packages to make your journeys even smoother.<br /><br />
          <span className="font-bold text-pink-700">At NextStops, your journey is our priority.</span>
        </p>
        <h2 className="text-2xl font-bold text-purple-700 mb-4 mt-8">Leadership</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
          <div className="flex flex-col items-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-xl shadow p-4 border border-blue-200">
            <Image src="/ajay.jpg" alt="Ajaysingh Shekhawat" width={90} height={90} className="rounded-full shadow mb-3" />
            <span className="text-lg font-bold text-blue-700 mb-1">Ajaysingh Shekhawat</span>
            <span className="text-sm text-gray-700 mb-1">Founder & CEO, NextStops</span>
            <span className="text-sm text-gray-700">Co-founder, Callsahead</span>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-xl shadow p-4 border border-pink-200">
            <Image src="/patel.jpg" alt="Rahil Bhai Patel" width={90} height={90} className="rounded-full shadow mb-3" />
            <span className="text-lg font-bold text-pink-700 mb-1">Rahil Bhai Patel</span>
            <span className="text-sm text-gray-700 mb-1">Founder, Partner’s Tours & Travels</span>
            <span className="text-sm text-gray-700">Founder & Managing Director, NextStops</span>
          </div>
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
      `}</style>
    </main>
  );
}
