
import { Search, Bell, Mic, Upload } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header className={cn("h-16 border-b border-apple-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-10", className)}>
      <div className="flex items-center justify-between h-full px-6">
        {/* Left section - search */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="h-4 w-4 text-apple-gray-500" />
            </div>
            <input
              type="search"
              placeholder="Search"
              className="block w-full rounded-full bg-apple-gray-100 border border-apple-gray-200 py-2 pl-10 pr-4 
                focus:outline-none focus:ring-1 focus:ring-apple-blue focus:border-apple-blue
                text-sm placeholder:text-apple-gray-500"
            />
            <button className="absolute inset-y-0 right-0 flex items-center pr-3">
              <Mic className="h-4 w-4 text-apple-gray-700" />
            </button>
          </div>
        </div>
        
        {/* Right section - actions */}
        <div className="flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-apple-gray-100 transition-colors">
            <Upload className="h-5 w-5 text-apple-gray-700" />
          </button>
          <button className="p-2 rounded-full hover:bg-apple-gray-100 transition-colors">
            <Bell className="h-5 w-5 text-apple-gray-700" />
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-apple-red to-apple-blue flex items-center justify-center text-white font-medium">
            J
          </div>
        </div>
      </div>
    </header>
  );
}
