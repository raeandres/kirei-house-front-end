import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

interface PropertyGalleryProps {
  images?: {
    id: string;
    url: string;
    alt: string;
  }[];
}

const PropertyGallery = ({ images = [] }: PropertyGalleryProps) => {
  const defaultImages = [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      alt: "Modern living room with large windows and natural light",
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      alt: "Stylish kitchen with marble countertops",
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      alt: "Cozy bedroom with king-size bed",
    },
    {
      id: "4",
      url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
      alt: "Modern bathroom with walk-in shower",
    },
    {
      id: "5",
      url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80",
      alt: "Outdoor patio with seating area",
    },
  ];

  const galleryImages = images.length > 0 ? images : defaultImages;

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <div className="w-full bg-white">
      {/* Main Gallery */}
      <div className="relative">
        {/* Main Image */}
        <div
          className={cn(
            "relative overflow-hidden rounded-lg",
            isFullScreen
              ? "fixed inset-0 z-50 flex items-center justify-center bg-black"
              : "w-full"
          )}
        >
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <img
              src={galleryImages[currentImageIndex].url}
              alt={galleryImages[currentImageIndex].alt}
              className={cn(
                "object-cover w-full h-full transition-transform duration-500",
                isFullScreen ? "max-h-screen" : ""
              )}
            />
          </AspectRatio>

          {/* Navigation Controls */}
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/70 hover:bg-white/90"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous image</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/70 hover:bg-white/90"
              onClick={handleNext}
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next image</span>
            </Button>
          </div>

          {/* Full Screen Controls */}
          <div className="absolute top-4 right-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full bg-white/70 hover:bg-white/90"
              onClick={toggleFullScreen}
            >
              {isFullScreen ? (
                <X className="h-5 w-5" />
              ) : (
                <Maximize2 className="h-5 w-5" />
              )}
              <span className="sr-only">
                {isFullScreen ? "Exit full screen" : "View full screen"}
              </span>
            </Button>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
            {currentImageIndex + 1} / {galleryImages.length}
          </div>
        </div>
      </div>
      {/* Thumbnails */}
      {!isFullScreen && (
        <div className="mt-4 overflow-x-auto">
          <div className="flex space-x-2 pb-2">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                className={cn(
                  "relative flex-shrink-0 cursor-pointer overflow-hidden rounded-md border-2",
                  currentImageIndex === index
                    ? "border-primary"
                    : "border-transparent"
                )}
                onClick={() => handleThumbnailClick(index)}
              >
                <AspectRatio ratio={16 / 9} className="w-24 h-16 bg-muted">
                  <img
                    src={image.url}
                    alt={`Thumbnail ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </AspectRatio>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyGallery;
