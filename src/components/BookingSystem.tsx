import React, { useState } from "react";
import { format, addDays, differenceInDays } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon, CreditCard, Users } from "lucide-react";
import { cn } from "@/lib/utils";

interface BookingSystemProps {
  propertyName?: string;
  pricePerNight?: number;
  cleaningFee?: number;
  serviceFee?: number;
  taxRate?: number;
  maxGuests?: number;
}

const BookingSystem = ({
  propertyName = "Luxury Beach House",
  pricePerNight = 250,
  cleaningFee = 100,
  serviceFee = 50,
  taxRate = 0.12,
  maxGuests = 6,
}: BookingSystemProps) => {
  const [dateRange, setDateRange] = useState<{
    from: Date;
    to?: Date;
  }>({ from: new Date() });

  const [guests, setGuests] = useState(2);
  const [isProcessing, setIsProcessing] = useState(false);
  const [bookingComplete, setBookingComplete] = useState(false);

  // Calculate number of nights
  const nights = dateRange.to
    ? differenceInDays(dateRange.to, dateRange.from)
    : 0;

  // Calculate costs
  const accommodationCost = nights * pricePerNight;
  const taxAmount = accommodationCost * taxRate;
  const totalCost = accommodationCost + cleaningFee + serviceFee + taxAmount;

  const handleBooking = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setBookingComplete(true);
    }, 2000);
  };

  if (bookingComplete) {
    return (
      <Card className="w-full max-w-md mx-auto bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-green-600">Booking Confirmed!</CardTitle>
          <CardDescription>
            Thank you for booking {propertyName}.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-md">
              <p className="font-medium">Booking Details:</p>
              <p>Check-in: {dateRange.from && format(dateRange.from, "PPP")}</p>
              <p>Check-out: {dateRange.to && format(dateRange.to, "PPP")}</p>
              <p>Guests: {guests}</p>
              <p className="mt-2 font-semibold">
                Total: ${totalCost.toFixed(2)}
              </p>
            </div>
            <p className="text-sm text-gray-500">
              A confirmation email has been sent to your email address.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={() => setBookingComplete(false)}>
            Book Another Stay
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-lg">
      <CardHeader>
        <CardTitle>Book Your Stay</CardTitle>
        <CardDescription>
          Select dates and guests for {propertyName}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="dates">Dates</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="dates"
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {dateRange.from ? (
                  dateRange.to ? (
                    <>
                      {format(dateRange.from, "PPP")} -{" "}
                      {format(dateRange.to, "PPP")}
                    </>
                  ) : (
                    format(dateRange.from, "PPP")
                  )
                ) : (
                  <span>Select dates</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={dateRange.from}
                selected={dateRange}
                onSelect={setDateRange}
                numberOfMonths={2}
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="guests">Guests</Label>
          <Select
            value={guests.toString()}
            onValueChange={(value) => setGuests(parseInt(value))}
          >
            <SelectTrigger id="guests" className="w-full">
              <SelectValue placeholder="Select number of guests" />
            </SelectTrigger>
            <SelectContent>
              {Array.from({ length: maxGuests }, (_, i) => i + 1).map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num} {num === 1 ? "Guest" : "Guests"}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {nights > 0 && (
          <div className="mt-6 space-y-4">
            <div className="text-sm">
              <div className="flex justify-between py-1">
                <span>
                  ${pricePerNight} × {nights} nights
                </span>
                <span>${accommodationCost}</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Cleaning fee</span>
                <span>${cleaningFee}</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Service fee</span>
                <span>${serviceFee}</span>
              </div>
              <div className="flex justify-between py-1">
                <span>Taxes ({(taxRate * 100).toFixed(0)}%)</span>
                <span>${taxAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between py-2 font-semibold border-t mt-2">
                <span>Total</span>
                <span>${totalCost.toFixed(2)}</span>
              </div>
            </div>
          </div>
        )}

        <div className="space-y-4 pt-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" placeholder="Doe" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john.doe@example.com" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="+1 (555) 123-4567" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="cardNumber">Card Number</Label>
            <div className="relative">
              <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
              <CreditCard className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input id="expiry" placeholder="MM/YY" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="123" />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full"
          onClick={handleBooking}
          disabled={!dateRange.to || isProcessing || nights === 0}
        >
          {isProcessing ? (
            <>
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
              Processing...
            </>
          ) : (
            <>Reserve Now - ${totalCost.toFixed(2)}</>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookingSystem;
