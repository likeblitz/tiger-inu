import React from 'react';
import { Flame } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="flex items-center space-x-3">
            <Flame className="w-6 h-6 text-orange-400" />
            <a
              href="https://blazeresults.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-medium text-black hover:opacity-80 transition-opacity cursor-pointer"
            >
              Designed By <span className="font-bold">
                <span className="text-orange-400">B</span><span className="text-black">laze</span>
              </span>
            </a>
            <Flame className="w-6 h-6 text-orange-400" />
          </div>
        </div>
      </div>
    </footer>
  );
}
