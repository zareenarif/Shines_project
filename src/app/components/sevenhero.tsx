"use client"
import Image from 'next/image'
import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Alamin Hasan',
    role: 'Food Specialist',
    image: '/placeholder.svg?height=80&width=80',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.',
    rating: 4,
  },
  // Add more testimonials here...
]

export default function SevenHero() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
    <section className="bg-black text-white py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-amber-500 text-3xl font-serif mb-2">Testimonials</h2>
        <h3 className="text-4xl font-bold mb-12">What our client are saying</h3>
        
        <div className="bg-white text-black p-8 rounded-lg relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <Image
              src="/review.jpeg"
              alt=""
              width={80}
              height={80}
              className="rounded-full border-4 border-white"
            />
          </div>
          <div className="text-6xl text-amber-500 mb-4">&quot;</div>
          <p className="text-gray-600 mb-6">{testimonials[currentTestimonial].quote}</p>
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-6 h-6 ${
                  i < testimonials[currentTestimonial].rating ? 'text-amber-500' : 'text-gray-300'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <h4 className="font-bold text-xl">{testimonials[currentTestimonial].name}</h4>
          <p className="text-gray-500">{testimonials[currentTestimonial].role}</p>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentTestimonial ? 'bg-amber-500' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-amber-500 opacity-10 rounded-full translate-x-1/3 translate-y-1/3" />
    </section>
  )
}