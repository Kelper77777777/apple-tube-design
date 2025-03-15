
import { ChevronRight } from "lucide-react";
import { VideoCard } from "./VideoCard";
import { cn } from "@/lib/utils";

interface VideoSectionProps {
  title: string;
  showMoreLink?: string;
  videos: {
    id: string;
    title: string;
    channel: string;
    thumbnail: string;
    views: string;
    timeAgo: string;
    duration: string;
  }[];
  className?: string;
}

export function VideoSection({ title, showMoreLink, videos, className }: VideoSectionProps) {
  return (
    <div className={cn("mb-12", className)}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {showMoreLink && (
          <a href={showMoreLink} className="flex items-center text-apple-blue text-sm font-medium">
            See all
            <ChevronRight className="h-4 w-4 ml-1" />
          </a>
        )}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {videos.map((video) => (
          <VideoCard
            key={video.id}
            title={video.title}
            channel={video.channel}
            thumbnail={video.thumbnail}
            views={video.views}
            timeAgo={video.timeAgo}
            duration={video.duration}
          />
        ))}
      </div>
    </div>
  );
}
