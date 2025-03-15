
import { Search, Bell, Mic, Upload } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link, useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results in a real app
      console.log(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <header className={cn("h-16 border-b border-zinc-800 bg-black/95 backdrop-blur-xl sticky top-0 z-10", className)}>
      <div className="flex items-center justify-between h-full px-6">
        {/* Left section - Logo */}
        <Link to="/" className="text-xl font-semibold text-white">
          YourTube
        </Link>

        {/* Middle section - search */}
        <div className="flex-1 max-w-2xl mx-4">
          <form onSubmit={handleSearch} className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-zinc-400" />
            </div>
            <input
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full rounded-full bg-zinc-900 border border-zinc-700 py-2 pl-10 pr-16
                focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600
                text-sm placeholder:text-zinc-400 text-white transition-all duration-200"
            />
            <button 
              type="button" 
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <Mic className="h-4 w-4 text-zinc-400" />
            </button>
          </form>
        </div>
        
        {/* Right section - actions */}
        <div className="flex items-center space-x-4">
          {/* Upload Button with Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 rounded-full hover:bg-zinc-800 transition-colors">
                <Upload className="h-5 w-5 text-white" />
              </button>
            </SheetTrigger>
            <SheetContent className="bg-zinc-900/95 backdrop-blur-xl border-zinc-800 text-white">
              <div className="flex flex-col gap-6 p-2">
                <h2 className="text-xl font-bold">Upload video</h2>
                <p className="text-zinc-400">Share your videos with the world</p>
                <div className="border-2 border-dashed border-zinc-700 rounded-lg p-12 text-center">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-zinc-500" />
                  <p className="text-zinc-400">Drag and drop video files to upload</p>
                  <button className="mt-4 bg-white text-black px-4 py-2 rounded-full text-sm">
                    SELECT FILES
                  </button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          
          <button className="p-2 rounded-full hover:bg-zinc-800 transition-colors">
            <Bell className="h-5 w-5 text-white" />
          </button>
          
          <Link to="/profile">
            <Avatar className="bg-white w-8 h-8 cursor-pointer">
              <AvatarFallback className="text-black font-medium">A</AvatarFallback>
            </Avatar>
          </Link>
        </div>
      </div>
    </header>
  );
}
