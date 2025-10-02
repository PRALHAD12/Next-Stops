"use client";
import Image from "next/image";

const partners = [
  {
    name: "GoIbibo",
    logo: "/next-stop.jpg", // Replace with actual logo path
    description: "Leading travel booking platform for flights, hotels, and holidays.",
    url: "https://www.goibibo.com/"
  },
  {
    name: "MakeMyTrip",
    logo: "/next-stop.jpg", // Replace with actual logo path
    description: "India's top travel company for all your travel needs.",
    url: "https://www.makemytrip.com/"
  },
  {
    name: "Yatra",
    logo: "/next-stop.jpg", // Replace with actual logo path
    description: "Trusted travel partner for flights, hotels, and more.",
    url: "https://www.yatra.com/"
  }
];

export default function PartnersPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 px-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8 text-center animate-fade-in">
        <Image src="/next-stop.jpg" alt="Next Stops Logo" width={80} height={80} className="mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-blue-700 mb-6">Our Top Travelling Partners</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-gray-50 rounded-xl p-4 shadow hover:shadow-lg transition group"
            >
              <Image src={partner.logo} alt={partner.name + ' Logo'} width={60} height={60} className="mb-2 rounded-full" />
              <span className="text-lg font-semibold text-purple-700 group-hover:underline mb-1">{partner.name}</span>
              <span className="text-xs text-gray-600 mb-2">{partner.description}</span>
              <span className="text-xs text-blue-500 group-hover:text-blue-700">Visit Website</span>
            </a>
          ))}
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
