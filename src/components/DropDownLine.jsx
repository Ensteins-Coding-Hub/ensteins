"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function DropDownLine() {
  const faqs = [
    {
      question: "Who Are We?",
      answer:
        "Ensteins is a technology-driven student club dedicated to innovation, creativity, and hands-on learning. We empower students through events, workshops, and technical projects across multiple domains.",
    },
    {
      question: "Our Mission",
      answer:
        "Our mission is to build a strong, collaborative community where students can learn modern technologies, work on real projects, and grow both personally and professionally.",
    },
    {
      question: "Our Activities",
      answer:
        "We organize hackathons, tech workshops, competitions, conferences, club projects, and skill-building sessions in areas like AI, mobile development, robotics, and cybersecurity.",
    },
    {
      question: "Join the Community",
      answer:
        "Anyone with curiosity and passion can join us! No experience required — we help you build it. Follow our announcements and apply during recruitment to be part of Ensteins.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="w-full flex justify-center py-20 px-4">
      <div className="w-[90%] max-w-5xl rounded-lg p-10 flex flex-col lg:flex-row gap-10 backdrop-blur-sm">

        <div className="flex-1 text-white">
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            GET TO KNOW
            <br />
            <span className="text-blue-400">ENST</span>EINS
          </h2>

          {/* <Button className="mt-8 px-6 py-2 rounded-full transition shadow-lg">
            Learn More
          </Button> */}
        </div>

        <div className="flex-1 flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl border border-blue-500/10 overflow-hidden bg-linear-to-br from-[#2c2c40] to-[#181824]"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-4 flex justify-between items-center cursor-pointer"
              >
                <span className="text-white/90 font-medium">
                  {faq.question}
                </span>
                <FiChevronDown
                  className={`text-blue-400 text-xl transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`
                  transition-all duration-300 text-white/80 px-4 
                  ${
                    openIndex === i
                      ? "max-h-40 py-2 opacity-100"
                      : "max-h-0 py-0 opacity-0"
                  }
                `}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
