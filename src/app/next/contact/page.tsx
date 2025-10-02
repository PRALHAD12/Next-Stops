"use client";
import Image from "next/image";

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 px-2 sm:px-4 relative">
      <div className="absolute top-4 right-4 z-50">
        <Image src="/new-logo.jpg" alt="Next Stops Logo" width={60} height={60} className="rounded-full shadow-lg" />
      </div>
      <div className="w-full max-w-2xl bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl p-6 sm:p-12 text-center animate-fade-in mx-auto border border-gray-200">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-6 drop-shadow-lg tracking-tight">Contact Us</h1>
        <p className="text-base sm:text-lg text-gray-700 mb-8 leading-relaxed">
          We’d love to hear from you! Reach out to us anytime through the details below.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
          <div className="flex flex-col items-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 rounded-xl shadow p-4 border border-blue-200">
            <span className="text-lg font-bold text-blue-700 mb-1">Ajaysingh Shekhawat</span>
            <span className="text-sm text-gray-700 mb-1">Founder & CEO, NextStops</span>
            <span className="flex items-center gap-2 text-sm text-green-700 mb-1">📱 WhatsApp: <span className="font-semibold">+91 7219748513</span></span>
            <span className="flex items-center gap-2 text-sm text-purple-700">✉ Email: <span className="font-semibold">ajaysingh1rty@gmail.com</span></span>
          </div>
          <div className="flex flex-col items-center bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-xl shadow p-4 border border-pink-200">
            <span className="text-lg font-bold text-pink-700 mb-1">Rahil Bhai Patel</span>
            <span className="text-sm text-gray-700 mb-1">Founder & Managing Director, NextStops</span>
            <span className="flex items-center gap-2 text-sm text-green-700 mb-1">📱 WhatsApp: <span className="font-semibold">+91 8421514348</span></span>
            <span className="flex items-center gap-2 text-sm text-purple-700">✉ Email: <span className="font-semibold">rahilp756@gmail.com</span></span>
          </div>
        </div>
        <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 rounded-xl shadow p-4 border border-purple-200 mb-8">
          <h2 className="text-xl font-bold text-purple-700 mb-2">Office Address</h2>
          <p className="text-sm text-gray-700">
            Near Datta Mandir Bus Stand,<br />
            Bhadgaon Road, Chalisgaon,<br />
            District Jalgaon, Maharashtra
          </p>
        </div>
        <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-xl shadow p-4 border border-pink-200">
          <h2 className="text-xl font-bold text-pink-700 mb-2">License Details</h2>
          <p className="text-sm text-gray-700 mb-1">(Receipt Number): <span className="font-semibold">2520800319931176</span></p>
          <p className="text-sm text-gray-700">(Application ID Number): <span className="font-semibold">103263493403</span></p>
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
