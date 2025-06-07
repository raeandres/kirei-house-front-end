import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  Clock,
  ExternalLink,
} from "lucide-react";

interface ContactSectionProps {
  propertyAddress?: string;
  propertyCity?: string;
  propertyState?: string;
  propertyZip?: string;
  hostName?: string;
  hostPhone?: string;
  hostEmail?: string;
  nearbyAttractions?: Array<{ name: string; distance: string }>;
  mapUrl?: string;
}

const ContactSection = ({
  propertyAddress = "39D Eastwood Global Plaza Luxury Residence",
  propertyCity = "Palm Tree Avenue, Eastwood City, Libis",
  propertyState = "Quezon City",
  propertyZip = "1800",
  hostName = "Siri Andres",
  hostPhone = "(63) 917-506 9965",
  hostEmail = "business.siriandres@gmail.com",
  nearbyAttractions = [
    { name: "Eastwood City", distance: "0.1 km" },
    { name: "Bonifacio Global City", distance: "6 km" },
    { name: "Ortigas Center", distance: "3.8 km" },
    { name: "Makati", distance: "7 km" },
    { name: "Airport", distance: "12 km" },
  ],
  mapUrl = "https://images.unsplash.com/photo-1577086664693-894d8405334a?w=800&q=80",
}: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-12 px-4 md:px-8 bg-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Location & Contact
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map and Location Information */}
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Property Location</CardTitle>
                <CardDescription>
                  Find us and explore the neighborhood
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Interactive Map (placeholder image) */}
                <div className="relative rounded-md overflow-hidden h-64 bg-muted">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5199.74430346861!2d121.08133734244423!3d14.6075846246003!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ssg!4v1749335816648!5m2!1sen!2ssg"
                    width="600"
                    height="450"
                    loading="lazy"
                  ></iframe>

                  <div className="absolute bottom-3 right-3">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>View on Google Maps</span>
                    </Button>
                  </div>
                </div>

                {/* Address Information */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-muted-foreground">
                        {propertyAddress}
                        <br />
                        {propertyCity}, {propertyState} {propertyZip}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Navigation className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium">Directions</h3>
                      <p className="text-muted-foreground">
                        From the airport, take Highway 101 North for 10 miles.
                        Exit at Beach Road and turn right. The property will be
                        on your left after 0.5 miles.
                      </p>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Nearby Places */}
                <div>
                  <h3 className="font-medium mb-3 flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <span>Nearby Places</span>
                  </h3>
                  <ul className="space-y-2">
                    {nearbyAttractions.map((attraction, index) => (
                      <li key={index} className="flex justify-between">
                        <span>{attraction.name}</span>
                        <span className="text-muted-foreground">
                          {attraction.distance}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information and Inquiry Form */}
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Contact the Host</CardTitle>
                <CardDescription>
                  Have questions? Reach out directly
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Host Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="font-medium text-primary">
                        {hostName
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-medium">{hostName}</h3>
                      <p className="text-sm text-muted-foreground">
                        Property Host
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>{hostPhone}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>{hostEmail}</span>
                  </div>
                </div>

                <Separator />

                {/* Inquiry Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="I'm interested in booking your property and have a few questions..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
              <CardFooter className="text-sm text-muted-foreground">
                <p>We typically respond to inquiries within 24 hours.</p>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
