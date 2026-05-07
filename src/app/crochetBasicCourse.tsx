"use client";
import React from "react";
import { Heart, MousePointerClick, MessageCircle } from "lucide-react";

const CrochetBasicCourse = () => {
  return (
    <a href="https://forms.gle/vUc4sBdHZdG8m7Yn7" target="_blank">
      <div className="mt-15 mb-30 bg-[#FDF2F0] font-sans text-[#4A3728] shadow-2xl overflow-hidden border-t-8 border-[#D84B5A]">
        <div className="flex flex-col justify-center items-center sm:flex-row">
          <div>
            <HeaderSection></HeaderSection>
            <Hero15DaySection />
          </div>
          <div className="sm:py-12 px-4">
            <JoinOnlineClassSection />
            <SyllabusSection />
            <FloatingBadge />
          </div>
        </div>
        <div className="bg-[#D84B5A] text-white p-3 relative mt-12 sm:mt-0">
          <FooterSection />
          <TagLine />
        </div>
      </div>
    </a>
  );
};

function FooterSection() {
  return (
    <div className="flex items-center gap-4 mb-4">
      <div className="bg-white rounded-full p-3 text-[#D84B5A]">
        <MessageCircle size={28} className="fill-[#D84B5A]" />
      </div>
      <div className="leading-tight">
        <h3 className="font-black text-lg">INTERESTED?</h3>
        <p className="text-xs">
          <span className="text-yellow-300 font-bold">CLICK HERE</span> TO JOIN
          MY ONLINE CROCHET CLASSES!
        </p>
      </div>
    </div>
  );
}

function TagLine() {
  return (
    <div className="text-[10px] text-center border-t border-white/30 pt-4 font-bold tracking-widest uppercase flex items-center justify-center gap-2">
      <Heart size={10} className="fill-white" />
      One stitch at a time, you can do this!
      <Heart size={10} className="fill-white" />
    </div>
  );
}

function SyllabusSection() {
  const leftStitches = [
    "Slip Knot",
    "Chain Stitch (ch)",
    "Slip Stitch (sl st)",
    "Single Crochet (sc)",
    "Half Double Crochet (hdc)",
    "Double Crochet (dc)",
    "Triple Crochet (tr)",
    "Double Triple Crochet (dtc)",
  ];

  const rightStitches = [
    "Working in Rows & Rounds",
    "Counting Stitches",
    "Square & Circle",
    "Magic Ring",
    "Finishing",
    "Simple Project",
  ];

  return (
    <div className="px-6 mb-8">
      <div className="bg-[#D84B5A] text-white text-[10px] font-bold py-1 px-3 inline-block rounded-t-lg uppercase tracking-wider">
        You will learn these basic stitches:
      </div>
      <div className="bg-white/40 border-2 border-[#D84B5A] rounded-b-xl rounded-tr-xl p-4 grid grid-cols-2 gap-x-4 gap-y-2 text-[10px] font-bold uppercase italic">
        <div className="space-y-2">
          {leftStitches.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-2 border-b border-[#D84B5A]/20 pb-1"
            >
              <div className="w-2 h-2 rounded-full bg-[#D84B5A]" /> {s}
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {rightStitches.map((s, i) => (
            <div
              key={i}
              className="flex items-center gap-2 border-b border-[#D84B5A]/20 pb-1"
            >
              <div className="w-2 h-2 rounded-full bg-[#4A3728]" /> {s}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FloatingBadge() {
  return (
    <div className="flex justify-end px-6 -mt-32 sm:-mt-20 -mb-6">
      <div className="w-24 h-24 rounded-full border-2 border-dashed border-[#D84B5A] bg-white flex flex-col items-center justify-center text-center p-2 rotate-12 shadow-lg">
        <Heart size={12} className="text-[#D84B5A] fill-[#D84B5A]" />
        <span className="text-[10px] font-serif italic font-bold text-[#D84B5A]">
          Perfect for absolute beginners!
        </span>
        <Heart size={12} className="text-[#D84B5A] fill-[#D84B5A]" />
      </div>
    </div>
  );
}

function JoinOnlineClassSection() {
  return (
    <div className="mx-6 bg-white/60 border-2 border-dashed border-[#D84B5A] rounded-2xl p-4 flex gap-4 items-center mb-8">
      <div className="bg-[#D84B5A] p-3 rounded-xl text-white">
        <MousePointerClick size={32} />
      </div>
      <div>
        <h4 className="font-black uppercase text-xs tracking-tight">
          Join My Online Crochet Classes
        </h4>
        <p className="text-xs leading-tight text-gray-600">
          Learn step by step from basics to your first project.
        </p>
      </div>
    </div>
  );
}

function HeaderSection() {
  return (
    <div>
      {/* Header Section */}
      <div className="pt-8 px-6 text-center">
        <div className="flex justify-center gap-2 mb-2">
          <Heart size={16} className="text-[#D84B5A] fill-[#D84B5A]" />
          <p className="text-sm uppercase tracking-widest font-bold italic">
            Are you a
          </p>
          <Heart size={16} className="text-[#D84B5A] fill-[#D84B5A]" />
        </div>

        <h1 className="text-4xl sm:text-7xl font-serif text-[#D84B5A] italic leading-tight drop-shadow-sm">
          Beginner
        </h1>
        <p className="text-sm font-bold tracking-[0.2em] -mt-1 mb-2">IN</p>
        <h2 className="text-3xl sm:text-5xl font-black tracking-tighter uppercase mb-4">
          Crochet?
        </h2>

        <div className="bg-[#D84B5A] text-white py-2 px-4 rounded-full inline-flex items-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider mb-8">
          Join My Online Crochet Classes{" "}
          <Heart size={14} className="fill-white" />
        </div>
      </div>
    </div>
  );
}

function Hero15DaySection() {
  return (
    <div className=" text-[#4A3728] overflow-hidden border-t-8 border-[#D84B5A]">
      <div className="relative px-6 mb-8 flex items-center justify-center gap-4 bg-[#FDF2F0]">
        <div className="text-7xl sm:text-9xl font-black text-[#D84B5A] leading-none outline-text ">
          15
        </div>
        <div className="flex flex-col">
          <span className="text-4xl font-bold italic text-[#4A3728]">DAYS</span>
          <span className="text-3xl font-serif italic text-[#D84B5A]">
            Crochet Basics
          </span>
          <div className="border-t-2 border-b-2 border-dashed border-[#4A3728] py-1 text-center font-bold tracking-widest text-xs mt-1">
            SERIES
          </div>
        </div>
      </div>

      <style jsx>{`
        .outline-text {
          color: transparent;
          -webkit-text-stroke: 2px #d84b5a;
        }
      `}</style>
    </div>
  );
}

export default CrochetBasicCourse;
