export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-50">
      <h1 className="text-4xl font-bold text-green-700 mb-6 text-center">Thank You!</h1>
      <p className="text-lg text-gray-700 text-center">We appreciate your interest. Our team will contact you soon regarding your preferences and travel plans.</p>
      <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-md shadow-md hover:bg-green-500 cursor-pointer">
        Go Back Home
      </button>
    </main>
  );
}
