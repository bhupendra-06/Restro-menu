// import React from "react";
// import {
//   CpuChipIcon,
//   QrCodeIcon,
//   PaintBrushIcon,
//   PencilSquareIcon,
//   GlobeAltIcon,
//   ShieldCheckIcon,
// } from "@heroicons/react/24/outline";

// const features = [
//   {
//     icon: <CpuChipIcon className="h-8 w-8 text-blue-600" />,
//     title: "NFC Tap to Share",
//     description: "Share your profile with a single tap.",
//   },
//   {
//     icon: <QrCodeIcon className="h-8 w-8 text-purple-600" />,
//     title: "Universal QR Access",
//     description: "Scan from any phone — no app required.",
//   },
//   {
//     icon: <PaintBrushIcon className="h-8 w-8 text-pink-600" />,
//     title: "Custom Designs",
//     description: "Tailored to your profession and style.",
//   },
//   {
//     icon: <PencilSquareIcon className="h-8 w-8 text-green-600" />,
//     title: "Editable Anytime",
//     description: "Update your info in seconds — hassle-free.",
//   },
//   {
//     icon: <GlobeAltIcon className="h-8 w-8 text-emerald-600" />,
//     title: "Eco-Friendly",
//     description: "Say goodbye to paper cards — reusable forever.",
//   },
//   {
//     icon: <ShieldCheckIcon className="h-8 w-8 text-yellow-600" />,
//     title: "Secure & Private",
//     description: "Your data is encrypted and safe with us.",
//   },
// ];

// export default function FeaturesSection() {
//   return (
//     <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
//       <div className="max-w-6xl mx-auto text-center">
//         <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
//           Why Choose Our Smart Card?
//         </h2>
//         <p className="text-gray-600 mb-12">
//           Smart, sleek, and built to impress — here’s what makes it special
//         </p>

//         <div className="mx-auto max-w-xs sm:max-w-5xl grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//           {features.map((feature, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105 p-6 text-left"
//             >
//               <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full mb-4">
//                 {feature.icon}
//               </div>
//               <h3 className="font-semibold text-gray-800 text-lg mb-1">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-500 text-sm">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }







import React, { useState } from "react";
import {
  CpuChipIcon,
  QrCodeIcon,
  PaintBrushIcon,
  PencilSquareIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const featureContent = {
  en: [
    {
      icon: <CpuChipIcon className="h-8 w-8 text-blue-600" />,
      title: "NFC Tap to Share",
      description: "Share your profile with a single tap.",
    },
    {
      icon: <QrCodeIcon className="h-8 w-8 text-purple-600" />,
      title: "Universal QR Access",
      description: "Scan from any phone — no app required.",
    },
    {
      icon: <PaintBrushIcon className="h-8 w-8 text-pink-600" />,
      title: "Custom Designs",
      description: "Tailored to your profession and style.",
    },
    {
      icon: <PencilSquareIcon className="h-8 w-8 text-green-600" />,
      title: "Editable Anytime",
      description: "Update your info in seconds — hassle-free.",
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8 text-emerald-600" />,
      title: "Eco-Friendly",
      description: "Say goodbye to paper cards — reusable forever.",
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-yellow-600" />,
      title: "Secure & Private",
      description: "Your data is encrypted and safe with us.",
    },
  ],
  hi: [
    {
      icon: <CpuChipIcon className="h-8 w-8 text-blue-600" />,
      title: "NFC टैप से शेयर करें",
      description: "सिर्फ एक टैप में प्रोफाइल शेयर करें।",
    },
    {
      icon: <QrCodeIcon className="h-8 w-8 text-purple-600" />,
      title: "सभी फोन के लिए QR",
      description: "कोई ऐप नहीं चाहिए, बस स्कैन करें।",
    },
    {
      icon: <PaintBrushIcon className="h-8 w-8 text-pink-600" />,
      title: "कस्टम डिज़ाइन",
      description: "आपके पेशे और स्टाइल के अनुसार।",
    },
    {
      icon: <PencilSquareIcon className="h-8 w-8 text-green-600" />,
      title: "कभी भी एडिट करें",
      description: "जानकारी बदलें चंद सेकंड में।",
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8 text-emerald-600" />,
      title: "इको-फ्रेंडली",
      description: "पेपर कार्ड को कहें अलविदा।",
    },
    {
      icon: <ShieldCheckIcon className="h-8 w-8 text-yellow-600" />,
      title: "सुरक्षित और निजी",
      description: "आपका डेटा एन्क्रिप्टेड और सुरक्षित है।",
    },
  ],
};

export default function FeaturesSection() {
  const [lang, setLang] = useState("en");
  const features = featureContent[lang];

  const heading = lang === "en" ? "Why Choose Our Smart Card?" : "हमारा स्मार्ट कार्ड क्यों चुनें?";
  const subtitle =
    lang === "en"
      ? "Smart, sleek, and built to impress — here’s what makes it special"
      : "स्मार्ट, आकर्षक और प्रभावशाली — ये हैं इसकी खास बातें।";

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setLang(lang === "en" ? "hi" : "en")}
            className="px-4 py-2 text-sm text-blue-700 border border-blue-500 rounded-full hover:bg-blue-100 transition"
          >
            {lang === "en" ? "हिंदी में देखें" : "View in English"}
          </button>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          {heading}
        </h2>
        <p className="text-gray-600 mb-12">{subtitle}</p>

        <div className="mx-auto max-w-xs sm:max-w-5xl grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105 p-6 text-left"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-gray-800 text-lg mb-1">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
