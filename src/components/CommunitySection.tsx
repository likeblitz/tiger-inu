import React from "react";
import { Mail } from "lucide-react";

export default function CommunitySection() {
  return (
    <section
      id="community"
      className="relative overflow-hidden bg-yellow-400 min-h-screen flex items-center py-8 md:py-0"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* 2 columns – orbit + content */}
        <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-2 w-full">
          {/* LEFT: Orbit */}
          <div className="relative flex min-h-[350px] md:min-h-[500px] lg:min-h-[600px] items-center justify-center">
            {/* mascot */}
            <img
              src="/com.png"
              alt="Community mascot"
              className="relative z-10 w-24 h-24 md:w-40 md:h-40 lg:w-52 lg:h-52 object-contain"
            />

            {/* orbit (line removed) */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Rotating icons only */}
              <div
                className="absolute h-[16rem] w-[16rem] md:h-[24rem] md:w-[24rem] lg:h-[30rem] lg:w-[30rem] animate-spin-slow"
                style={
                  {
                    ["--r" as any]: "128px",
                  } as React.CSSProperties
                }
              >
                {/* 0° */}
                <a
                  href="https://dexscreener.com/bsc/0xfe66d2d4319888d9b6570db05711a5d81166d50e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="orbit-item h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
                  style={{ ["--angle" as any]: "0deg" } as React.CSSProperties}
                  aria-label="Dexscreener"
                >
                  <img
                    src="/dex.png"
                    alt=""
                    className="h-5 w-5 md:h-7 md:w-7 lg:h-9 lg:w-9 object-contain"
                  />
                </a>

                {/* 72° */}
                <a
                  href="https://coinmarketcap.com/community/profile/BNBtiger_inu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="orbit-item h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
                  style={{ ["--angle" as any]: "72deg" } as React.CSSProperties}
                  aria-label="CoinMarketCap"
                >
                  <img
                    src="/coin.png"
                    alt=""
                    className="h-5 w-5 md:h-7 md:w-7 lg:h-9 lg:w-9 object-contain"
                  />
                </a>

                {/* 144° */}
                <a
                  href="https://t.me/bnbtigerinu1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="orbit-item h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
                  style={{ ["--angle" as any]: "144deg" } as React.CSSProperties}
                  aria-label="Telegram"
                >
                  <img
                    src="/telegram.png"
                    alt=""
                    className="h-5 w-5 md:h-7 md:w-7 lg:h-9 lg:w-9 object-contain"
                  />
                </a>

                {/* 216° */}
                <a
                  href="https://x.com/BnbTigerInu_off"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="orbit-item h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
                  style={{ ["--angle" as any]: "216deg" } as React.CSSProperties}
                  aria-label="X (Twitter)"
                >
                  <img
                    src="/x.svg"
                    alt=""
                    className="h-5 w-5 md:h-7 md:w-7 lg:h-9 lg:w-9 object-contain"
                  />
                </a>

                {/* 288° */}
                <a
                  href="mailto:support@bnbtigerinu.xyz"
                  className="orbit-item h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20"
                  style={{ ["--angle" as any]: "288deg" } as React.CSSProperties}
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 md:h-7 md:w-7 lg:h-9 lg:w-9 text-black" />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div className="space-y-6 md:space-y-8 lg:pl-6">
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-black">
              Join Our Community
            </h2>
            <div className="h-1 w-20 md:w-28 lg:w-36 rounded-full bg-black" />

            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0xa05cCD2F8ac92afE092A7240E948aA3E17cEF843"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full border-4 border-black bg-black px-8 md:px-12 lg:px-16 py-3 md:py-4 lg:py-6 text-base md:text-xl lg:text-2xl font-bold text-yellow-400 transition-all duration-300 hover:scale-105 hover:border-orange-600 hover:bg-orange-600 hover:text-white hover:shadow-xl hover:shadow-black/40"
            >
              Buy on PancakeSwap
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 26s linear infinite;
        }
        .orbit-item {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(var(--angle))
            translateX(var(--r)) rotate(calc(var(--angle) * -1));
          transform-origin: center;
          background: #fff;
          border: 4px solid #000;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 0 rgba(0, 0, 0, 0.25);
          transition: transform 200ms ease, box-shadow 200ms ease;
        }
        .orbit-item:hover {
          transform: translate(-50%, -50%) rotate(var(--angle))
            translateX(var(--r)) rotate(calc(var(--angle) * -1)) scale(1.08);
          box-shadow: 0 10px 0 rgba(0, 0, 0, 0.35);
        }
        @media (min-width: 768px) {
          .animate-spin-slow {
            --r: 192px;
          }
        }
        @media (min-width: 1024px) {
          .animate-spin-slow {
            --r: 240px;
          }
        }
      `}</style>
    </section>
  );
}
