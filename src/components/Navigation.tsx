import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-yellow-400 rounded-full border-4 border-black px-8 py-4 shadow-xl">
          <div className="flex items-center space-x-8">
            {[
              { label: 'HOME', id: 'hero' },
              { label: 'ABOUT', id: 'about' },
              { label: 'TOKENOMICS', id: 'tokenomics' },
              { label: 'COMMUNITY', id: 'community' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-black hover:text-orange-600 font-black text-lg transition-all duration-200 hover:scale-110 tracking-wide"
                style={{ fontFamily: "'Fredoka One', cursive" }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-4 right-4 z-50 md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="bg-yellow-400 rounded-full border-4 border-black p-3 shadow-xl hover:scale-105 transition-all duration-200"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className="w-6 h-6 text-black" />
          )}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-16 right-0 bg-yellow-400 rounded-2xl border-4 border-black shadow-xl p-4 min-w-[200px] animate-slide-down">
            <div className="flex flex-col space-y-3">
              {[
                { label: 'HOME', id: 'hero' },
                { label: 'ABOUT', id: 'about' },
                { label: 'TOKENOMICS', id: 'tokenomics' },
                { label: 'COMMUNITY', id: 'community' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-black hover:text-orange-600 font-black text-lg text-left py-2 px-3 rounded-lg hover:bg-yellow-300 transition-all duration-200"
                  style={{ fontFamily: "'Fredoka One', cursive" }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slideDown 0.2s ease-out forwards;
        }
      `}</style>
    </>
  );
}