import React from "react";
import { Mail, Phone, MapPin, ShieldCheck, AlertTriangle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-pink-600 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">Meesho Clone</h2>
          <p className="text-sm leading-6 text-pink-100">
            Affordable fashion, electronics, home essentials, and more. Built
            for learning, practice, and portfolio use only.
          </p>

          <div className="mt-5 text-sm text-pink-100 space-y-2">
            <p>Follow the project updates on your own social pages.</p>
            <p>This clone is not an official Meesho product.</p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-pink-100">
            <li className="hover:text-white cursor-pointer">About Us</li>
            <li className="hover:text-white cursor-pointer">Careers</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Press</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Customer Support</h3>
          <ul className="space-y-2 text-sm text-pink-100">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Returns</li>
            <li className="hover:text-white cursor-pointer">Refund Policy</li>
            <li className="hover:text-white cursor-pointer">Shipping Policy</li>
            <li className="hover:text-white cursor-pointer">Track Order</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <ShieldCheck size={18} />
            Legal
          </h3>

          <ul className="space-y-2 text-sm text-pink-100">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">
              Terms & Conditions
            </li>
            <li className="hover:text-white cursor-pointer">Disclaimer</li>
            <li className="hover:text-white cursor-pointer">
              Copyright Policy
            </li>
            <li className="hover:text-white cursor-pointer">
              Trademark Notice
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-pink-500">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="bg-pink-700 rounded-2xl p-5 text-sm leading-7 text-pink-100">
            <div className="flex items-center gap-2 mb-3 font-semibold text-white">
              <AlertTriangle size={18} />
              Important Legal Disclaimer
            </div>

            <p>
              This website is an independent educational and portfolio project.
              It is not affiliated with, endorsed by, sponsored by, or connected
              to the official Meesho platform.
            </p>

            <p className="mt-3">
              All trademarks, logos, product names, and brand names belong to
              their respective owners. Any resemblance is for UI learning and
              demonstration only.
            </p>

            <p className="mt-3">
              No official Meesho source code, private assets, or confidential
              materials are used here.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-pink-100">
            <div className="flex items-start gap-2">
              <MapPin size={16} className="mt-1" />
              <p>Kolkata, West Bengal, India</p>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} />
              <p>+91 9876xxxx10</p>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={16} />
              <p>support@example.com</p>
            </div>
          </div>

          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-pink-100">
            <p>
              © {new Date().getFullYear()} Meesho Clone. All rights reserved.
            </p>

            <div className="flex gap-5">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
