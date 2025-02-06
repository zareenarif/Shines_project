"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ShoppingCart, Search } from "lucide-react";
import { BiUser } from "react-icons/bi";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, []);

  interface AnimatedIconProps {
    children: React.ReactNode;
    href: string;
  }

  const AnimatedIcon: React.FC<AnimatedIconProps> = ({ children, href }) => (
    <motion.div className="relative group">
      <motion.div
        className="absolute -inset-1 rounded-full opacity-75 blur-md transition-opacity group-hover:opacity-100"
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
      <Link href={href} className="relative z-10 block p-2 bg-gray-800 rounded-full text-white hover:text-yellow-300">
        {children}
      </Link>
    </motion.div>
  );

  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-white">Food</span>
          <span className="text-orange-500">tuck</span>
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex space-x-6">
          {[
            { href: "/", label: "Home" },
            { href: "/menu", label: "Menu" },
            { href: "/details", label: "Blog" },
            { href: "/checkout", label: "Pages" },
            { href: "/cheif", label: "About" },
            { href: "/shop", label: "Shop" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-orange-500">
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right Section (Search, Cart, User) */}
        <div className="hidden lg:flex items-center space-x-4">
          <motion.div className="relative group">
            <motion.div
              className="absolute -inset-1 rounded-full opacity-75 blur-md transition-opacity group-hover:opacity-100"
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
            <div className="relative z-10 bg-gray-800 rounded-full">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-white rounded-full py-2 px-4 pr-10 focus:outline-none"
              />
              <Search className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
            </div>
          </motion.div>
          <AnimatedIcon href="/cart">
            <ShoppingCart className="w-6 h-6 cursor-pointer" />
          </AnimatedIcon>
          <AnimatedIcon href="/signup">
            <BiUser className="h-6 w-6" />
          </AnimatedIcon>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black text-white px-4 py-3">
          <div className="space-y-4">
            {["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"].map((label, index) => (
              <Link key={index} href={`/${label.toLowerCase()}`} className="block hover:text-orange-500">
                {label}
              </Link>
            ))}
            <motion.div className="mt-4 relative group">
              <motion.div
                className="absolute -inset-1 rounded-full opacity-75 blur-md transition-opacity group-hover:opacity-100"
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
              <div className="relative z-10 bg-gray-800 rounded-full">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent text-white rounded-full w-full py-2 px-4 pr-10 focus:outline-none"
                />
                <Search className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2" />
              </div>
            </motion.div>
            <div className="flex space-x-4 mt-3">
              <AnimatedIcon href="/cart">
                <ShoppingCart className="w-6 h-6 cursor-pointer" />
              </AnimatedIcon>
              <AnimatedIcon href="/signup">
                <BiUser className="h-6 w-6" />
              </AnimatedIcon>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
