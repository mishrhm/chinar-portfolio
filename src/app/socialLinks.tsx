import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa';

const socialLinks = [
  {
    href: "https://www.instagram.com/chinar2burj",
    label: "Instagram",
    icon: <FaInstagram className="w-6 h-6" />,
    colorClass: "text-gray-600 hover:text-purple-600"
  },
  {
    href: "https://www.tiktok.com/@chinartoburj",
    label: "TikTok",
    icon: <FaTiktok className="w-5 h-5" />,
    colorClass: "text-gray-600 hover:text-red-600"
  },
];

const SocialLinks = () => {
  return (
    <div className="flex items-center justify-center gap-6">

       <Link
          href={"https://youtube.com/@chinar2burj?sub_confirmation=1"}
          target="_blank"
          title='Youtube 2'
          rel="noopener noreferrer" 
          className={`flex items-center gap-2 p-3 rounded-full bg-white shadow-md transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-400 text-gray-600 hover:text-red-600`}
          aria-label="Youtube 2"
        >
          {<FaYoutube className='w-6 h-6'/>}
          <span className="text-sm font-semibold">{"YouTube"}</span>
        </Link>
      {socialLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer" 
          className={`flex items-center gap-2 p-3 rounded-full bg-white shadow-md transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-400 ${link.colorClass}`}
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