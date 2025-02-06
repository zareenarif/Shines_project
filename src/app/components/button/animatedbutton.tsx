"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { User2 } from "lucide-react"

export default function AnimatedButton() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360)
    }, 30) // Made animation slightly faster
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex min-h-screen items-center justify-center">
      <motion.button
        className="group relative flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition-all"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Animated border gradient */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-lg opacity-75 blur-md transition-opacity group-hover:opacity-100"
          style={{
            background: `conic-gradient(
              from ${rotation}deg at 50% 50%,
              #FF0080,
              #00FFD1,
              #7928CA,
            #FFD700,
              #1E90FF,
              #FF0080
            )`,
          }}
        />

        {/* Inner black background */}
        <div className="absolute inset-[1.5px] -z-10 rounded-lg backdrop-blur-xl" />

        <User2 className="h-4 w-4" />
        <span className="bg-gradient-to-r from-pink-500 via-cyan-400 to-purple-500 bg-clip-text text-black font-bold text-lg">
          Explore More Items
        </span>
      </motion.button>
    </div>
  )
}

