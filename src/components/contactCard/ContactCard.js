import React from "react";

const ContactCard = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Hi, I’m Amit Sharma</h2>
        <p className="text-gray-600 mb-4">Founder - SmartCardz | NFC + QR Digital Business Cards</p>
        <a
          href="https://raw.githubusercontent.com/bhupendra-06/contact-/refs/heads/main/amit.vcf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white text-lg px-6 py-2 rounded-xl inline-block"
        >
          Save My Contact
        </a>
        <div className="my-4 text-gray-400">or</div>
        <a
          href="https://wa.me/911234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white text-lg px-6 py-2 rounded-xl inline-block"
        >
          Message on WhatsApp
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
