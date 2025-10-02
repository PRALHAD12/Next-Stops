"use client";
import Image from "next/image";

const premiumPartners = [
	"Partner's Tourist & Travels",
	"Sangitam Travels",
	"Khurana Travels",
	"Sharma Travels (Nanded)",
	"Zing Bus",
	"Sairam Travels",
	"Hamsafar Travels",
	"Shreyas Travels",
	"Dolphin Travels",
	"Split Bus",
	"Purple/Orange Travels",
	"Baba Travels (Nagpur)",
	"Ramdalal Holidays",
	"Laxmi Holidays",
	"Shree Vijay",
	"Pawan Travels",
	"Jogeshwari Travels",
	"Hans Travels",
];

export default function PartnersPage() {
	return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 px-2 sm:px-4">
      <div className="w-full max-w-3xl bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-4 sm:p-10 text-center animate-fade-in mx-auto border border-pink-200">
        <h2 className="text-2xl sm:text-4xl font-extrabold text-pink-700 mb-8 mt-2 drop-shadow-lg">
          Our Premium Booking Partners for Luxury Travels
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {premiumPartners.map((name, idx) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center bg-gradient-to-br from-white via-pink-50 to-purple-100 rounded-2xl shadow-lg p-4 sm:p-6 border-2 border-pink-200 hover:scale-105 hover:shadow-2xl transition-transform duration-300 min-h-[120px] group relative"
            >
              <span className="text-lg sm:text-xl font-bold text-gray-800 mb-2 text-center break-words group-hover:text-purple-700 transition-colors duration-300">
                {name}
              </span>
              <span className="text-xs sm:text-sm text-gray-500">
                Premium Partner #{idx + 1}
              </span>
            </div>
          ))}
        </div>
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
