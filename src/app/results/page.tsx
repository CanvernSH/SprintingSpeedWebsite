"use client";

import { useState } from "react";
import Link from 'next/link';

export default function ResultsPage() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600 cursor-pointer">
            CoachSports
          </div>
          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
            <li>
              <Link href="/" className="hover:text-blue-600 transition">Home</Link>
            </li>
            <li>
              <a href="/results" className="hover:text-blue-600 transition">Results</a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation menu"
          >
            {navOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <ul className="md:hidden bg-white shadow-md space-y-4 py-4 px-6 text-gray-700 font-semibold">
            <li>
              <a href="/" className="block hover:text-blue-600 transition" onClick={() => setNavOpen(false)}>Home</a>
            </li>
            <li>
              <a href="/results" className="block hover:text-blue-600 transition" onClick={() => setNavOpen(false)}>Results</a>
            </li>
          </ul>
        )}
      </nav>

      {/* Page Content */}
      <main className="min-h-screen bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold text-center text-blue-600 mb-12">
            Athlete Results & Success Stories
          </h1>

          <section className="grid md:grid-cols-2 gap-10">
            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h2 className="text-2xl font-semibold mb-2 text-blue-500">
                National Success
              </h2>
              <p className="text-gray-700">
                Over 25 athletes trained have gone on to represent Great Britain in major competitions.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h2 className="text-2xl font-semibold mb-2 text-blue-500">
                International Representation
              </h2>
              <p className="text-gray-700">
                Coached over 100 athletes from more than 15 countries across Europe, Asia, and the Americas.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h2 className="text-2xl font-semibold mb-2 text-blue-500">
                Testimonial Highlight
              </h2>
              <p className="text-gray-700 italic">
                “Working with Coach transformed my training. I reached new heights I never thought possible.”
              </p>
              <p className="text-sm text-gray-600 mt-2">– Sarah, Olympic Qualifier</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl shadow">
              <h2 className="text-2xl font-semibold mb-2 text-blue-500">
                Long-Term Impact
              </h2>
              <p className="text-gray-700">
                Many athletes trained have gone on to become coaches themselves, creating a legacy of success.
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
