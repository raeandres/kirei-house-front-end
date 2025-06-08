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
      url: "/images/gallery/bedroom_front_1.jpg",
      alt: "Bedroom front 1",
    },
    {
      id: "2",
      url: "/images/showcase/living_angle_1.jpg",
      alt: "Living room Angle 1",
    },
    {
      id: "3",
      url: "/images/hero/kitchen_left_1.jpg",
      alt: "Kitchen Stove 1",
    },
    {
      id: "4",
      url: "/images/amenities/kitchen_plates.jpg",
      alt: "Dining with plates",
    },
    {
      id: "5",
      url: "/images/showcase/ramen_2.jpg",
      alt: "Pet friendly",
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
