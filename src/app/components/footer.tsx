import { Link } from "lucide-react";
import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="flex flex-wrap justify-center md:justify-between gap-10">
          {/* About Section */}
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold text-white mb-4">About Us</h4>
            <p className="text-sm">
              Delivering flawless business insights and streamlined commerce solutions worldwide.
            </p>
            <div className="mt-4">
              <p className="font-semibold">Opening Hours:</p>
              <p>Mon - Sat: 9:00 AM - 5:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>

          {/* Useful Links */}
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold text-white mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">News</a></li>
              <li><a href="#" className="hover:underline">Partners</a></li>
              <li><a href="#" className="hover:underline">Team</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold text-white mb-4">Help</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">FAQ</Link></li>
              <li><Link href="#" className="hover:underline">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:underline">Support</Link></li>
              <li><Link href="#" className="hover:underline">Privacy</Link></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=61550306221790" className="text-white hover:text-gray-400 text-xl"><FaFacebookF /></Link>
              <Link href="#" className="text-white hover:text-gray-400 text-xl"><FaTwitter /></Link>
              <Link href="#" className="text-white hover:text-gray-400 text-xl"><FaLinkedinIn /></Link>
              <Link href="#" className="text-white hover:text-gray-400 text-xl"><FaInstagram /></Link>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-4">
          <p className="text-center text-sm text-gray-400">
            © 2024 FoodTuck. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
