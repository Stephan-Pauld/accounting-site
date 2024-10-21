import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import config from '@/lib/config';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#F1F1F1]">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#1D3557]">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <Input type="text" id="name" name="name" required />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <Input type="email" id="email" name="email" required />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone
                    </label>
                    <Input type="tel" id="phone" name="phone" required />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Service Interested In
                    </label>
                    <Select name="service">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tax-planning">Tax Planning</SelectItem>
                        <SelectItem value="bookkeeping">Bookkeeping</SelectItem>
                        <SelectItem value="auditing">Auditing</SelectItem>
                        <SelectItem value="consulting">Business Consulting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <Textarea id="message" name="message" rows={4} required />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#1D3557] text-white hover:bg-[#2A4A73]"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div>
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-[#F4A261]" />
                    <span>{config.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-[#F4A261]" />
                    <span>{config.email}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-[#F4A261]" />
                    <span>{config.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-[#F4A261]" />
                    <span>{config.businessHours}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map Integration */}
            <Card>
              <CardHeader>
                <CardTitle>Our Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-w-16 aspect-h-9">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2580.1473058091283!2d-112.78779782320511!3d49.70802844054076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x536e871b56548417%3A0x1e722bfd235cc881!2sASW%20Accounting%20Inc.!5e0!3m2!1sen!2sca!4v1703179985804!5m2!1sen!2sca"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    loading="lazy"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call-to-Action */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#1D3557]">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="mb-8">
            Schedule a free consultation to discuss how we can assist with your
            financial needs.
          </p>
          <Button className="bg-[#F4A261] text-[#1D3557] hover:bg-[#E76F51] text-lg py-6 px-8">
            Book a Free Consultation
          </Button>
        </div>
      </div>
    </div>
  );
}