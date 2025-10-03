"use client";

import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Sidebar from "../../components/Sidebar";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ||
    "https://szukeiaxirpedkxkfgiu.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6dWtlaWF4aXJwZWRreGtmZ2l1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkzMDMyMTQsImV4cCI6MjA3NDg3OTIxNH0.a6ISlaJSTezZaNZgytxVvNB9-OZqJ6JxC1AWhqWFXBs"
);

export default function AirplaneForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    gender: "",
    age: "",
    pickup_point: "",
    dropping_point: "",
    mobile_number: "",
    preferences: "Airplane"
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      const { error } = await supabase.from("customers").insert([
        {
          name: form.name,
          gender: form.gender,
          age: form.age,
          pickup_point: form.pickup_point,
          dropping_point: form.dropping_point,
          mobile_number: form.mobile_number,
          preferences: form.preferences
        }
      ]);
      
      if (!error) {
        router.push("/next/preferences");
      } else {
        alert("Error saving data: " + error.message);
      }
    } catch {
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar currentPath="/next/airplane" />
      
      <main className="flex-1 p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8 animate-fade-in-up">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-slate-900">Flight Booking</h1>
                <p className="text-slate-600">Complete your flight reservation details</p>
              </div>
            </div>
            <div className="w-full h-px bg-gradient-to-r from-sky-500 via-blue-400 to-transparent"></div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information Section */}
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                  <svg className="w-5 h-5 text-sky-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Passenger Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors bg-white text-slate-900 placeholder-slate-400"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Gender</label>
                    <select
                      name="gender"
                      required
                      value={form.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors bg-white text-slate-900"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Age</label>
                    <input
                      name="age"
                      type="number"
                      min="1"
                      max="120"
                      required
                      value={form.age}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors bg-white text-slate-900 placeholder-slate-400"
                      placeholder="Enter age"
                    />
                  </div>
                </div>
              </div>

              {/* Flight Details Section */}
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                  <svg className="w-5 h-5 text-sky-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Flight Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Departure Airport</label>
                    <input
                      name="pickup_point"
                      type="text"
                      required
                      value={form.pickup_point}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors bg-white text-slate-900 placeholder-slate-400"
                      placeholder="Enter departure city/airport"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Arrival Airport</label>
                    <input
                      name="dropping_point"
                      type="text"
                      required
                      value={form.dropping_point}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors bg-white text-slate-900 placeholder-slate-400"
                      placeholder="Enter arrival city/airport"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information Section */}
              <div>
                <h2 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
                  <svg className="w-5 h-5 text-sky-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Mobile Number</label>
                    <input
                      name="mobile_number"
                      type="tel"
                      pattern="[0-9]{10}"
                      required
                      value={form.mobile_number}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors bg-white text-slate-900 placeholder-slate-400"
                      placeholder="Enter 10-digit mobile number"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6 border-t border-slate-200">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:from-sky-600 hover:to-blue-700 focus:ring-4 focus:ring-sky-300 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 cursor-pointer"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      <span>Book Flight</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

