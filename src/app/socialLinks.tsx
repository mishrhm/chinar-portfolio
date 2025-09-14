import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const socialLinks = [
  {
    href: "https://www.instagram.com/chinar2burj",
    label: "Instagram",
    icon: <FaInstagram className="w-5 h-5" />,
    colorClass: "text-white bg-gradient-to-tr from-yellow-200 via-red-500 via-10% via-pink-500 via-25% to-purple-500 to-100%"
  },
  {
    href: "https://www.tiktok.com/@chinartoburj",
    label: "TikTok",
    icon: <FaTiktok className="w-4 h-4" />,
    colorClass: "text-white bg-black"
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-4 mb-8">

       <Link
          href={"https://youtube.com/@chinar2burj?sub_confirmation=1"}
          target="_blank"
          title='Youtube'
          rel="noopener noreferrer" 
          className={`flex items-center gap-2 p-3 rounded-full bg-red-500 shadow-md transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-400 text-white`}
          aria-label="Youtube"
        >
          {<FaYoutube className='w-5 h-5'/>}
          <span className="text-sm font-semibold">{"YouTube"}</span>
        </Link>
      {socialLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer" 
          className={`flex items-center gap-2 p-3 rounded-full shadow-md transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-400 ${link.colorClass}`}
          aria-label={link.label}
        >
          {link.icon}
          <span className="text-sm font-semibold">{link.label}</span>
        </Link>
      ))}
    </div>
  );
};

export default SocialLinks;