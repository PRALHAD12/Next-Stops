"use client";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { createClient } from "@supabase/supabase-js";

//const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
// const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// if (!supabaseUrl || !supabaseKey) {
//   throw new Error('Missing Supabase environment variables');
// } 


export default function TrainForm() {
  // const router = useRouter();
  // const [form, setForm] = useState({
  //   name: "",
  //   gender: "",
  //   age: "",
  //   pickup_point: "",
  //   dropping_point: "",
  //   mobile_number: "",
  //   preferences: "Train"
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  //   setForm({ ...form, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const { error } = await supabase.from("customers").insert([
  //     { ...form }
  //   ]);
  //   if (!error) {
  //     router.push("/next/preferences");
  //   } else {
  //     alert("Error saving data: " + error.message);
  //   }
  // };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-8 bg-gradient-to-br from-gray-100 to-gray-300">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-purple-700 mb-3">
          Feature Coming Soon
        </h1>
        <p className="text-gray-800 mb-6">
          This Feature will coming soon!! Until then, you can talk to our team
          to get your train ticket booked.
        </p>
        <div className="text-sm text-gray-500">Contact: +918421514348</div>
      </div>
    </main>
  );

  // COMMENTED OUT - ORIGINAL BOOKING FORM CODE
  // return (
  //   <main className="flex min-h-screen flex-col items-center justify-center px-2 sm:px-8 py-6 bg-gradient-to-br from-blue-100 via-white to-blue-200">
  //     <div className="w-full max-w-lg mx-auto">
  //       <form className="bg-white rounded-3xl shadow-2xl px-8 py-10 animate-fade-in-card border border-blue-100" onSubmit={handleSubmit}>
  //         <div className="flex flex-col items-center mb-8">
  //           <span className="inline-block bg-blue-600 rounded-full p-4 mb-2 shadow-lg">
  //             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-8 h-8">
  //               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9V7.5A2.25 2.25 0 016 5.25h12A2.25 2.25 0 0120.25 7.5V9m-16.5 0h16.5m-16.5 0v7.5A2.25 2.25 0 006 18.75h12a2.25 2.25 0 002.25-2.25V9m-16.5 0v-.75A2.25 2.25 0 016 6h12a2.25 2.25 0 012.25 2.25V9" />
  //             </svg>
  //           </span>
  //           <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-700 mb-2 text-center tracking-tight">Train - Customer Information</h2>
  //           <div className="w-16 h-1 bg-blue-200 rounded-full mb-2"></div>
  //           <p className="text-gray-500 text-center text-sm">Fill in your details to book your train journey with Next Stops.</p>
  //         </div>
  //         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
  //           <div>
  //             <label className="block mb-2 font-semibold text-blue-700">Name</label>
  //             <input name="name" type="text" className="w-full px-4 py-2 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 text-black bg-blue-50 placeholder-gray-400" placeholder="Enter your name" required value={form.name} onChange={handleChange} />
  //           </div>
  //           <div>
  //             <label className="block mb-2 font-semibold text-blue-700">Gender</label>
  //             <select name="gender" className="w-full px-4 py-2 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 text-black bg-blue-50" required value={form.gender} onChange={handleChange}>
  //               <option value="">Select gender</option>
  //               <option value="male">Male</option>
  //               <option value="female">Female</option>
  //               <option value="other">Other</option>
  //             </select>
  //           </div>
  //           <div>
  //             <label className="block mb-2 font-semibold text-blue-700">Age</label>
  //             <input name="age" type="number" min="1" max="120" className="w-full px-4 py-2 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 text-black bg-blue-50 placeholder-gray-400" placeholder="Enter your age" required value={form.age} onChange={handleChange} />
  //           </div>
  //           <div>
  //             <label className="block mb-2 font-semibold text-blue-700">Pickup Point</label>
  //             <input name="pickup_point" type="text" className="w-full px-4 py-2 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 text-black bg-blue-50 placeholder-gray-400" placeholder="Enter pickup location" required value={form.pickup_point} onChange={handleChange} />
  //           </div>
  //           <div>
  //             <label className="block mb-2 font-semibold text-blue-700">Dropping Point</label>
  //             <input name="dropping_point" type="text" className="w-full px-4 py-2 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 text-black bg-blue-50 placeholder-gray-400" placeholder="Enter dropping location" required value={form.dropping_point} onChange={handleChange} />
  //           </div>
  //           <div>
  //             <label className="block mb-2 font-semibold text-blue-700">Mobile Number</label>
  //             <input name="mobile_number" type="tel" pattern="[0-9]{10}" className="w-full px-4 py-2 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-400 text-black bg-blue-50 placeholder-gray-400" placeholder="Enter mobile number" required value={form.mobile_number} onChange={handleChange} />
  //           </div>
  //         </div>
  //         <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold rounded-xl shadow-lg hover:scale-105 hover:from-blue-600 hover:to-blue-800 transition-transform duration-200 cursor-pointer text-lg">Book Train Ticket</button>
  //       </form>
  //     </div>
  //   </main>
  // );
}
