
import Link from 'next/link';
import Image from 'next/image';
import SocialLinks from './socialLinks';

export default function Home() {
  const profile = {
    name: 'Iqra Mishal',
    handle: 'chinar2burj',
    stats: {
      posts: '47',
      followers: '1.904k',
      following: '12',
    },
    bio: [
      'From Chinar 🍁 Leaves to Burj Skies! 🌌📍Kashmir',
      'Crochet | Stitching | Crafts & Dubai views',
      '📍Dubai based 📩 DM for orders & collabs',
    ],
    youtubeLink: 'youtube.com/@Chinar2Burj'
  };

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center p-5 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl p-6 sm:p-10 text-center">
        {/* Hero Image Section */}
        <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-8 shadow-md">
          {/* Use a placeholder image from a service like Unsplash for now */}
          <Image
            src="https://cmtyhelp.com/wp-content/uploads/2025/09/Chinar2Burj-Cover.webp"
            alt="Beautiful crochet work and crafting supplies"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Profile Details Section */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-24 h-24 sm:w-40 sm:h-40 rounded-full -mt-20 sm:-mt-24 mb-4 overflow-hidden border-4 border-white-100 shadow-lg">
            {/* Placeholder for the profile picture */}
            <Image
              src="https://cmtyhelp.com/wp-content/uploads/2025/09/Chinar2Burj-Credit-scaled.webp"
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


        {/* Social Links Component */}
        <SocialLinks />
        
        {/* Stats Section
        <div className="grid grid-cols-3 gap-4 mb-8 text-gray-700">
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg sm:text-2xl text-black">{profile.stats.posts}</span>
            <span className="text-xs sm:text-sm">posts</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg sm:text-2xl text-black">{profile.stats.followers}</span>
            <span className="text-xs sm:text-sm">followers</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg sm:text-2xl text-black">{profile.stats.following}</span>
            <span className="text-xs sm:text-sm">following</span>
          </div>
        </div> */}

        {/* Bio Section */}
        <div className="text-bg sm:text-base text-gray-600 text-left mb-6 leading-relaxed">
          {profile.bio.map((line, index) => (
            <p key={index} className="mb-1">
              {line}
            </p>
          ))}
          {/* <Link
            href={`https://${profile.youtubeLink}?sub_confirmation=1`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:underline mt-2 inline-block transition-colors duration-200"
          >
            <span className="font-medium">{profile.youtubeLink}</span>
          </Link> */}
        </div>
      </div>
    </div>
  );
}