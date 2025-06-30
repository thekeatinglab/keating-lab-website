/* src/components/NavBar.js */
import Link from 'next/link';
import { useState } from 'react';
import data from '@/data/labData.json';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gradient-nav text-white py-5 px-4 sticky top-0 z-10 border-b border-purple-800/20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo and Lab Name */}
        <Link href="/" className="text-2xl font-semibold flex items-center">
          <img src="/images/nyulh-logos/nyulh_logo.svg" alt="Keating Lab Logo" className="h-10 mr-3" />
          Keating Lab
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {['Home', 'Research', 'Funding', 'Collaborations', 'Publications', 'People', 'Contact'].map((item) => (
            <li key={item}>
              <Link
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-blue-300 transition-all duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden flex items-center focus:outline-none"
          onClick={toggleMobileMenu}
          onKeyPress={(e) => e.key === 'Enter' && toggleMobileMenu()}
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-purple-800 text-white flex flex-col items-center py-4 space-y-4 transition-all duration-300">
          {['Home', 'Research', 'Funding', 'Collaborations', 'Publications', 'People', 'Contact'].map((item) => (
            <Link
              key={item}
              href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              className="text-base font-medium hover:text-blue-300 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}