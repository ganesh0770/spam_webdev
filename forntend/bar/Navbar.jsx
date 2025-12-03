
"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">

        
        <a href="/" className="font-bold text-xl text-gray-800 flex gap-2">
        <svg
              width="26"
              height="26"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M170 0h172l170 170v172L342 512H170L0 342V170L170 0z"
                fill="#FF8655"
                stroke="#003A5C"
                strokeWidth="40"
                strokeLinejoin="round"

              />

              <rect
                x="236"
                y="130"
                width="40"
                height="200"
                rx="20"
                fill="#003A5C"
              />

              <circle
                cx="256"
                cy="370"
                r="28"
                fill="#003A5C"
              />
            </svg>
          Spam Classifier
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-gray-700">
          <a href="/" className="hover:text-blue-600 hover:underline">Home</a>
          <a href="/about" className="hover:text-blue-600 hover:underline">About</a>
          <a href="/contact" className="hover:text-blue-600 hover:underline">Contact</a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            /* X ICON */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            /* HAMBURGER ICON */
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t pb-4">
          <nav className="flex flex-col gap-4 text-gray-700 px-4 pt-4">
            <a href="/" className="hover:text-blue-600 hover:underline">Home</a>
          <a href="/about" className="hover:text-blue-600 hover:underline">About</a>
          <a href="/contact" className="hover:text-blue-600 hover:underline">Contact</a>
          </nav>
        </div>
      )}
    </header>
  );
}
