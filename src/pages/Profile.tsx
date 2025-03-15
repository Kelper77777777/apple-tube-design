
import { Header } from "@/components/layout/Header";
import { Sidebar } from "@/components/layout/Sidebar";
import { VideoSection } from "@/components/videos/VideoSection";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell, Settings, Share2 } from "lucide-react";

// Sample video data
const MY_VIDEOS = [
  {
    id: "my1",
    title: "Creating a Cinema 4D Animation - Timelapse",
    channel: "YourChannel",
    thumbnail: "https://i.ytimg.com/vi/xFVzl5459MU/maxresdefault.jpg",
    views: "1.2K views",
    timeAgo: "2 weeks ago",
    duration: "15:42"
  },
  {
    id: "my2",
    title: "5 Tips for Better iPhone Photography",
    channel: "YourChannel",
    thumbnail: "https://i.ytimg.com/vi/8Z1eMy2FoX4/maxresdefault.jpg",
    views: "3.7K views",
    timeAgo: "1 month ago",
    duration: "8:15"
  },
  {
    id: "my3",
    title: "How I Built a Minimal Desk Setup - 2023 Edition",
    channel: "YourChannel",
    thumbnail: "https://i.ytimg.com/vi/QfGnMRW1LGo/maxresdefault.jpg",
    views: "5.9K views",
    timeAgo: "3 months ago",
    duration: "12:37"
  }
];

const LIKED_VIDEOS = [
  {
    id: "l1",
    title: "Apple Vision Pro — Here We Go | Spatial Computing",
    channel: "Apple",
    thumbnail: "https://i.ytimg.com/vi/W1Iu8sREpJk/maxresdefault.jpg",
    views: "18M views",
    timeAgo: "7 months ago",
    duration: "2:38"
  },
  {
    id: "l2",
    title: "iPhone 15 & iPhone 15 Plus — Newphoria | Apple",
    channel: "Apple",
    thumbnail: "https://i.ytimg.com/vi/FT3ODSg1GFE/maxresdefault.jpg",
    views: "12M views",
    timeAgo: "3 months ago",
    duration: "1:51"
  },
  {
    id: "l3",
    title: "M3 MacBook Pro Review - Almost Perfect!",
    channel: "MKBHD",
    thumbnail: "https://i.ytimg.com/vi/rSfS8UYiuGo/maxresdefault.jpg",
    views: "3.5M views",
    timeAgo: "1 month ago",
    duration: "14:29"
  }
];

const Profile = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <Sidebar className="hidden md:flex" />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 px-6 py-8">
          {/* Profile Header */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
            <Avatar className="w-24 h-24 bg-gradient-to-br from-apple-red to-apple-blue">
              <AvatarFallback className="text-3xl font-medium">J</AvatarFallback>
            </Avatar>
            
            <div className="flex-1">
              <h1 className="text-2xl font-bold">John Appleseed</h1>
              <p className="text-zinc-400 mt-1">@johnappleseed • 125K subscribers</p>
              <p className="text-zinc-500 text-sm mt-2">Creating videos about design, technology, and productivity.</p>
              
              <div className="flex flex-wrap gap-3 mt-4">
                <Button variant="outline" className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white">
                  <Bell className="mr-2 h-4 w-4" />
                  Subscribed
                </Button>
                <Button variant="outline" className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
                <Button variant="outline" className="bg-zinc-800 border-zinc-700 hover:bg-zinc-700 text-white">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Button>
              </div>
            </div>
          </div>
          
          {/* Channel Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
              <p className="text-2xl font-bold">125K</p>
              <p className="text-zinc-400 text-sm">Subscribers</p>
            </div>
            <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
              <p className="text-2xl font-bold">48</p>
              <p className="text-zinc-400 text-sm">Videos</p>
            </div>
            <div className="bg-zinc-900 rounded-xl p-4 border border-zinc-800">
              <p className="text-2xl font-bold">2.4M</p>
              <p className="text-zinc-400 text-sm">Total Views</p>
            </div>
          </div>
          
          {/* Videos Sections */}
          <VideoSection 
            title="Your Videos" 
            videos={MY_VIDEOS}
            showMoreLink="#"
            className="mb-12"
          />
          
          <VideoSection 
            title="Liked Videos" 
            videos={LIKED_VIDEOS}
            showMoreLink="#"
          />
        </main>
      </div>
    </div>
  );
};

export default Profile;
