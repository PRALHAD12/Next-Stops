"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const features = [
    {
      icon: "🌍",
      title: "Global Coverage",
      description: "Travel anywhere with our worldwide network"
    },
    {
      icon: "💰",
      title: "Best Prices",
      description: "Competitive rates for all travel modes"
    },
    {
      icon: "⚡",
      title: "Instant Booking",
      description: "Quick and hassle-free reservations"
    },
    {
      icon: "🛡️",
      title: "Secure & Safe",
      description: "Your safety is our top priority"
    }
  ];

  const stats = [
    { number: "50K+", label: "Happy Customers" },
    { number: "100+", label: "Cities Covered" },
    { number: "24/7", label: "Customer Support" },
    { number: "99%", label: "Success Rate" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="text-center">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl flex items-center justify-center shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <span className="text-5xl font-bold text-white">NS</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✈</span>
                </div>
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 animate-fade-in-up">
              Welcome to <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">NextStops</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your ultimate travel companion for seamless journeys. Experience the best in affordable, reliable, and comfortable travel solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                onClick={() => router.push('/next')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Start Your Journey</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              
              <button
                onClick={() => router.push('/next/about')}
                className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Choose NextStops?</h2>
            <p className="text-xl text-slate-600">Experience travel like never before with our premium services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover:bg-slate-50 transition-colors duration-200">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Join thousands of satisfied travelers who trust Next Stops for their journey
          </p>
          <button
            onClick={() => router.push('/next')}
            className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            Book Your Trip Now
          </button>
        </div>
      </section>
    </main>
  );
}
