
import { useState } from "react";
import { 
  Play, Pause, Volume2, VolumeX, Maximize, 
  SkipBack, SkipForward, Share, ThumbsUp, ThumbsDown, Bookmark 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  title: string;
  videoSrc: string;
  posterSrc: string;
  className?: string;
}

export function VideoPlayer({ title, videoSrc, posterSrc, className }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  return (
    <div className={cn("relative rounded-2xl overflow-hidden bg-black", className)}>
      <div className="relative aspect-video">
        {/* Video */}
        <video
          className="w-full h-full object-contain"
          src={videoSrc}
          poster={posterSrc}
          muted={isMuted}
          autoPlay={false}
          controls={false}
        />

        {/* Overlay controls (visible on hover) */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-between p-6">
          {/* Top controls - title */}
          <div className="text-white">
            <h2 className="text-lg font-medium">{title}</h2>
          </div>

          {/* Center play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button 
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              {isPlaying ? (
                <Pause className="h-8 w-8 text-white" />
              ) : (
                <Play className="h-8 w-8 text-white ml-1" />
              )}
            </button>
          </div>

          {/* Bottom controls bar */}
          <div className="space-y-3">
            {/* Progress bar */}
            <div className="w-full h-1 bg-white/30 rounded-full">
              <div className="w-1/3 h-full bg-apple-red rounded-full"></div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={togglePlay} 
                  className="text-white hover:text-apple-red transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="h-5 w-5" />
                  ) : (
                    <Play className="h-5 w-5" />
                  )}
                </button>
                <button className="text-white hover:text-apple-red transition-colors">
                  <SkipBack className="h-5 w-5" />
                </button>
                <button className="text-white hover:text-apple-red transition-colors">
                  <SkipForward className="h-5 w-5" />
                </button>
                <button 
                  onClick={toggleMute} 
                  className="text-white hover:text-apple-red transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="h-5 w-5" />
                  ) : (
                    <Volume2 className="h-5 w-5" />
                  )}
                </button>
                <span className="text-white text-sm">1:23 / 4:56</span>
              </div>

              <div className="flex items-center space-x-3">
                <button className="text-white hover:text-apple-red transition-colors">
                  <ThumbsUp className="h-5 w-5" />
                </button>
                <button className="text-white hover:text-apple-red transition-colors">
                  <ThumbsDown className="h-5 w-5" />
                </button>
                <button className="text-white hover:text-apple-red transition-colors">
                  <Share className="h-5 w-5" />
                </button>
                <button className="text-white hover:text-apple-red transition-colors">
                  <Bookmark className="h-5 w-5" />
                </button>
                <button 
                  onClick={toggleFullscreen} 
                  className="text-white hover:text-apple-red transition-colors"
                >
                  <Maximize className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
