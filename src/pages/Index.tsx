
import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { VideoSection } from "@/components/videos/VideoSection";
import { CategoryTabs } from "@/components/CategoryTabs";

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

const ANIME_VIDEOS = [
  {
    id: "a1",
    title: "Zenitsu: Rainy Forest AMV",
    channel: "Anime Edits",
    thumbnail: "public/lovable-uploads/8f88744a-05bf-4202-8fba-66c44e71a3bc.png",
    views: "3.6K views",
    timeAgo: "2 weeks ago",
    duration: "2:15"
  },
  {
    id: "a2",
    title: "Anime Fanart Images Full HD - 8K",
    channel: "Anime Arts",
    thumbnail: "public/lovable-uploads/6ad90bc3-280e-42f1-9937-81c59b02cedc.png",
    views: "5.3K views",
    timeAgo: "1 month ago",
    duration: "3:45"
  },
  {
    id: "a3",
    title: "No Copyright Anime Music Collection",
    channel: "Anime Sounds",
    thumbnail: "https://i.ytimg.com/vi/cyo8hVbvnY8/maxresdefault.jpg",
    views: "2.5K views",
    timeAgo: "3 weeks ago",
    duration: "45:20"
  },
  {
    id: "a4",
    title: "ASH 2K SUBS Special VFX Pack",
    channel: "Anime VFX",
    thumbnail: "https://i.ytimg.com/vi/qB9pHQRDJZo/maxresdefault.jpg",
    views: "1.8K views",
    timeAgo: "1 week ago",
    duration: "10:22"
  }
];

const TRENDING_VIDEOS = [
  {
    id: "t1",
    title: "M3 MacBook Pro Review - Almost Perfect!",
    channel: "MKBHD",
    thumbnail: "https://i.ytimg.com/vi/rSfS8UYiuGo/maxresdefault.jpg",
    views: "3.5M views",
    timeAgo: "1 month ago",
    duration: "14:29"
  },
  {
    id: "t2",
    title: "Introducing iPhone 15 Pro — Apple",
    channel: "Apple",
    thumbnail: "https://i.ytimg.com/vi/xqyUdNY_U6A/maxresdefault.jpg",
    views: "28M views",
    timeAgo: "3 months ago",
    duration: "4:56"
  },
  {
    id: "t3",
    title: "Why Apple Vision Pro Is Revolutionary",
    channel: "Tech Explained",
    thumbnail: "https://i.ytimg.com/vi/5JwOZxkO09I/maxresdefault.jpg",
    views: "2.1M views",
    timeAgo: "2 months ago",
    duration: "18:22"
  },
  {
    id: "t4",
    title: "The NEW M3 iPad Pro Is INCREDIBLE!",
    channel: "iJustine",
    thumbnail: "https://i.ytimg.com/vi/6H3YfiX2y90/maxresdefault.jpg", 
    views: "1.5M views",
    timeAgo: "2 months ago",
    duration: "12:08"
  }
];

const CATEGORIES = ["All", "Apple", "Anime", "Technology", "Gadgets", "Reviews", "Music", "Entertainment", "Gaming", "Science", "Education"];

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar className="hidden md:flex" />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1">
          <CategoryTabs 
            categories={CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            className="sticky top-16 bg-black/95 backdrop-blur-xl z-10"
          />
          
          <div className="px-6 py-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Trending Now</h2>
              <VideoSection 
                title="" 
                videos={TRENDING_VIDEOS}
                className="animate-slide-up"
              />
            </div>
            
            <VideoSection 
              title="Recommended" 
              videos={VIDEOS} 
              showMoreLink="#" 
              className="animate-slide-up mb-12"
            />
            
            <VideoSection 
              title="Anime Content" 
              videos={ANIME_VIDEOS}
              showMoreLink="#"
              className="animate-slide-up mb-12"
            />
            
            <div className="mt-8 mb-4">
              <h2 className="text-lg font-semibold mb-2">Recently Added</h2>
            </div>
            
            <VideoSection 
              title="" 
              videos={ANIME_VIDEOS.slice(0, 2)}
              className="animate-slide-up"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
