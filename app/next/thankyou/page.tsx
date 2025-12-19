"use client";
import { useRouter } from "next/navigation";

export default function ThankYouPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center p-6">
      <div className="max-w-2xl mx-auto text-center">
        {/* Success Animation */}
        <div className="mb-8 animate-scale-in">
          <div className="w-32 h-32 mx-auto mb-6 relative">
            <div className="w-32 h-32 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="animate-fade-in-up">
          <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-6">
            Thank You!
          </h1>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-slate-200">
            <h2 className="text-2xl font-semibold text-slate-800 mb-4">
              📞 Our Team Will Contact You Soon!
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              We appreciate your trust in NextStops. Our team will contact you soon to confirm your booking and discuss your travel details and preferences. Get ready for an amazing journey!
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="text-center p-4">
                <div className="text-2xl mb-2">📧</div>
                <div className="text-sm font-medium text-slate-700">Email Confirmation</div>
                <div className="text-xs text-slate-500">Within 5 minutes</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl mb-2">📞</div>
                <div className="text-sm font-medium text-slate-700">Call from Team</div>
                <div className="text-xs text-slate-500">Within 20 minutes</div>
              </div>
              <div className="text-center p-4">
                <div className="text-2xl mb-2">🎫</div>
                <div className="text-sm font-medium text-slate-700">Travel Documents</div>
                <div className="text-xs text-slate-500">Before departure</div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button
              onClick={() => router.push('/')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              🏠 Back to Home
            </button>
            <button
              onClick={() => router.push('/next')}
              className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors duration-200 cursor-pointer"
            >
              ✈️ Book Another Trip
            </button>
          </div>

          {/* Brand Message */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">NextStops</h3>
            <p className="text-blue-100 text-lg font-medium">Your Journey, Our Priority</p>
            <div className="flex justify-center space-x-4 mt-4">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
