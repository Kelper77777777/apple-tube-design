
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoCardProps {
  title: string;
  channel: string;
  thumbnail: string;
  views: string;
  timeAgo: string;
  duration: string;
  className?: string;
}

export function VideoCard({ 
  title, 
  channel, 
  thumbnail, 
  views, 
  timeAgo, 
  duration,
  className 
}: VideoCardProps) {
  return (
    <div className={cn("group cursor-pointer", className)}>
      <div className="relative rounded-xl overflow-hidden aspect-video mb-3">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-xs text-white text-xs px-1.5 py-0.5 rounded-md">
          {duration}
        </div>
        
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
            <Play className="h-6 w-6 text-white" />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-medium text-sm line-clamp-2 leading-snug mb-1">{title}</h3>
        <p className="text-apple-gray-600 text-xs">{channel}</p>
        <p className="text-apple-gray-500 text-xs">{views} • {timeAgo}</p>
      </div>
    </div>
  );
}
