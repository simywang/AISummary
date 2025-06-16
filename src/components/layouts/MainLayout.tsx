import React, { useState } from "react";
import { FaRobot, FaPaintBrush, FaVideo, FaSearch, FaPenNib, FaBarcode, FaExchangeAlt, FaLanguage, FaBookOpen, FaCode } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import Image from "next/image";

const categories = [
  { label: "AI Chatbots", icon: <FaRobot className="w-5 h-5" /> },
  { label: "AI Image Generation", icon: <FaPaintBrush className="w-5 h-5" /> },
  { label: "AI Video Generation", icon: <FaVideo className="w-5 h-5" /> },
  { label: "AI Search Engines", icon: <FaSearch className="w-5 h-5" /> },
  { label: "AI Writing Assistants", icon: <FaPenNib className="w-5 h-5" /> },
  { label: "AI Scanning & OCR", icon: <FaBarcode className="w-5 h-5" /> },
  { label: "AI Speech Transcription", icon: <FaExchangeAlt className="w-5 h-5" /> },
  { label: "AI Translation", icon: <FaLanguage className="w-5 h-5" /> },
  { label: "AI Education & Learning", icon: <FaBookOpen className="w-5 h-5" /> },
  { label: "AI Programming Assistants", icon: <FaCode className="w-5 h-5" /> },
];

export default function MainLayout({ children }: { children: React.ReactNode }) {
  // For demo, highlight the first category as selected
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col py-6 px-4 min-h-screen relative z-10">
        {/* Logo & Title */}
        <div className="flex items-center mb-8 space-x-3">
          <div className="w-9 h-9 relative">
            <Image src="/logo.svg" alt="logo" fill className="object-contain" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent select-none">AI工具集</span>
        </div>
        <nav className="flex-1 space-y-2">
          <a href="#" className="flex items-center px-3 py-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700 font-medium mb-2">
            <IoMdArrowRoundBack className="w-5 h-5 mr-2" />
            Back
          </a>
          <div className="border-b border-gray-100 dark:border-gray-700 my-2"></div>
          {categories.map((cat, idx) => (
            <button
              key={cat.label}
              onClick={() => setSelected(idx)}
              className={`flex items-center w-full px-3 py-2 rounded-lg font-medium transition-colors
                ${selected === idx
                  ? 'bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-700 dark:text-blue-300 shadow'
                  : 'text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-700'}
              `}
            >
              {cat.icon}
              <span className="ml-3">{cat.label}</span>
            </button>
          ))}
        </nav>
        {/* Responsive collapse button (for mobile, not yet functional) */}
        {/* <button className="absolute top-4 right-4 md:hidden">☰</button> */}
      </aside>
      {/* Main Content */}
      <main className="flex-1 min-w-0 bg-transparent">
        {children}
      </main>
    </div>
  );
} 