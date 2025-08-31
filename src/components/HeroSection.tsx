import React from "react";
import { Copy, Check } from "lucide-react";

export default function HeroSection() {
  const items = Array.from({ length: 10 });
  const [copied, setCopied] = React.useState(false);
  const contractAddress = "0xa05cCD2F8ac92afE092A7240E948aA3E17cEF843";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden bg-yellow-400 flex flex-col">
      {/* 🔳 Background image (behind EVERYTHING) */}
      <img
        src="/HERO-PHOTOROOM.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute inset-0 z-0 h-full w-full object-cover object-center animate-rotate-scale"
      />

      {/* Floating BNB Icons (6 of them, +40%) */}
      <img src="/Binance-BNB-Icon2-Logo.wine.png" alt="" aria-hidden="true"
        className="pointer-events-none select-none absolute z-10 w-12 h-12 object-contain animate-glow-float"
        style={{ top: "12%", left: "8%", animationDelay: "0s" }} />
      <img src="/Binance-BNB-Icon2-Logo.wine.png" alt="" aria-hidden="true"
        className="pointer-events-none select-none absolute z-10 w-12 h-12 object-contain animate-glow-float"
        style={{ top: "20%", right: "6%", animationDelay: "1.2s" }} />
      <img src="/Binance-BNB-Icon2-Logo.wine.png" alt="" aria-hidden="true"
        className="pointer-events-none select-none absolute z-10 w-12 h-12 object-contain animate-glow-float"
        style={{ bottom: "38%", left: "10%", animationDelay: "2.4s" }} />
      <img src="/Binance-BNB-Icon2-Logo.wine.png" alt="" aria-hidden="true"
        className="pointer-events-none select-none absolute z-10 w-12 h-12 object-contain animate-glow-float"
        style={{ bottom: "18%", right: "12%", animationDelay: "3.6s" }} />
      <img src="/Binance-BNB-Icon2-Logo.wine.png" alt="" aria-hidden="true"
        className="pointer-events-none select-none absolute z-10 w-12 h-12 object-contain animate-glow-float"
        style={{ top: "35%", left: "35%", animationDelay: "0.6s" }} />
      <img src="/Binance-BNB-Icon2-Logo.wine.png" alt="" aria-hidden="true"
        className="pointer-events-none select-none absolute z-10 w-12 h-12 object-contain animate-glow-float"
        style={{ bottom: "28%", right: "35%", animationDelay: "2.8s" }} />

      {/* Center Content - Full Height */}
      <div className="relative z-20 flex-1 flex items-center justify-center py-20">
        <div className="text-center max-w-4xl mx-auto px-6">
          {/* 🐯 Hero Image */}
          <img
            src="/he.png"
            alt="BNB Tiger Inu Character"
            className="w-96 h-96 mx-auto object-contain"
          />

          {/* Buy Button */}
          <div className="mt-8 mb-6">
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0xa05cCD2F8ac92afE092A7240E948aA3E17cEF843"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 hover:bg-black text-black hover:text-yellow-400 font-bold text-lg px-8 py-4 rounded-full border-4 border-black hover:border-yellow-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-yellow-400/50"
            >
              Buy on PancakeSwap
            </a>
          </div>

          {/* Contract Address Section */}
          <div>
            <div className="max-w-4xl mx-auto px-6">
              <div className="relative">
                {/* Centered overlay message when copied */}
                {copied && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
                    <div className="bg-black text-yellow-400 px-4 py-2 rounded-full text-sm font-bold border-2 border-yellow-400 shadow-lg animate-bounce">
                      <Check className="w-4 h-4 inline mr-2" />
                      Copied!
                    </div>
                  </div>
                )}

                {/* Social Icons + Contract Address */}
                <div className="flex items-center justify-center gap-4 flex-wrap">
                  {/* Left Social Icons */}
                  <div className="flex gap-3">
                    <a href="https://dexscreener.com/bsc/0xfe66d2d4319888d9b6570db05711a5d81166d50e"
                      target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 bg-yellow-400 hover:bg-yellow-300 rounded-full border-2 border-black flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                    >
                      <img src="/dex.png" alt="DexScreener" className="w-6 h-6 object-contain" />
                    </a>
                    <a href="https://x.com/BnbTigerInu_off"
                      target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 bg-yellow-400 hover:bg-yellow-300 rounded-full border-2 border-black flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                    >
                      <img src="/x.svg" alt="X (Twitter)" className="w-6 h-6 object-contain" />
                    </a>
                  </div>

                  {/* Contract Address */}
                  <button
                    onClick={handleCopy}
                    className="bg-yellow-500 hover:bg-yellow-300 transition-all duration-200 rounded-full border-4 border-black px-4 py-4 cursor-pointer shadow-xl hover:shadow-2xl hover:scale-105"
                  >
                    <div className="flex items-center justify-center gap-3 px-2">
                      <code className="text-black font-mono font-bold text-xs sm:text-sm md:text-base break-all">
                        {contractAddress}
                      </code>
                      <Copy className="w-5 h-5 text-black opacity-70 shrink-0" />
                    </div>
                  </button>

                  {/* Right Social Icons */}
                  <div className="flex gap-3">
                    <a href="https://coinmarketcap.com/community/profile/BNBtiger_inu/"
                      target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 bg-yellow-400 hover:bg-yellow-300 rounded-full border-2 border-black flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                    >
                      <img src="/coin.png" alt="CoinMarketCap" className="w-6 h-6 object-contain" />
                    </a>
                    <a href="https://t.me/bnbtigerinu1"
                      target="_blank" rel="noopener noreferrer"
                      className="w-12 h-12 bg-yellow-400 hover:bg-yellow-300 rounded-full border-2 border-black flex items-center justify-center transition-all duration-200 hover:scale-110 hover:shadow-lg"
                    >
                      <img src="/telegram.png" alt="Telegram" className="w-6 h-6 object-contain" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Marquee */}
      <div className="relative z-20 overflow-hidden bg-black py-3 mt-auto">
        <div className="flex animate-marquee-reverse">
          {items.map((_, i) => (
            <div key={`bot-a-${i}`} className="flex items-center space-x-4 mx-8 whitespace-nowrap">
              <img src="/he.png" alt="BNB Tiger" className="w-8 h-8 object-contain" />
              <span className="text-yellow-300 font-bold text-lg">BNB tiger inu</span>
            </div>
          ))}
          {items.map((_, i) => (
            <div key={`bot-b-${i}`} className="flex items-center space-x-4 mx-8 whitespace-nowrap">
              <img src="/he.png" alt="BNB Tiger" className="w-8 h-8 object-contain" />
              <span className="text-yellow-300 font-bold text-lg">BNB tiger inu</span>
            </div>
          ))}
        </div>
      </div>

      {/* Keyframes */}
      <style jsx>{`
        @keyframes rotateScale {
          0% { transform: scale(1.575) rotate(0deg); }
          100% { transform: scale(1.575) rotate(360deg); }
        }
        @keyframes marqueeL {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marqueeR {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-rotate-scale {
          animation: rotateScale 30s linear infinite;
        }
        .animate-marquee {
          display: inline-flex;
          min-width: 200%;
          animation: marqueeL 25s linear infinite;
        }
        .animate-marquee-reverse {
          display: inline-flex;
          min-width: 200%;
          animation: marqueeR 25s linear infinite;
        }
        @keyframes glowFloat {
          0% {
            transform: translateY(0px) scale(1);
            filter: drop-shadow(0 0 10px #f59e0b) drop-shadow(0 0 20px #f59e0b);
          }
          25% {
            transform: translateY(-10px) scale(1.1);
            filter: drop-shadow(0 0 15px #f59e0b) drop-shadow(0 0 30px #f59e0b);
          }
          50% {
            transform: translateY(0px) scale(1.05);
            filter: drop-shadow(0 0 20px #f59e0b) drop-shadow(0 0 40px #f59e0b);
          }
          75% {
            transform: translateY(10px) scale(0.95);
            filter: drop-shadow(0 0 15px #f59e0b) drop-shadow(0 0 30px #f59e0b);
          }
          100% {
            transform: translateY(0px) scale(1);
            filter: drop-shadow(0 0 10px #f59e0b) drop-shadow(0 0 20px #f59e0b);
          }
        }
        .animate-glow-float {
          animation: glowFloat 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
