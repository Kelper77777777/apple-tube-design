
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { VideoSection } from "@/components/videos/VideoSection";
import { CategoryTabs } from "@/components/CategoryTabs";
import { VideoPlayer } from "@/components/videoPlayer/VideoPlayer";

const FEATURED_VIDEO = {
  id: "featured",
  title: "Introducing iPhone 15 Pro — Apple",
  channel: "Apple",
  thumbnail: "https://i.ytimg.com/vi/xqyUdNY_U6A/maxresdefault.jpg",
  posterSrc: "https://i.ytimg.com/vi/xqyUdNY_U6A/maxresdefault.jpg",
  videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4", // Fallback video
  views: "28M views",
  timeAgo: "3 months ago",
  duration: "4:56"
};

const VIDEOS = [
  {
    id: "1",
    title: "Apple Vision Pro — Here We Go | Spatial Computing",
    channel: "Apple",
    thumbnail: "https://i.ytimg.com/vi/W1Iu8sREpJk/maxresdefault.jpg",
    views: "18M views",
    timeAgo: "7 months ago",
    duration: "2:38"
  },
  {
    id: "2",
    title: "Apple WWDC 2023 Full Keynote",
    channel: "Apple",
    thumbnail: "https://i.ytimg.com/vi/GYkq9Rgoj8E/maxresdefault.jpg",
    views: "5.1M views",
    timeAgo: "9 months ago",
    duration: "1:45:29"
  },
  {
    id: "3",
    title: "iPhone 15 & iPhone 15 Plus — Newphoria | Apple",
    channel: "Apple",
    thumbnail: "https://i.ytimg.com/vi/FT3ODSg1GFE/maxresdefault.jpg",
    views: "12M views",
    timeAgo: "3 months ago",
    duration: "1:51"
  },
  {
    id: "4",
    title: "Apple Watch Series 9 | Smarter. Brighter. Mightier.",
    channel: "Apple",
    thumbnail: "https://i.ytimg.com/vi/IyQwQvgDRSM/maxresdefault.jpg",
    views: "7.2M views",
    timeAgo: "3 months ago",
    duration: "1:38"
  }
];

const TRENDING_VIDEOS = [
  {
    id: "t1",
    title: "Using $10,000 of Apple Products for a Day!",
    channel: "MKBHD",
    thumbnail: "https://i.ytimg.com/vi/SFDVJSokFao/maxresdefault.jpg",
    views: "8.4M views",
    timeAgo: "2 weeks ago",
    duration: "14:20"
  },
  {
    id: "t2",
    title: "Apple's Secret M3 Performance Explained!",
    channel: "Verge",
    thumbnail: "https://i.ytimg.com/vi/zlM9M9L4LtQ/maxresdefault.jpg",
    views: "3.2M views",
    timeAgo: "1 month ago",
    duration: "10:45"
  },
  {
    id: "t3",
    title: "Apple AirPods Pro 2 Review - Worth The Upgrade?",
    channel: "iJustine",
    thumbnail: "https://i.ytimg.com/vi/l_kyKWsQ-G8/maxresdefault.jpg",
    views: "2.8M views",
    timeAgo: "5 months ago",
    duration: "12:18"
  },
  {
    id: "t4",
    title: "The Problem with Apple's Ecosystem",
    channel: "TechLinked",
    thumbnail: "https://i.ytimg.com/vi/qEsVsFQDTFk/maxresdefault.jpg",
    views: "1.5M views",
    timeAgo: "2 weeks ago",
    duration: "8:42"
  }
];

const CATEGORIES = ["All", "Apple", "Technology", "Gadgets", "Reviews", "Music", "Entertainment", "Gaming", "Science", "Education"];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="flex min-h-screen bg-apple-gray-100">
      <Sidebar className="hidden md:flex" />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1">
          <CategoryTabs 
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            className="sticky top-16 bg-apple-gray-100/80 backdrop-blur-sm z-10"
          />
          
          <div className="px-6 py-6">
            <div className="mb-10">
              <VideoPlayer 
                title={FEATURED_VIDEO.title}
                videoSrc={FEATURED_VIDEO.videoSrc}
                posterSrc={FEATURED_VIDEO.posterSrc}
                className="animate-fade-in"
              />
              
              <div className="mt-4 flex items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-apple-red to-apple-blue flex-shrink-0 flex items-center justify-center text-white font-medium">
                  A
                </div>
                <div className="ml-3 flex-1">
                  <h1 className="text-xl font-semibold">{FEATURED_VIDEO.title}</h1>
                  <p className="text-apple-gray-600">{FEATURED_VIDEO.channel}</p>
                  <p className="text-apple-gray-500 text-sm">{FEATURED_VIDEO.views} • {FEATURED_VIDEO.timeAgo}</p>
                </div>
              </div>
            </div>
            
            <VideoSection 
              title="Recommended" 
              videos={VIDEOS} 
              showMoreLink="#" 
              className="animate-slide-up"
            />
            
            <VideoSection 
              title="Trending" 
              videos={TRENDING_VIDEOS}
              showMoreLink="#"
              className="animate-slide-up"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
