import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Settings, Shield, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-black text-white">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1727413434026-0f8314c037d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWVzZWwlMjB0cnVjayUyMGVuZ2luZSUyMHBlcmZvcm1hbmNlfGVufDF8fHx8MTc1NjU2OTk4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Diesel truck engine performance"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl mb-6">
              <span className="text-red-500">UNFILTERED</span><br />
              PERFORMANCE
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-gray-300">
              Premium diesel truck repair and performance modifications. 
              Unleash your truck's true potential with our expert services and high-quality parts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link to="/contact">
                  Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white hover:bg-white hover:text-black">
                <Link to="/parts">
                  Shop Parts
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From routine maintenance to extreme performance builds, we've got your diesel covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Zap className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl mb-2">Performance Tuning</h3>
                <p className="text-gray-600">Custom ECU tuning and performance modifications for maximum power and efficiency.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Settings className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl mb-2">Engine Rebuild</h3>
                <p className="text-gray-600">Complete engine rebuilds and overhauls with precision and quality craftsmanship.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl mb-2">Maintenance</h3>
                <p className="text-gray-600">Regular maintenance services to keep your diesel running at peak performance.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Users className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="text-xl mb-2">Consultation</h3>
                <p className="text-gray-600">Expert advice on performance upgrades and maintenance schedules.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 lg:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl mb-6">Why Choose Unfiltered Performance?</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  With over 15 years of experience in diesel performance, we understand what it takes 
                  to get the most out of your truck. Our team of certified technicians specializes in 
                  the latest diesel technologies and performance modifications.
                </p>
                <p>
                  We partner with industry-leading brands to bring you the highest quality parts and 
                  components. Whether you're looking for more power, better fuel economy, or enhanced 
                  reliability, we have the expertise to make it happen.
                </p>
              </div>
              <Button asChild className="mt-6 bg-red-600 hover:bg-red-700">
                <Link to="/services">
                  Learn More About Our Services
                </Link>
              </Button>
            </div>
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1675034743126-0f250a5fee51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHJlcGFpciUyMHNob3AlMjBnYXJhZ2V8ZW58MXx8fHwxNzU2NTY5OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Truck repair shop garage"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">Ready to Unleash Your Truck's Potential?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Contact us today for a consultation and discover what Unfiltered Performance can do for your diesel.
          </p>
          <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
            <Link to="/contact">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}