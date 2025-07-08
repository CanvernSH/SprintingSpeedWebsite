"use client";

import { useState } from "react";
import Link from 'next/link';

export default function SportPlans() {
  const [navOpen, setNavOpen] = useState(false);

  const plans = [
    {
      name: "Basic",
      price: "£60",
      detail: "1 hour session",
      features: [true, false, false, false],
    },
    {
      name: "Standard",
      price: "£275",
      detail: "5 hours at £55/hr",
      features: [true, true, false, false],
    },
    {
      name: "Pro",
      price: "£1000",
      detail: "20 hours at £50/hr",
      features: [true, true, true, true],
    },
  ];

  const features = [
    "Technique Improvement",
    "Strength Training",
    "Weekly Updates",
    "Best Value for Money",
  ];

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600 cursor-pointer">
            CoachSports
          </div>
          <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
            <li>
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            </li>
            <li>
              <Link href="/results" className="hover:text-blue-600 transition">Results</Link>
            </li>
            <li>
              <Link href="/plans" className="hover:text-blue-600 transition">Plans</Link>
            </li>
          </ul>
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={navOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        {navOpen && (
          <ul className="md:hidden bg-white shadow-md space-y-4 py-4 px-6 text-gray-700 font-semibold">
            <li><Link href="/" className="block hover:text-blue-600 transition" onClick={() => setNavOpen(false)}>Home</Link></li>
            <li><Link href="/results" className="block hover:text-blue-600 transition" onClick={() => setNavOpen(false)}>Results</Link></li>
            <li><Link href="/sportplans" className="block hover:text-blue-600 transition" onClick={() => setNavOpen(false)}>Sport Plans</Link></li>
          </ul>
        )}
      </nav>

      <main className="pt-24 px-6 bg-gray-50 min-h-screen">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-blue-600 mb-4">Sport Coaching Plans</h1>
          <p className="text-gray-700 mb-12">Choose a plan that fits your training goals and commitment level.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div key={plan.name} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
                <h2 className="text-2xl font-bold text-blue-600 mb-2">{plan.name}</h2>
                <p className="text-xl text-gray-800 mb-1">{plan.detail}</p>
                <p className="text-3xl font-semibold text-green-600 mb-6">{plan.price}</p>
                <table className="w-full text-left border-t border-gray-200">
                  <tbody>
                    {features.map((feature, idx) => (
                      <tr key={idx} className="border-b border-gray-100">
                        <td className="py-2 text-gray-700">{feature}</td>
                        <td className="text-right">
                          {plan.features[idx] ? (
                            <span className="text-green-500 font-bold">✔️</span>
                          ) : (
                            <span className="text-red-400 font-bold">✖️</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
