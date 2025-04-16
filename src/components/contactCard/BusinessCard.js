import React, { useEffect, useState } from "react";

const BusinessCard = () => {
  const [isPreviewMode, setIsPreviewMode] = useState(false);

  useEffect(() => {
    // Detect if download APIs are blocked (like in ChatGPT preview)
    try {
      const blob = new Blob(["test"], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      if (!url) setIsPreviewMode(true);
    } catch (e) {
      setIsPreviewMode(true);
    }
  }, []);

  const downloadVCF = () => {
    const vcardData = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:Sharma;Amit;;;",
      "FN:Amit Sharma",
      "ORG:SmartCardz",
      "TITLE:Founder",
      "TEL:+911234567890",
      "EMAIL:amit@smartcardz.in",
      "URL:https://smartcardz.in",
      "END:VCARD",
    ].join("\n");

    const blob = new Blob([vcardData], { type: "text/vcard" });
    const url = window.URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "Amit_SmartCardz.vcf";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Hi, I’m Amit Sharma</h2>
        <p className="text-gray-600 mb-4">
          Founder - SmartCardz | NFC + QR Digital Business Cards
        </p>

        {isPreviewMode ? (
          <div className="text-red-500 font-medium mb-4">
            File download not supported in preview mode.
            <br /> Please test on a real browser.
          </div>
        ) : (
          <button
            onClick={downloadVCF}
            className="bg-green-600 hover:bg-green-700 text-white text-lg px-6 py-2 rounded-xl transition"
          >
            Save My Contact
          </button>
        )}

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

export default BusinessCard;
