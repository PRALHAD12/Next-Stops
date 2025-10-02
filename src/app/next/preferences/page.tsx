"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../../supabase-client";

export default function PreferencesPage() {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const preference = data.get("preference");
    // Save to Supabase
    const { error } = await supabase.from("preferences").insert([{ preference }]);
    setLoading(false);
    if (error) {
      setError("Failed to save preference. Please try again.");
      return;
    }
    router.push("/next/thankyou");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-br from-blue-100 via-white to-blue-200">
      <div className="w-full max-w-lg mx-auto">
        <div className="bg-white rounded-3xl shadow-2xl px-8 py-10 border border-blue-100 animate-fade-in-card mb-8">
          <div className="flex flex-col items-center mb-8">
            <span className="inline-block bg-blue-600 rounded-full p-4 mb-2 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
              </svg>
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700 mb-2 text-center tracking-tight">Select Your Preferences</h1>
            <div className="w-16 h-1 bg-blue-200 rounded-full mb-2"></div>
            <p className="text-gray-500 text-center text-sm">Choose your preferred travel comfort level for a personalized experience.</p>
          </div>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <label className="flex items-center gap-4 p-4 rounded-xl border-2 border-blue-100 hover:border-blue-400 transition cursor-pointer bg-blue-50">
              <input type="radio" name="preference" value="super-luxury" className="accent-blue-600 w-5 h-5" />
              <span className="font-semibold text-blue-700 text-lg">Super Luxury</span>
            </label>
            <label className="flex items-center gap-4 p-4 rounded-xl border-2 border-blue-100 hover:border-blue-400 transition cursor-pointer bg-blue-50">
              <input type="radio" name="preference" value="ac" className="accent-blue-600 w-5 h-5" />
              <span className="font-semibold text-blue-700 text-lg">AC</span>
            </label>
            <label className="flex items-center gap-4 p-4 rounded-xl border-2 border-blue-100 hover:border-blue-400 transition cursor-pointer bg-blue-50">
              <input type="radio" name="preference" value="non-ac" className="accent-blue-600 w-5 h-5" />
              <span className="font-semibold text-blue-700 text-lg">Non-AC</span>
            </label>
            <label className="flex items-center gap-4 p-4 rounded-xl border-2 border-blue-100 hover:border-blue-400 transition cursor-pointer bg-blue-50">
              <input type="radio" name="preference" value="affordable" className="accent-blue-600 w-5 h-5" />
              <span className="font-semibold text-blue-700 text-lg">Affordable</span>
            </label>
            <button type="submit" className="mt-6 w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:from-blue-600 hover:to-blue-800 transition-transform duration-200 cursor-pointer text-lg" disabled={loading}>
              {loading ? "Submitting..." : "Submit Preference"}
            </button>
            {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
          </form>
        </div>
        <div className="text-center max-w-md mt-4 space-y-3">
          
          <span className="inline-block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 text-white font-bold text-base sm:text-lg px-4 py-3 rounded-xl shadow-md border-2 border-cyan-200 mt-2 animate-gradient-x" style={{backgroundSize: '200% 200%', animation: 'gradient-x 3s ease infinite'}}>
            Note: Our team will contact you shortly after you fill out the form, to discuss prices and options that best fit your requirements.
          </span>
          <style>{`
            @keyframes gradient-x {
              0% {background-position: 0% 50%;}
              50% {background-position: 100% 50%;}
              100% {background-position: 0% 50%;}
            }
          `}</style>
        </div>
      </div>
      <footer className="w-full flex justify-center mt-8">
        <span className="text-xs text-gray-400 font-semibold tracking-wide">T&amp;C applies</span>

      </footer>
    </main>
  );
}
