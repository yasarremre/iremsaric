"use client";

import Link from "next/link";
import { Menu, Moon, Sun, X, Flower2 } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Flower2 className="text-primary w-8 h-8" />
            <Link href="/" className="font-display font-bold text-2xl text-primary tracking-tight">
              Dyt. İrem Sarıç
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors">
              Ana Sayfa
            </Link>
            <Link href="/hakkimda" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors">
              Hakkımda
            </Link>
            <Link href="/hizmetler" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors">
              Hizmetler
            </Link>
            <Link href="/blog" className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary font-medium transition-colors">
              Blog
            </Link>
            <Link
              href="/iletisim"
              className="bg-primary text-white px-5 py-2.5 rounded-full hover:bg-opacity-90 transition-all shadow-md hover:shadow-lg font-medium"
            >
              Randevu Al
            </Link>
            <button className="p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 focus:outline-none">
              {/* Placeholder for theme toggle functionality */}
              <Moon className="w-5 h-5 dark:hidden" />
              <Sun className="w-5 h-5 hidden dark:block" />
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-primary p-2"
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link href="/" className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md">Ana Sayfa</Link>
            <Link href="/hakkimda" className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md">Hakkımda</Link>
            <Link href="/hizmetler" className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md">Hizmetler</Link>
            <Link href="/iletisim" className="block px-3 py-2 text-base font-medium text-primary dark:text-primary hover:bg-slate-50 dark:hover:bg-slate-800 rounded-md">Randevu Al</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
