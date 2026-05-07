import Image from "next/image";
import SocialLinks from "./socialLinks";
import CrochetBasicCourse from "./crochetBasicCourse";

export default function Home() {
  const profile = {
    name: "Iqra Mishal",
    handle: "chinar2burj",
    stats: {
      posts: "47",
      followers: "1.904k",
      following: "12",
    },
    bio: [
      "From Chinar 🍁 Leaves to Burj Skies! 🌌📍Kashmir",
      "Crochet | Stitching | Crafts",
      "📍Dubai based 📩 DM for orders & collabs",
    ],
    youtubeLink: "youtube.com/@Chinar2Burj",
  };

  return (
    <div
      className="h-full w-full bg-orange-50 font-sans
     flex flex-col items-center justify-center 
     p-5 sm:p-6 lg:p-8"
    >
      <div
        className="w-full max-w-2xl bg-white text-center
       rounded-3xl shadow-xl p-6 sm:p-10"
      >
        <HeroImageSection />
        {ProfileDetailsSection(profile)}
        <SocialLinks />
        {/* {BioSection(profile)} */}
      </div>
      <CrochetBasicCourse />
    </div>
  );
}
function BioSection(profile: {
  name: string;
  handle: string;
  stats: { posts: string; followers: string; following: string };
  bio: string[];
  youtubeLink: string;
}) {
  return (
    <div className="text-bg sm:text-base text-gray-600 text-left mb-6 leading-relaxed">
      {profile.bio.map((line, index) => (
        <p key={index} className="mb-1">
          {line}
        </p>
      ))}
    </div>
  );
}

function StatsSection(profile: {
  name: string;
  handle: string;
  stats: { posts: string; followers: string; following: string };
  bio: string[];
  youtubeLink: string;
}): import("react").ReactNode {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8 text-gray-700">
      <div className="flex flex-col items-center">
        <span className="font-bold text-lg sm:text-2xl text-black">
          {profile.stats.posts}
        </span>
        <span className="text-xs sm:text-sm">posts</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-bold text-lg sm:text-2xl text-black">
          {profile.stats.followers}
        </span>
        <span className="text-xs sm:text-sm">followers</span>
      </div>
      <div className="flex flex-col items-center">
        <span className="font-bold text-lg sm:text-2xl text-black">
          {profile.stats.following}
        </span>
        <span className="text-xs sm:text-sm">following</span>
      </div>
    </div>
  );
}

function ProfileDetailsSection(profile: {
  name: string;
  handle: string;
  stats: { posts: string; followers: string; following: string };
  bio: string[];
  youtubeLink: string;
}) {
  return (
    <div className="flex flex-col items-center mb-6">
      <div className="relative w-24 h-24 sm:w-40 sm:h-40 rounded-full -mt-20 sm:-mt-24 mb-4 overflow-hidden border-4 border-white-100 shadow-lg">
        {/* Placeholder for the profile picture */}
        <Image
          src="/insta dp.jpg"
          alt="Chinar2Burj Profile Picture"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <h1 className="text-3xl sm:text-4xl font-bold text-black leading-tight">
        {profile.name}
      </h1>
      <p className="text-sm sm:text-base text-gray-500 mt-1">
        @{profile.handle}
      </p>
    </div>
  );
}

function HeroImageSection() {
  return (
    <div className="relative w-full h-25 sm:h-80 rounded-2xl overflow-hidden mb-8 shadow-md">
      {/* Use a placeholder image from a service like Unsplash for now */}
      <Image
        src="/Chinar2Burj-Cover.webp"
        alt="Beautiful crochet work and crafting supplies"
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
}
