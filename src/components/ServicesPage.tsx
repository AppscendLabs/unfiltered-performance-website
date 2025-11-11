import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, Settings, Shield, Users, Wrench, Gauge, 
  Truck, Award, CheckCircle, ArrowRight 
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    icon: Zap,
    title: "Performance Tuning",
    description: "Custom ECU tuning and performance modifications for maximum power and efficiency.",
    features: [
      "Custom ECU Programming",
      "Dyno Testing & Optimization",
      "Emissions Compliant Options",
      "Power & Torque Gains up to 30%"
    ],
    startingPrice: "$500"
  },
  {
    icon: Settings,
    title: "Engine Rebuild",
    description: "Complete engine rebuilds and overhauls with precision and quality craftsmanship.",
    features: [
      "Complete Teardown & Inspection",
      "OEM & Performance Parts",
      "Precision Machine Work",
      "Extended Warranty Coverage"
    ],
    startingPrice: "$8,500"
  },
  {
    icon: Shield,
    title: "Preventive Maintenance",
    description: "Regular maintenance services to keep your diesel running at peak performance.",
    features: [
      "Oil & Filter Changes",
      "Fuel System Service",
      "Cooling System Maintenance",
      "Multi-Point Inspection"
    ],
    startingPrice: "$150"
  },
  {
    icon: Wrench,
    title: "Diagnosis & Repair",
    description: "Expert diagnosis and repair of diesel engine problems using latest diagnostic tools.",
    features: [
      "Advanced Computer Diagnostics",
      "Electrical System Troubleshooting",
      "Mechanical Problem Solving",
      "No-Fix, No-Pay Guarantee"
    ],
    startingPrice: "$125"
  },
  {
    icon: Gauge,
    title: "Performance Upgrades",
    description: "Comprehensive performance modifications for street and track applications.",
    features: [
      "Turbocharger Upgrades",
      "Exhaust System Installation",
      "Air Intake Modifications",
      "Suspension & Handling"
    ],
    startingPrice: "$1,200"
  },
  {
    icon: Truck,
    title: "Custom Builds",
    description: "Complete custom diesel builds tailored to your specific performance goals.",
    features: [
      "Project Consultation",
      "Custom Part Sourcing",
      "Complete Assembly",
      "Testing & Validation"
    ],
    startingPrice: "$15,000"
  }
];

const certifications = [
  "ASE Certified Technicians",
  "Cummins Authorized Service",
  "Duramax Specialist Certified",
  "Power Stroke Expert Level",
  "Allison Transmission Certified"
];

export function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl mb-6">Professional Diesel Services</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              From routine maintenance to extreme performance builds, our certified technicians 
              deliver unmatched expertise and quality craftsmanship.
            </p>
            <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
              <Link to="/contact">
                Get a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive diesel services backed by years of experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="h-full">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="h-8 w-8 text-red-500" />
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                    <p className="text-gray-600">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Starting at</p>
                        <p className="text-2xl text-red-600">{service.startingPrice}</p>
                      </div>
                      <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              How we deliver exceptional results for every project
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-red-600">1</span>
              </div>
              <h3 className="text-xl mb-2">Consultation</h3>
              <p className="text-gray-600">We discuss your goals, budget, and timeline to create a custom plan.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-red-600">2</span>
              </div>
              <h3 className="text-xl mb-2">Diagnosis</h3>
              <p className="text-gray-600">Comprehensive inspection and testing to identify all issues and opportunities.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-red-600">3</span>
              </div>
              <h3 className="text-xl mb-2">Execution</h3>
              <p className="text-gray-600">Expert technicians perform the work using quality parts and proven procedures.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-red-600">4</span>
              </div>
              <h3 className="text-xl mb-2">Testing</h3>
              <p className="text-gray-600">Thorough testing and quality assurance before returning your vehicle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Expertise */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl mb-6">Certified Expertise</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our team holds industry-leading certifications and stays current with 
                the latest diesel technology advances. We invest in continuous training 
                and state-of-the-art equipment to deliver superior results.
              </p>
              
              <div className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Award className="h-5 w-5 text-red-500" />
                    <span>{cert}</span>
                  </div>
                ))}
              </div>

              <Button asChild className="mt-6 bg-red-600 hover:bg-red-700">
                <Link to="/contact">
                  Schedule Service
                </Link>
              </Button>
            </div>
            <div>
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1675034743126-0f250a5fee51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cnVjayUyMHJlcGFpciUyMHNob3AlMjBnYXJhZ2V8ZW58MXx8fHwxNzU2NTY5OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional diesel service bay"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Warranty & Guarantee */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl mb-6">Our Guarantee</h2>
          <p className="text-xl text-gray-300 mb-8">
            We stand behind our work with comprehensive warranties and a commitment to your satisfaction.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <Shield className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Parts Warranty</h3>
              <p className="text-gray-300">Up to 3 years on parts depending on manufacturer</p>
            </div>
            <div>
              <Wrench className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Labor Warranty</h3>
              <p className="text-gray-300">12 months on all labor and workmanship</p>
            </div>
            <div>
              <Users className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl mb-2">Satisfaction</h3>
              <p className="text-gray-300">100% satisfaction guarantee or we make it right</p>
            </div>
          </div>

          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
            <Link to="/contact">
              Get Your Quote Today
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}