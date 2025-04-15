import React from 'react';
import {
  PencilIcon,
  DocumentTextIcon,
  EyeIcon,
  TruckIcon,
} from '@heroicons/react/24/outline';

const steps = [
  {
    id: 1,
    title: 'Select Your Design',
    description: 'Choose an elegant style that represents your brand.',
    icon: PencilIcon,
    bgColor: 'bg-blue-600',
  },
  {
    id: 2,
    title: 'Share Your Info',
    description: 'Submit your contact details via our form or WhatsApp.',
    icon: DocumentTextIcon,
    bgColor: 'bg-purple-600',
  },
  {
    id: 3,
    title: 'Preview & Approve',
    description: 'Review your card preview & let us know if any changes are needed.',
    icon: EyeIcon,
    bgColor: 'bg-teal-600',
  },
  {
    id: 4,
    title: 'Delivered to You',
    description: 'Your NFC-enabled smart card is printed and delivered directly.',
    icon: TruckIcon,
    bgColor: 'bg-green-600',
  },
];

const TimelineMobile = () => (
  <div className="relative pl-8 md:hidden">
    {/* Vertical connecting line */}
    <div className="absolute top-0 left-4 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 to-teal-500 rounded"></div>
    <div className="space-y-12">
      {steps.map((step) => {
        const Icon = step.icon;
        return (
          <div key={step.id} className="flex items-start">
            {/* Merged Badge & Icon */}
            <div className="relative z-10">
              <div
                className={`w-14 h-14 rounded-full ${step.bgColor} flex items-center justify-center text-white font-semibold shadow-md`}
              >
                <Icon className="w-6 h-6 absolute" />
                {/* <div className="text-xl absolute font-semibold">{step.id}</div> */}
              </div>
            </div>
            {/* Content */}
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{step.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const TimelineDesktop = () => (
  <div className="relative hidden md:block">
    {/* Horizontal connector line */}
    <div className="absolute top-12 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-teal-500 opacity-30 rounded-full"></div>
    <div className="grid grid-cols-4 gap-12 text-center">
      {steps.map((step) => {
        const Icon = step.icon;
        return (
          <div key={step.id} className="flex flex-col items-center text-center relative">
            {/* Merged Badge & Icon */}
            <div
              className={`w-16 h-16 rounded-full ${step.bgColor} flex items-center justify-center text-white font-semibold shadow-lg hover:scale-105 transition relative`}
            >
              <Icon className="w-8 h-8" />
            </div>
            {/* Content */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
              <p className="mt-1 text-sm text-gray-600">{step.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

const HowItWorks = () => {
  return (
    <section className="bg-orange-200 py-20 px-6 md:px-12 lg:px-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-gray-800">How It Works</h2>
        <p className="mt-2 text-lg text-gray-500 max-w-2xl mx-auto">
          A simple 4-step process to get your personalized NFC business card.
        </p>
      </div>
      
      {/* Mobile Timeline */}
      <TimelineMobile />

      {/* Desktop Timeline */}
      <TimelineDesktop />

      <div className="text-center mt-16">
        <a
          href="#order"
          className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md hover:bg-blue-700 transition duration-300"
        >
          Ready to get started? Order Now!
        </a>
      </div>
    </section>
  );
};

export default HowItWorks;
