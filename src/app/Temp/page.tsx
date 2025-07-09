'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[90vh] px-6 text-center">
        {/* Background image */}
        <Image
          src="/images/sprintingspeedimage.png" // Make sure this image exists in your /public folder
          alt="Runner"
          fill
          className="object-cover opacity-20"
        />
        <div className="z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Improve Your Running Today
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Get faster, stronger, and injury-free with world-class coaching.
          </p>
          <Link href="#contact">
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg rounded-2xl transition duration-300 shadow-lg">
              Start Your Training Now
            </button>
          </Link>
        </div>
      </section>

      {/* Why Train with me */}
      <section className="bg-white text-gray-900 py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Why Train With Me?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-12">
          With over 35 years of coaching experience and a track record of working with GB athletes, I bring elite-level training principles to every athlete I work with — whether you're just starting or chasing PBs.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-6 bg-gray-100 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
            <p>100+ athletes trained at national and international levels.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Tailored Programs</h3>
            <p>Custom training plans based on your goals, ability, and schedule.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Injury-Free Focus</h3>
            <p>Technique-centered training to reduce risk and improve longevity.</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-900 text-white py-16 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Training Programs</h2>
        <p className="text-lg max-w-2xl mx-auto mb-12">
          Whether you're a beginner or a seasoned athlete, there's a program designed to take your performance to the next level.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Online Coaching */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-2">Online Coaching</h3>
            <p className="mb-4">
              Get personalized training plans, technique reviews, and support — all online. Perfect for athletes anywhere in the world.
            </p>
            <p className="text-yellow-400 font-bold">Starts at £49/month</p>
          </div>

          {/* Team or Club Coaching */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-2">Team / Club Coaching</h3>
            <p className="mb-4">
              Custom training blocks and hands-on coaching for schools, clubs, or performance teams. Ideal for group development.
            </p>
            <p className="text-yellow-400 font-bold">Custom quotes available</p>
          </div>

          {/* 1-on-1 In-Person Training */}
          <div className="bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-2">1-on-1 In-Person</h3>
            <p className="mb-4">
              Train directly with me in a high-performance environment. Focused attention on technique, speed, and power.
            </p>
            <p className="text-yellow-400 font-bold">From £70/session</p>
          </div>
        </div>
      </section>

      {/* Testimonials*/}
      <section className="bg-white text-gray-900 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Athlete Success Stories</h2>
        <p className="text-lg max-w-2xl mx-auto mb-12">
          Hear from athletes who have transformed their performance through proven speed training and coaching.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
            <p className="italic mb-4">“I dropped 0.4 seconds off my 100m after just 6 weeks. The technique work changed everything.”</p>
            <p className="font-semibold">— Jordan M., U20 Sprinter</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
            <p className="italic mb-4">“Our school relay team went from 5th to 1st in a single season. The drills were elite-level.”</p>
            <p className="font-semibold">— Coach Elena, Track Club</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
            <p className="italic mb-4">“I finally stopped getting shin splints and started improving my sprint mechanics. Best coaching I’ve had.”</p>
            <p className="font-semibold">— Michael A., Masters Athlete</p>
          </div>
        </div>
      </section>

      {/* Call to action*/}
      <section className="bg-red-600 text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Start Your Speed Journey?</h2>
        <p className="text-lg max-w-xl mx-auto mb-8">
          Whether you're chasing PBs, rebuilding your stride, or building explosive speed — let’s get to work.
        </p>
        <a
          href="mailto:your@email.com" // Replace with your real email or link
          className="inline-block bg-white text-red-600 font-semibold px-8 py-3 rounded-xl text-lg hover:bg-gray-100 transition"
        >
          Contact Me Today
        </a>
      </section>

      {/* FAQ */}
      <section className="bg-gray-100 text-gray-900 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6">
            {/* Question 1 */}
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">What kind of athletes do you work with?</h3>
              <p>I train sprinters, jumpers, team-sport athletes, and even recreational runners. Programs are tailored for beginners through to elite performers.</p>
            </div>

            {/* Question 2 */}
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">Can I train with you remotely?</h3>
              <p>Yes — I offer full online coaching including personalized plans, video feedback, and technique breakdowns via Zoom and email.</p>
            </div>

            {/* Question 3 */}
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">Do you offer one-off sessions?</h3>
              <p>Absolutely. You can book a single in-person or Zoom session to work on specific areas like mechanics, starts, or sprint drills.</p>
            </div>

            {/* Question 4 */}
            <div className="border-b pb-4">
              <h3 className="text-xl font-semibold mb-2">Where are in-person sessions held?</h3>
              <p>I typically coach at [insert location or city], but sessions can be arranged based on availability and facility access.</p>
            </div>
          </div>
        </div>
      </section>

      {/*Footer*/}
      <footer className="bg-gray-900 text-gray-300 py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">&copy; {new Date().getFullYear()} Sprinting Speed Coaching. All rights reserved.</p>

          <nav className="flex space-x-6">
            <a href="#services" className="hover:text-white transition">Programs</a>
            <a href="#testimonials" className="hover:text-white transition">Success Stories</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
          </nav>

          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Replace # with your social links */}
            <a href="#" aria-label="Twitter" className="hover:text-white transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M8 19c11 0 17-9 17-17v-1c-1 1-3 2-4 3a6 6 0 0 0 3-4c-1 1-2 2-3 2a6 6 0 0 0-10 5A17 17 0 0 1 3 4a6 6 0 0 0 2 8 6 6 0 0 1-3-1v1a6 6 0 0 0 5 6 6 6 0 0 1-3 0z" /></svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm4.5-.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" /></svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-white transition">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11 9.87v-6.97h-3v-2.9h3v-2.2c0-3 1.8-4.7 4.5-4.7 1.3 0 2.6.2 2.6.2v3h-1.6c-1.5 0-2 1-2 2v2h3.4l-.5 2.9h-2.9v6.97A10 10 0 0 0 22 12z" /></svg>
            </a>
          </div>
        </div>
      </footer>


    </main>
  )
}