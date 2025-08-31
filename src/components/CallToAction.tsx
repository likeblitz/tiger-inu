import React from 'react';
import { Rocket } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="bg-white rounded-3xl p-12 text-center shadow-2xl border-4 border-black">
      <Rocket className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
      <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
        Join the Movement 🚀
      </h3>
      <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
        Strength, community, unstoppable energy. The next BSC success story.
      </p>
      <div className="text-2xl font-bold text-orange-600 tracking-wide">
        BNBTiger Inu – The Tiger of BNBChain has awakened.
      </div>
    </div>
  );
}