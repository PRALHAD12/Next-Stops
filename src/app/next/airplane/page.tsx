"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL! ||
    "https://szukeiaxirpedkxkfgiu.supabase.co",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY! ||
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = await supabase.from("customers").insert([
      { ...form }
    ]);
    if (!error) {
      router.push("/next/preferences");
    } else {
      alert("Error saving data: " + error.message);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-2 sm:px-8 py-6 bg-gray-50">
      <form className="bg-white bg-opacity-90 rounded-2xl shadow-lg px-4 py-6 sm:p-8 w-full max-w-xs sm:max-w-xl animate-fade-in-card" onSubmit={handleSubmit}>
        <h2 className="text-xl font-bold text-blue-700 mb-6 text-center">Airplane - Customer Information</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
          <div>
            <label className="block mb-2 font-medium text-gray-700">Name</label>
            <input name="name" type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-black" placeholder="Enter your name" required value={form.name} onChange={handleChange} />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">Gender</label>
            <select name="gender" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-black" required value={form.gender} onChange={handleChange}>
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">Age</label>
            <input name="age" type="number" min="1" max="120" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-black" placeholder="Enter your age" required value={form.age} onChange={handleChange} />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">Pickup Point</label>
            <input name="pickup_point" type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-black" placeholder="Enter pickup location" required value={form.pickup_point} onChange={handleChange} />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">Dropping Point</label>
            <input name="dropping_point" type="text" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-black" placeholder="Enter dropping location" required value={form.dropping_point} onChange={handleChange} />
          </div>
          <div>
            <label className="block mb-2 font-medium text-gray-700">Mobile Number</label>
            <input name="mobile_number" type="tel" pattern="[0-9]{10}" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 text-black" placeholder="Enter mobile number" required value={form.mobile_number} onChange={handleChange} />
          </div>
        </div>
        <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition">Next</button>
      </form>
    </main>
  );
}
