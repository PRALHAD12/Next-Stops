"use client";
import Sidebar from "../../components/Sidebar";

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
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar currentPath="/next/partners" />
      
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Travel Partners</h1>
                <p className="text-slate-600">Our trusted network of premium travel providers</p>
              </div>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-amber-500 via-orange-400 to-transparent"></div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{premiumPartners.length}+</div>
              <div className="text-slate-600">Trusted Partners</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
              <div className="text-slate-600">Cities Covered</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-slate-600">Service Available</div>
            </div>
          </div>

          {/* Partners Grid */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Our Premium Partners</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {premiumPartners.map((name, idx) => (
                <div
                  key={name}
                  className="group bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                      {name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {name}
                      </h3>
                      <p className="text-xs text-slate-500">Partner #{idx + 1}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center space-x-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Verified</span>
                    </span>
                    <span className="text-green-600 font-medium">Active</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
