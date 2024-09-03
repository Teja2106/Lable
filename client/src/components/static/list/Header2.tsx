import React from 'react'
import yourImage from './assets/dp.jpeg'; // Adjust the path to your image

export default function Header2() {
  return (
    <div>
        <section className="flex justify-end dark:bg-gray-950">
    <div className="mt-6 mx-auto max-w-screen-xl px-4 py-8 placeholder-neutral-200:px-6 md:py-12 lg:px-8 lg:py-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-x-[300px]">

        <div className="mx-auto lg:py-24">
          <p className="mt-4 text-left text-gray-600 font-semibold text-2xl dark:text-gray-100">
            Hello, I am
          </p>
          <h2 className="text-3xl font-bold text-left sm:text-4xl dark:text-white">Vishnu Damuloori</h2>
        </div>
        <div className="relative overflow-hidden rounded-lg">
          <img
            alt="Your Description"
            src={yourImage}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
