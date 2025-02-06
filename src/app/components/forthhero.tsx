/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function ForthHero() {
  return (
    <div className="min-h-screen bg-black text-white p-4 flex flex-col justify-center items-center">
      <div className="w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <div className="p-6 bg-white shadow-md rounded-md text-black">
          <img src="/4.jpeg" alt="Pizza" className="mb-4 rounded-md object-cover w-full h-60 md:h-72 lg:h-80" />
          <div className="text-2xl font-bold">Pizza</div>
        </div>
        <div className="p-6 bg-white shadow-md rounded-md text-black">
          <img src="/on1.jpeg" alt="Another" className="mb-4 rounded-md object-cover w-full h-60 md:h-72 lg:h-80" />
          <div className="text-2xl font-bold">Another Dish</div>
        </div>
        <div className="p-6 bg-white shadow-md rounded-md text-black">
          <img src="/on3.jpeg" alt="Yet Another" className="mb-4 rounded-md object-cover w-full h-60 md:h-72 lg:h-80" />
          <div className="text-2xl font-bold">Yet Another</div>
        </div>
        <div className="p-6 bg-white shadow-md rounded-md text-black">
          <img src="/3.jpeg" alt="Final" className="mb-4 rounded-md object-cover w-full h-60 md:h-72 lg:h-80" />
          <div className="text-2xl font-bold">Final Dish</div>
        </div>
      </div>
    </div>
  )
}
