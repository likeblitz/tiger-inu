import React from 'react';
import { Shield, PawPrint } from 'lucide-react';

export default function AboutSection() {
  return (
    <div id="about" className="bg-yellow-400 py-24 relative overflow-hidden">
      {/* Floating Cat Paws Background */}
      <PawPrint className="absolute w-8 h-8 text-black/20 animate-glow-float z-0" 
        style={{ top: "15%", left: "8%", animationDelay: "0s" }} />
      <PawPrint className="absolute w-6 h-6 text-black/15 animate-glow-float z-0" 
        style={{ top: "25%", right: "12%", animationDelay: "1.5s" }} />
      <PawPrint className="absolute w-10 h-10 text-black/25 animate-glow-float z-0" 
        style={{ bottom: "35%", left: "15%", animationDelay: "3s" }} />
      <PawPrint className="absolute w-7 h-7 text-black/20 animate-glow-float z-0" 
        style={{ bottom: "20%", right: "8%", animationDelay: "4.5s" }} />
      <PawPrint className="absolute w-9 h-9 text-black/30 animate-glow-float z-0" 
        style={{ top: "40%", left: "25%", animationDelay: "2s" }} />
      <PawPrint className="absolute w-5 h-5 text-black/15 animate-glow-float z-0" 
        style={{ top: "60%", right: "20%", animationDelay: "0.8s" }} />
      <PawPrint className="absolute w-8 h-8 text-black/20 animate-glow-float z-0" 
        style={{ bottom: "50%", left: "5%", animationDelay: "3.8s" }} />
      <PawPrint className="absolute w-6 h-6 text-black/18 animate-glow-float z-0" 
        style={{ top: "70%", right: "5%", animationDelay: "2.5s" }} />

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Side - Image */}
          <div className="flex items-center justify-center">
            <img 
              src="/a.png" 
              alt="BNB Tiger Inu About" 
             className="w-full h-auto max-w-lg object-contain animate-gentle-bounce"
            />
          </div>
          
          {/* Right Side - Content */}
         <div className="space-y-8 animate-slide-in-right">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
              About
            </h2>
            
           <div className="space-y-6 animate-fade-in-up">
              <h3 className="text-2xl font-bold text-black mb-4">
                Meet BNB Tiger Inu — The BSC Powerhouse
              </h3>
              <p className="text-black leading-relaxed text-lg">
                In the wild world of crypto, meme coins roam every corner. That's where BNB Tiger Inu comes in — your loyal on-chain guardian on Binance Smart Chain.
              </p>
              
              <p className="text-black leading-relaxed text-lg">
                Powered by BSC, BNB Tiger Inu protects your portfolio, ensures safe transactions across the DeFi jungle, and delivers explosive growth potential.
              </p>
              
              <p className="text-black leading-relaxed text-lg">
                Built for community. Designed for moonshots. BNB Tiger Inu isn't just a meme — it's a mission.
              </p>
              
              <div className="flex items-center mt-8">
                <Shield className="w-6 h-6 text-black mr-3" />
                <span className="font-bold text-black text-xl">Roar loud. Strike harder. Protect BSC.</span>
              </div>
            </div>
            
            {/* Social Icons */}
           <div className="flex items-center justify-center gap-4 mt-12 animate-fade-in-delayed">
              <div className="flex gap-3">
                <a
                  href="https://dexscreener.com/bsc/0xfe66d2d4319888d9b6570db05711a5d81166d50e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-yellow-400 hover:bg-yellow-300 rounded-full border-2 border-black flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                >
                  <img src="/dex.png" alt="DexScreener" className="w-6 h-6 object-contain" />
                </a>
                <a
                  href="https://x.com/BnbTigerInu_off"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-yellow-400 hover:bg-yellow-300 rounded-full border-2 border-black flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                >
                  <img src="/x.svg" alt="X (Twitter)" className="w-6 h-6 object-contain" />
                </a>
              </div>
              
              <div className="flex gap-3">
                <a
                  href="https://coinmarketcap.com/community/profile/BNBtiger_inu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-yellow-400 hover:bg-yellow-300 rounded-full border-2 border-black flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                >
                  <img 
                    src="/coin.png" 
                    alt="CoinMarketCap" 
                    className="w-6 h-6 object-contain"
                  />
                </a>
                <a
                  href="https://t.me/bnbtigerinu1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-yellow-400 hover:bg-yellow-300 rounded-full border-2 border-black flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                >
                  <img src="/telegram.png" alt="Telegram" className="w-6 h-6 object-contain" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes gentleBounce {
          0%, 100% { 
            transform: translateY(0px) scale(1);
          }
          50% { 
            transform: translateY(-8px) scale(1.02);
          }
        }
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInDelayed {
          0%, 20% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-gentle-bounce {
          animation: gentleBounce 4s ease-in-out infinite;
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        .animate-fade-in-delayed {
          animation: fadeInDelayed 1.2s ease-out 0.6s forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
}