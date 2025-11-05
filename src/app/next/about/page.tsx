"use client";
import Image from "next/image";
import Sidebar from "../../components/Sidebar";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar currentPath="/next/about" />

      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">
                  About NextStops
                </h1>
                <p className="text-slate-600">Your journey, our priority</p>
              </div>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-purple-600 via-blue-400 to-transparent"></div>
          </div>

          {/* Company Story */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8 animate-scale-in">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              About us..
            </h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-600 leading-relaxed mb-4">
                NextStops was founded on{" "}
                <span className="font-semibold text-purple-600">
                  9th August 2025
                </span>{" "}
                in collaboration with{" "}
                <span className="font-semibold text-blue-600">
                  Partner&apos;s Tours & Travels
                </span>{" "}
                and{" "}
                <span className="font-semibold text-green-600">Callsahead</span>{" "}
                (a customer support call center).
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Our primary goal is to make luxury bus travel more affordable by
                offering guaranteed discounts ranging from{" "}
                <span className="font-semibold text-green-600">8% to 13%</span>.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                We provide access to almost every bus service across Maharashtra
                at transparent and budget-friendly prices — with no need for
                negotiations. The choice is always yours.
              </p>
              <p className="text-slate-600 leading-relaxed">
                In addition to buses, we also offer domestic and international
                flights, ensuring convenience for every kind of traveler.{" "}
                <span className="italic text-purple-600">Coming soon:</span>{" "}
                train ticket bookings along with curated tour packages to make
                your journeys even smoother.
              </p>
            </div>
          </div>

          {/* Leadership Team */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center">
                <div className="relative mb-4">
                  <Image
                    src="/ajay.jpg"
                    alt="Ajaysingh Shekhawat"
                    width={120}
                    height={120}
                    className="rounded-full shadow-lg mx-auto"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Ajaysingh Shekhawat
                </h3>
                <p className="text-blue-600 font-medium mb-1">
                  Founder & CEO, NextStops
                </p>
                <p className="text-slate-500 text-sm">Co-founder, Callsahead</p>
              </div>

              <div className="text-center">
                <div className="relative mb-4">
                  <Image
                    src="/patel.jpg"
                    alt="Rahil Bhai Patel"
                    width={120}
                    height={120}
                    className="rounded-full shadow-lg mx-auto"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Rahil Bhai Patel
                </h3>
                <p className="text-purple-600 font-medium mb-1">
                  Founder & Managing Director, NextStops
                </p>
                <p className="text-slate-500 text-sm">
                  Founder, Partner&apos;s Tours & Travels
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-blue-800 mb-3">
                Our Mission
              </h3>
              <p className="text-blue-700">
                To make travel accessible, affordable, and hassle-free for
                everyone while maintaining the highest standards of service
                quality.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">
                Our Vision
              </h3>
              <p className="text-purple-700">
                To become India&apos;s most trusted travel platform, connecting every
                destination with reliable, comfortable, and affordable
                transportation.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}