import React from 'react';
import { Heart, Sparkles, Crown } from 'lucide-react';

export default function FeatureCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 mb-16">
      <div className="bg-white rounded-2xl p-6 text-black shadow-xl border-4 border-black">
        <Heart className="w-10 h-10 mb-4 opacity-90" />
        <h4 className="text-xl font-bold mb-3">Massive Community</h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          Growing pack of loyal holders ready for explosive growth.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 text-black shadow-xl border-4 border-black">
        <Sparkles className="w-10 h-10 mb-4 opacity-90" />
        <h4 className="text-xl font-bold mb-3">Beyond Memes</h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          Utility dApps, staking, NFTs, and cross-chain expansion planned.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-6 text-black shadow-xl border-4 border-black">
        <Crown className="w-10 h-10 mb-4 opacity-90" />
        <h4 className="text-xl font-bold mb-3">Ambitious Targets</h4>
        <p className="text-gray-700 text-sm leading-relaxed">
          Targeting $10M, $50M, and beyond with solid foundation.
        </p>
      </div>
    </div>
  );
}