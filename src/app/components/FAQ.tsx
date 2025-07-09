"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  faqs: FaqItem[];
};

export default function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="border rounded-lg divide-y">
      {faqs.map((item, idx) => (
        <div key={idx}>
          <button
            className="text-2xl w-full h-32 text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-semibold focus:outline-none text-black"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
          >
            {item.question}
          </button>
          {openIndex === idx && (
            <div className="px-4 py-3 bg-white text-gray-700">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
