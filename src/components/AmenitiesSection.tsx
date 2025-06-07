import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import {
  Wifi,
  Tv,
  UtensilsCrossed,
  Bath,
  Car,
  Fan,
  Snowflake,
  Dumbbell,
  Coffee,
  Waves,
  Shirt,
  Lock,
  Sparkles,
} from "lucide-react";

interface AmenityItem {
  icon: React.ReactNode;
  name: string;
}

interface AmenitiesSectionProps {
  categories?: {
    name: string;
    amenities: AmenityItem[];
  }[];
}

const AmenitiesSection = ({
  categories = defaultCategories,
}: AmenitiesSectionProps) => {
  return (
    <div className="w-full py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Amenities</h2>
        <Separator className="mb-6" />

        <Tabs
          defaultValue={categories[0]?.name.toLowerCase() || "kitchen"}
          className="w-full"
        >
          <TabsList className="mb-6">
            {categories.map((category) => (
              <TabsTrigger
                key={category.name}
                value={category.name.toLowerCase()}
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => (
            <TabsContent
              key={category.name}
              value={category.name.toLowerCase()}
              className="space-y-4"
            >
              <Card>
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {category.amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center gap-3 p-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                          {amenity.icon}
                        </div>
                        <span>{amenity.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

// Default data for the component
const defaultCategories = [
  {
    name: "Kitchen",
    amenities: [
      { icon: <UtensilsCrossed size={20} />, name: "Full Kitchen" },
      { icon: <Coffee size={20} />, name: "Coffee Maker" },
      { icon: <Snowflake size={20} />, name: "Refrigerator" },
      { icon: <Sparkles size={20} />, name: "Dishwasher" },
      { icon: <UtensilsCrossed size={20} />, name: "Microwave" },
      { icon: <UtensilsCrossed size={20} />, name: "Cooking Basics" },
    ],
  },
  {
    name: "Bathroom",
    amenities: [
      { icon: <Bath size={20} />, name: "Shower" },
      { icon: <Bath size={20} />, name: "Bathtub" },
      { icon: <Sparkles size={20} />, name: "Hair Dryer" },
      { icon: <Sparkles size={20} />, name: "Shampoo" },
      { icon: <Sparkles size={20} />, name: "Hot Water" },
      { icon: <Shirt size={20} />, name: "Towels" },
    ],
  },
  {
    name: "Entertainment",
    amenities: [
      { icon: <Tv size={20} />, name: "TV" },
      { icon: <Wifi size={20} />, name: "WiFi" },
      { icon: <Tv size={20} />, name: "Streaming Services" },
      { icon: <Tv size={20} />, name: "Board Games" },
      { icon: <Tv size={20} />, name: "Books" },
    ],
  },
  {
    name: "Comfort",
    amenities: [
      { icon: <Fan size={20} />, name: "Air Conditioning" },
      { icon: <Fan size={20} />, name: "Heating" },
      { icon: <Waves size={20} />, name: "Pool" },
      { icon: <Dumbbell size={20} />, name: "Gym" },
      { icon: <Lock size={20} />, name: "Security System" },
      { icon: <Car size={20} />, name: "Free Parking" },
    ],
  },
];

export default AmenitiesSection;
