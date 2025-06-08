import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <section className="min-h-screen grid place-items-center bg-gradient-to-br from-violet-500 via-indigo-500 to-blue-500 text-white">
      <div className="text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-bold drop-shadow-lg">
          Turn Your Attention&nbsp;into Wealth
        </h1>
        <p className="max-w-xl mx-auto text-lg opacity-90">
          Watch ads, give feedback, earn real money. Join the Attention
          Revolution with&nbsp;AdVestors.
        </p>
        <Link
          to="/login"
          className="inline-block bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg transition"
        >
          Get&nbsp;Started
        </Link>
      </div>
    </section>
  );
}
