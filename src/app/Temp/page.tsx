'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[90vh] px-6 text-center">
        {/* Optional background image */}
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

      {/* Other content goes here */}
    </main>
  )
}