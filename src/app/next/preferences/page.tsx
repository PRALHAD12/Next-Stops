"use client";
import { useRouter } from "next/navigation";

export default function PreferencesPage() {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/next/thankyou");
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Select Your Preferences</h1>
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 mb-8">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <label className="flex items-center gap-3">
            <input type="radio" name="preference" value="super-luxury" className="accent-blue-600 text-black" />
            <span className="font-semibold text-gray-700">Super Luxury</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="radio" name="preference" value="ac" className="accent-blue-600 text-black" />
            <span className="font-semibold text-gray-700">AC</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="radio" name="preference" value="non-ac" className="accent-blue-600 text-black" />
            <span className="font-semibold text-gray-700">Non-AC</span>
          </label>
          <label className="flex items-center gap-3">
            <input type="radio" name="preference" value="affordable" className="accent-blue-600 text-black" />
            <span className="font-semibold text-gray-700">Affordable</span>
          </label>
          <button type="submit" className="mt-6 w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition cursor-pointer">Submit</button>
        </form>
      </div>
      <p className="text-sm text-gray-500 text-center max-w-md">
        <strong>Note:</strong> it's just for idea purpose. Our team will contact you regarding your choice and affordabilities.
      </p>
    </main>
  );
}
