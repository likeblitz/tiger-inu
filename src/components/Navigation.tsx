import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showNav, setShowNav] = useState(true); // whole navbar visibility

  // Observe #hero visibility
  useEffect(() => {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const visible = entry.isIntersecting;
          setShowNav(visible);
          if (!visible) setIsMenuOpen(false); // close mobile menu when nav hides
        });
      },
      { threshold: 0.5 } // 50% of hero must be visible
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // shared visibility classes for both navs
  const visibilityClasses =
    (showNav ? 'opacity-100 translate-y-0 pointer-events-auto ' : 'opacity-0 -translate-y-2 pointer-events-none ') +
    'transition-all duration-200 ease-out';

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block ${visibilityClasses}`}>
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

            {/* BUY button (navbar only shows on HERO anyway) */}
            <button
              onClick={() => window.open('https://app.uniswap.org/', '_blank')}
              className="bg-black text-yellow-400 px-6 py-2 rounded-full font-black text-lg hover:scale-110 transition-all duration-200"
            >
              BUY
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className={`fixed top-4 right-4 z-50 md:hidden ${visibilityClasses}`}>
        <button
          onClick={() => setIsMenuOpen((o) => !o)}
          className="bg-yellow-400 rounded-full border-4 border-black p-3 shadow-xl hover:scale-105 transition-all duration-200"
        >
          {isMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-16 right-0 bg-yellow-400 rounded-2xl border-4 border-black shadow-xl p-4 min-w-[220px] animate-slide-down">
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

              {/* BUY button for mobile */}
              <button
                onClick={() => window.open('https://app.uniswap.org/', '_blank')}
                className="mt-2 bg-black text-yellow-400 px-6 py-3 rounded-full font-black text-lg hover:scale-105 transition-all duration-200"
              >
                BUY
              </button>
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
