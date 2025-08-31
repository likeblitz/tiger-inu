import React from 'react';
import { Flame, Gem } from 'lucide-react';

export default function MainContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-8 mb-16">
      {/* Left Column - Main Description */}
      <div className="bg-white rounded-2xl p-8 shadow-xl border-4 border-black">
        <div className="flex items-center mb-6">
          <Flame className="w-8 h-8 text-orange-600 mr-3" />
          <h3 className="text-2xl font-bold text-orange-900">Revolutionary Project</h3>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6">
          Revolutionary meme token on Binance Smart Chain combining community power with real utility.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Built to dominate the meme coin space with strength and speed.
        </p>
      </div>

      {/* Right Column - Tokenomics */}
      <div className="bg-white rounded-2xl p-8 shadow-xl border-4 border-black">
        <div className="flex items-center mb-6">
          <Gem className="w-8 h-8 text-orange-600 mr-3" />
          <h3 className="text-2xl font-bold text-orange-900">Smart Tokenomics</h3>
        </div>
        <p className="text-gray-700 leading-relaxed mb-6">
          Deflationary model with strategic taxes for marketing and liquidity growth.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Every transaction builds stronger liquidity and funds development.
        </p>
      </div>
    </div>
  );
}