"use client";

import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import LoopCarousel from './components/LoopCarousel';
import FAQ from './components/FAQ';
import FeaturesCarousel from './components/FeaturesCarousel';

export default function Home() {
  const [navOpen, setNavOpen] = useState(false);

  const faqs = [
    {
      question: "How do I get started with training?",
      answer: "Just head to the Contact section and fill out the form or send an email. I’ll get back to you with options.",
    },
    {
      question: "What ages do you coach?",
      answer: "I coach athletes of all levels, typically starting from age 10 up to adult professionals.",
    },
    {
      question: "Do you offer remote/online coaching?",
      answer: "Yes! I offer fully remote training plans and video analysis options for athletes who can’t attend in person.",
    },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <Image 
              src="/images/SprintingSpeed.png"
              alt="SprintingSpeed"
              width={90}
              height={10}
              priority
            />
          </div>
          <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
            <li>
              <Link href="#home" className="hover:text-blue-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/results" className="hover:text-blue-600 transition">
                Results
              </Link>
            </li>
            <li>
              <Link href="/plans" className="hover:text-blue-600 transition">
              Plans
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-blue-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-blue-600 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-blue-600 transition">
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation menu"
          >
            {navOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {navOpen && (
          <ul className="md:hidden bg-white shadow-md space-y-4 py-4 px-6 text-gray-700 font-semibold">
            <li>
              <a
                href="#home"
                className="block hover:text-blue-600 transition"
                onClick={() => setNavOpen(false)}
              >
                Home
              </a>
            </li>
            <li>
              <Link
                href="\results"
                className="block hover:text-blue-600 transition"
                onClick={() => setNavOpen(false)}
              >
                Results
              </Link>
            </li>
              <Link
                href="\plans"
                className="block hover:text-blue-600 transition"
                onClick={() => setNavOpen(false)}
              >
                Plans
              </Link>
            <li>
              <a
                href="#about"
                className="block hover:text-blue-600 transition"
                onClick={() => setNavOpen(false)}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block hover:text-blue-600 transition"
                onClick={() => setNavOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block hover:text-blue-600 transition"
                onClick={() => setNavOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>

      {/* Push content down so navbar doesn't cover */}
      <div id="home" className="pt-20">
        {/* Hero Section */}
        <section className="w-full">
          <LoopCarousel />
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-12 text-black">About Your Coach</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-3xl font-bold text-blue-600 mb-2">GB Athletes</p>
                <p className="text-gray-700 text-lg">Trained at the national level</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-3xl font-bold text-blue-600 mb-2">35+ Years</p>
                <p className="text-gray-700 text-lg">Proven coaching experience</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-3xl font-bold text-blue-600 mb-2">100+ Athletes</p>
                <p className="text-gray-700 text-lg">Coached internationally</p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <p className="text-3xl font-bold text-blue-600 mb-2">Trusted by Many</p>
                <p className="text-gray-700 text-lg">Real results, real testimonials</p>
              </div>
            </div>
          </div>
        </section>

        {/*Features in a Carousel*/}
        <section className="w-full">
          <FeaturesCarousel />
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-black">Frequently Asked Questions</h2>
            <FAQ faqs={faqs} />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Coaching Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-2xl shadow-md">
                <h3 className="text-2xl font-semibold mb-2">1-on-1 Training</h3>
                <p className="text-gray-700">Customized sessions focusing on your personal goals and fitness level.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-md">
                <h3 className="text-2xl font-semibold mb-2">Team Coaching</h3>
                <p className="text-gray-700">Comprehensive programs to improve team coordination and strategy.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-md">
                <h3 className="text-2xl font-semibold mb-2">Online Programs</h3>
                <p className="text-gray-700">Remote coaching plans tailored to your sport, schedule, and lifestyle.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="contact" className="py-20 px-6 bg-blue-600 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-lg mb-6">Let’s work together to unlock your full potential.</p>
          <a
            href="#"
            className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-gray-100 transition"
          >
            Contact Me
          </a>
        </section>

        {/* Footer */}
        <footer className="py-10 px-6 bg-gray-800 text-gray-300 text-center">
          <p>&copy; {new Date().getFullYear()} SprintingSpeed.com. All rights reserved</p>
        </footer>
      </div>
    </>
  );
}
