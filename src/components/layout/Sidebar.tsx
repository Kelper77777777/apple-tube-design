
import { Home, Compass, Clock, Bookmark, Music, Film, ChevronDown, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <div className={cn("w-64 h-screen flex flex-col bg-apple-gray-100 border-r border-apple-gray-200", className)}>
      <div className="p-4 flex items-center space-x-2 border-b border-apple-gray-200">
        <div className="w-8 h-8 rounded-full bg-apple-red flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="16" height="16">
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
          </svg>
        </div>
        <span className="text-lg font-bold">YourTube</span>
      </div>
      
      <div className="flex-1 py-4">
        <div className="space-y-1 px-3">
          <SidebarItem icon={<Home size={20} />} label="Home" active />
          <SidebarItem icon={<Compass size={20} />} label="Explore" />
          <SidebarItem icon={<Clock size={20} />} label="Shorts" />
          <SidebarItem icon={<Bookmark size={20} />} label="Subscriptions" />
        </div>
        
        <div className="mt-6 px-3">
          <p className="text-xs font-medium text-apple-gray-600 mb-2">Your Library</p>
          <div className="space-y-1">
            <SidebarItem icon={<Clock size={20} />} label="History" />
            <SidebarItem icon={<Film size={20} />} label="Your Videos" />
            <SidebarItem icon={<Clock size={20} />} label="Watch Later" />
            <SidebarItem icon={<Music size={20} />} label="Liked Videos" />
            <SidebarItem icon={<ChevronDown size={20} />} label="Show More" />
          </div>
        </div>
        
        <div className="mt-6 px-3">
          <p className="text-xs font-medium text-apple-gray-600 mb-2">Subscriptions</p>
          <div className="space-y-1">
            <SubscriptionItem name="Apple" />
            <SubscriptionItem name="MKBHD" />
            <SubscriptionItem name="Verge" />
            <SubscriptionItem name="iJustine" />
          </div>
        </div>
      </div>
      
      <div className="p-4 border-t border-apple-gray-200">
        <SidebarItem icon={<Settings size={20} />} label="Settings" />
        <SidebarItem icon={<User size={20} />} label="Account" />
      </div>
    </div>
  );
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

function SidebarItem({ icon, label, active = false }: SidebarItemProps) {
  return (
    <div 
      className={cn(
        "flex items-center space-x-3 px-3 py-2 rounded-lg text-apple-gray-700 cursor-pointer transition-colors",
        active ? "bg-apple-gray-200 font-medium" : "hover:bg-apple-gray-200"
      )}
    >
      <div className={cn("text-apple-gray-600", active && "text-apple-red")}>
        {icon}
      </div>
      <span>{label}</span>
    </div>
  );
}

interface SubscriptionItemProps {
  name: string;
}

function SubscriptionItem({ name }: SubscriptionItemProps) {
  const initial = name.charAt(0);
  
  return (
    <div className="flex items-center space-x-3 px-3 py-2 rounded-lg text-apple-gray-700 cursor-pointer hover:bg-apple-gray-200 transition-colors">
      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-apple-red to-apple-blue flex items-center justify-center text-white text-xs font-medium">
        {initial}
      </div>
      <span>{name}</span>
    </div>
  );
}
