import React from "react";
import { Button } from "./ui/button";
import PropertyGallery from "./PropertyGallery";
import AmenitiesSection from "./AmenitiesSection";
import BookingSystem from "./BookingSystem";
import ContactSection from "./ContactSection";
import { MapPin, Phone, Mail, Calendar, Home } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Home className="h-6 w-6" />
            <span className="text-xl font-bold">Kirei House</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#gallery"
              className="text-sm font-medium hover:text-primary"
            >
              Gallery
            </a>
            <a
              href="#amenities"
              className="text-sm font-medium hover:text-primary"
            >
              Amenities
            </a>
            <a
              href="#booking"
              className="text-sm font-medium hover:text-primary"
            >
              Book Now
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </a>
          </nav>
          <Button className="hidden md:inline-flex">Book Now</Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative">
        <div className="h-[70vh] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80"
            alt="Luxury Beach House"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Kirei House</h1>
            <p className="text-xl md:text-2xl mb-8">
              Your perfect beachfront getaway awaits
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              <Calendar className="mr-2 h-5 w-5" /> Book Your Stay
            </Button>
          </div>
        </div>
      </section>

      {/* Property Overview */}
      <section className="py-16 container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Welcome to Kirei House</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Experience luxury living in our stunning beachfront property. With
              breathtaking ocean views, modern amenities, and a prime location,
              Kirei House offers the perfect setting for your dream vacation.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Prime Location</p>
                  <p className="text-sm text-muted-foreground">
                    Just steps away from the beach
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">24/7 Support</p>
                  <p className="text-sm text-muted-foreground">
                    Always available to assist you
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-full">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium">Easy Booking</p>
                  <p className="text-sm text-muted-foreground">
                    Simple reservation process
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
              alt="Property Exterior"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-2">Property Gallery</h2>
          <p className="text-muted-foreground mb-8">
            Explore our beautiful property through images
          </p>
          <PropertyGallery />
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-16 container">
        <h2 className="text-3xl font-bold mb-2">Amenities</h2>
        <p className="text-muted-foreground mb-8">
          Everything you need for a comfortable stay
        </p>
        <AmenitiesSection />
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-16 bg-muted/50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-2">Book Your Stay</h2>
          <p className="text-muted-foreground mb-8">
            Check availability and reserve your dates
          </p>
          <BookingSystem />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 container">
        <h2 className="text-3xl font-bold mb-2">Contact Us</h2>
        <p className="text-muted-foreground mb-8">
          Have questions? Get in touch with us
        </p>
        <ContactSection />
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Home className="h-6 w-6" />
                <span className="text-xl font-bold">Kirei House</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Your perfect beachfront getaway in a prime location with
                stunning views and modern amenities.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#gallery"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#amenities"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Amenities
                  </a>
                </li>
                <li>
                  <a
                    href="#booking"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Book Now
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-muted-foreground hover:text-primary"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4">
                Contact Information
              </h3>
              <address className="not-italic">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">
                    123 Coastal Drive, Beachtown, CA 90210
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">
                    info@coastalretreat.com
                  </span>
                </div>
              </address>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} Kirei House. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
