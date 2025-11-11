import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    service: '',
    message: '',
    urgency: 'normal'
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock form submission - in real implementation, this would send emails
    console.log('Form submitted:', formData);
    
    toast.success('Inquiry submitted successfully! We\'ll contact you within 24 hours.');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      vehicle: '',
      service: '',
      message: '',
      urgency: 'normal'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl lg:text-4xl mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Ready to unleash your diesel's potential? Get in touch with our experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-red-500 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-red-500 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">info@unfilteredperformance.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-red-500 mt-1" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">
                      123 Performance Drive<br />
                      Diesel City, DC 12345
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-red-500 mt-1" />
                  <div>
                    <p className="font-medium">Hours</p>
                    <div className="text-gray-600 text-sm">
                      <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="mt-6 bg-red-50 border-red-200">
              <CardContent className="p-6">
                <h3 className="font-medium text-red-800 mb-2">Emergency Service</h3>
                <p className="text-sm text-red-700 mb-3">
                  Need roadside assistance or emergency repairs?
                </p>
                <p className="font-medium text-red-800">(555) 911-HELP</p>
              </CardContent>
            </Card>
          </div>

          {/* Inquiry Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Service Inquiry</CardTitle>
                <p className="text-gray-600">
                  Tell us about your project and we'll get back to you with a detailed quote.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <Label htmlFor="vehicle">Vehicle Info</Label>
                      <Input
                        id="vehicle"
                        name="vehicle"
                        type="text"
                        value={formData.vehicle}
                        onChange={handleInputChange}
                        placeholder="2020 Ram 2500 Cummins"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">Service Type</Label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="">Select a service...</option>
                      <option value="performance-tuning">Performance Tuning</option>
                      <option value="engine-rebuild">Engine Rebuild</option>
                      <option value="maintenance">Maintenance</option>
                      <option value="diagnosis">Diagnosis & Repair</option>
                      <option value="custom-build">Custom Build</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="urgency">Priority Level</Label>
                    <select
                      id="urgency"
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="normal">Normal (1-2 weeks)</option>
                      <option value="urgent">Urgent (3-5 days)</option>
                      <option value="emergency">Emergency (ASAP)</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your project, current issues, performance goals, or any specific requirements..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">
                      <strong>What happens next?</strong><br />
                      1. We'll review your inquiry and contact you within 24 hours<br />
                      2. Schedule a consultation to discuss your project in detail<br />
                      3. Provide a comprehensive quote with timeline<br />
                      4. Get your diesel running at peak performance!
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-red-600 hover:bg-red-700"
                    size="lg"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Submit Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map Section */}
        <section className="mt-12">
          <Card>
            <CardContent className="p-0">
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">123 Performance Drive, Diesel City, DC 12345</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}