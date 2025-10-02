"use client";
import Image from "next/image";

export default function CancellationPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center animate-fade-in">
        <Image
          src="/next-stop.jpg"
          alt="Next Stops Logo"
          width={80}
          height={80}
          className="mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold text-purple-700 mb-3">
          Feature Coming Soon
        </h1>
        <p className="text-gray-800 mb-6">
           This Feature will coming soon!!  Until then, you can
          talk to our team to get your ticket cancelled.
        </p>
        <div className="text-sm text-gray-500">Contact: +91-XXXXXXXXXX</div>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
      `}</style>
    </main>
  );
}
