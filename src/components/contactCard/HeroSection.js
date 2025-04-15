import React from "react";
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-[#f7f9fb] to-[#e6f0ff] py-16 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Smart Business Card with <br className="hidden md:block" /> NFC & QR Code
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            No app needed. Just tap or scan to share your profile instantly.
          </p>
          <a
            href="#"
            className="inline-block bg-black text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-gray-900 transition"
          >
            Get Yours Now <span className="ml-1">→</span>
          </a>
        </div>

        {/* Card Design Section */}
        <div className="flex-1 flex justify-center">
          <div className="group [perspective:1000px] w-80 aspect-[85.6/53.98] cursor-pointer select-none">
            <div className="relative w-full h-full rounded-xl shadow-xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

              {/* Front Side */}
              <div className="absolute inset-0 bg-white border border-gray-300 text-gray-800 p-5 rounded-xl overflow-hidden [backface-visibility:hidden] flex flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-yellow-100 to-blue-100 opacity-50 rounded-xl pointer-events-none" />

                {/* Logo + Name */}
                <div className="flex items-center gap-4 z-10">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-md font-extrabold text-xl">
                    &lt;/&gt;
                  </div>
                  <div>
                    <h2 className="text-base font-bold">Bhupendra Nirmalkar</h2>
                    <p className="text-sm text-gray-500 font-medium">Web Developer</p>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="text-xs space-y-1 z-10 mt-3">
                  <div className="flex items-center gap-2">
                    <DevicePhoneMobileIcon className="w-4 h-4 text-gray-500" />
                    <p className="text-indigo-600 font-bold">+91-XXXX-XXX-XXX</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <EnvelopeIcon className="w-4 h-4 text-gray-500" />
                    <p className="text-rose-600 font-bold">email@example.com</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <GlobeAltIcon className="w-4 h-4 text-gray-500" />
                    <p className="text-blue-600 font-bold">bhupendranirmalkar.com</p>
                  </div>
                </div>

                {/* QR & Tagline */}
                <div className="flex items-center justify-between z-10 mt-2">
                  <div className="text-[10px] text-gray-400 font-medium">Your digital identity in one tap ⭐</div>
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=https://bhupendranirmalkar.com"
                    alt="QR Code"
                    className="w-10 h-10 rounded-md border border-gray-300 bg-white"
                  />
                </div>
              </div>

              {/* Back Side */}
              <div className="absolute inset-0 bg-white border border-gray-300 p-5 rounded-xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center text-center">
                <p className="text-sm font-semibold text-gray-700">Turning ideas into clean code ✨</p>
                <p className="text-xs text-gray-500 mt-1">Web Developer | Freelancer</p>
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://bhupendranirmalkar.com"
                  alt="QR Code"
                  className="w-20 h-20 rounded-md border border-gray-300 mt-4 bg-white"
                />
                <p className="text-[10px] text-gray-400 mt-2">Scan for portfolio & contact</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Below Card */}
      <p className="text-sm text-gray-500 mt-10 text-center">
        Want your own custom NFC card?{' '}
        <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">
          Let’s Talk
        </span>
      </p>
    </section>
  );
};

export default HeroSection;
