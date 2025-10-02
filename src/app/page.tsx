
import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50 relative">
      <div className="absolute top-4 right-4 z-20">
       
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/next-stop.jpg"
          alt="Next Stops Logo"
          width={120}
          height={120}
          className="mb-6 rounded-full shadow-lg"
        />
        <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">
          Welcome to the Next Stops
        </h1>
        <h2 className="text-xl font-semibold text-gray-700 text-center mb-8">
          Get ready to have best and affordable travelling Experience
        </h2>
        <a
          href="/next"
          className="relative inline-block px-8 py-3 font-semibold text-white bg-blue-600 rounded-full shadow-lg transition-transform duration-300 hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          <span className="animate-pulse">Go ahead</span>
        </a>
      </div>
    </main>
  );
}
