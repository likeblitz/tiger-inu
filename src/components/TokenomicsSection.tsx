import React from 'react';

export default function TokenomicsSection() {
  return (
    <div id="tokenomics" className="bg-black py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Tokenomics Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-8">
              Tokenomics
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-yellow-400 pl-6">
                <div className="text-yellow-300 text-sm font-medium mb-1">TICKER</div>
                <div className="text-yellow-400 text-2xl font-bold">BNB</div>
              </div>
              
              <div className="border-l-4 border-yellow-400 pl-6">
                <div className="text-yellow-300 text-sm font-medium mb-1">SUPPLY</div>
                <div className="text-yellow-400 text-2xl font-bold">100,000,000</div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-4 border-yellow-400 pl-6">
                  <div className="text-yellow-300 text-sm font-medium mb-1">BUY TAX</div>
                  <div className="text-yellow-400 text-2xl font-bold">8%</div>
                </div>
                
                <div className="border-l-4 border-yellow-400 pl-6">
                  <div className="text-yellow-300 text-sm font-medium mb-1">SELL TAX</div>
                  <div className="text-yellow-400 text-2xl font-bold">8%</div>
                </div>
              </div>
              
              <div className="border-l-4 border-yellow-400 pl-6">
                <div className="text-yellow-300 text-sm font-medium mb-1">LIQUIDITY</div>
                <div className="text-yellow-400 text-2xl font-bold">BURNED</div>
              </div>
              
              <div className="border-l-4 border-yellow-400 pl-6">
                <div className="text-yellow-300 text-sm font-medium mb-1">CONTRACT ADDRESS</div>
                <div className="text-yellow-400 text-lg font-mono break-all">
                  0xa05cCD2F8ac92afE092A7240E948aA3E17cEF843
                </div>
              </div>
              
              {/* Chart Button */}
              <div className="mt-8 pt-6 border-t border-yellow-400">
                <a
                  href="https://dexscreener.com/bsc/0xfe66d2d4319888d9b6570db05711a5d81166d50e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-400 hover:bg-black text-black hover:text-yellow-400 font-bold text-lg px-8 py-4 rounded-full border-4 border-black hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/50"
                >
                  View Chart on DexScreener
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Side - Tokenomics Image */}
          <div className="flex items-center justify-center mt-8 lg:mt-0">
            <img 
              src="/tok.png" 
              alt="BNB Tiger Inu Tokenomics" 
              className="w-full h-auto max-w-sm lg:max-w-lg object-contain animate-gentle-float"
            />
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes gentleFloat {
          0%, 100% { 
            transform: translateY(0px) scale(1);
          }
          50% { 
            transform: translateY(-10px) scale(1.02);
          }
        }
        .animate-gentle-float {
          animation: gentleFloat 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}