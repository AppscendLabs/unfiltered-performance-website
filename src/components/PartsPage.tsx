import React, { useState } from 'react';
import { Search, Filter, Star, ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

// Mock data for partner products
const partnerProducts = [
  {
    id: 1,
    name: "High Flow Turbocharger",
    brand: "BorgWarner",
    price: 2499.99,
    originalPrice: 2799.99,
    category: "Turbochargers",
    image: "https://images.unsplash.com/photo-1727413434026-0f8314c037d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwcGFydHMlMjBkaWVzZWx8ZW58MXx8fHwxNzU2NTY5OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "High-performance turbocharger for increased power and efficiency",
    inStock: true,
    rating: 4.8
  },
  {
    id: 2,
    name: "Performance Exhaust System",
    brand: "MBRP",
    price: 899.99,
    originalPrice: 999.99,
    category: "Exhaust",
    image: "https://images.unsplash.com/photo-1727413434026-0f8314c037d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwcGFydHMlMjBkaWVzZWx8ZW58MXx8fHwxNzU2NTY5OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Complete cat-back exhaust system for improved flow and sound",
    inStock: true,
    rating: 4.6
  },
  {
    id: 3,
    name: "Cold Air Intake System",
    brand: "S&B Filters",
    price: 449.99,
    originalPrice: 499.99,
    category: "Air Intake",
    image: "https://images.unsplash.com/photo-1727413434026-0f8314c037d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwcGFydHMlMjBkaWVzZWx8ZW58MXx8fHwxNzU2NTY5OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "High-flow air intake system for better throttle response",
    inStock: false,
    rating: 4.7
  }
];

// Mock data for shop inventory
const shopInventory = [
  {
    id: 101,
    name: "Used Cummins 6.7L Engine Block",
    price: 3500.00,
    category: "Engine Components",
    image: "https://images.unsplash.com/photo-1727413434026-0f8314c037d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwcGFydHMlMjBkaWVzZWx8ZW58MXx8fHwxNzU2NTY5OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Rebuilt 6.7L Cummins engine block, fully tested and ready to install",
    condition: "Rebuilt",
    inStock: true
  },
  {
    id: 102,
    name: "Allison Transmission Rebuild Kit",
    price: 1250.00,
    category: "Transmission",
    image: "https://images.unsplash.com/photo-1727413434026-0f8314c037d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwcGFydHMlMjBkaWVzZWx8ZW58MXx8fHwxNzU2NTY5OTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Complete rebuild kit for Allison 1000 transmission",
    condition: "New",
    inStock: true
  }
];

export function PartsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Turbochargers', 'Exhaust', 'Air Intake', 'Engine Components', 'Transmission'];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl lg:text-4xl mb-4">Performance Parts</h1>
          <p className="text-xl text-gray-600">
            High-quality parts from trusted partners and our own inventory
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search parts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-red-600 hover:bg-red-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Partner Products Section */}
        <section className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl">Partner Products</h2>
            <Badge variant="secondary">Custom Pricing</Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden">
                <div className="relative">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <Badge variant="destructive">Out of Stock</Badge>
                    </div>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      <p className="text-sm text-gray-600">{product.brand}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm">{product.rating}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-2xl text-red-600">${product.price}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <Button 
                      disabled={!product.inStock}
                      className="bg-red-600 hover:bg-red-700 disabled:opacity-50"
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Shop Inventory Section */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <h2 className="text-2xl">Shop Inventory</h2>
            <Badge variant="outline">In-House Parts</Badge>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shopInventory.map((item) => (
              <Card key={item.id} className="overflow-hidden">
                <div className="relative">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-2 right-2" variant={item.condition === 'New' ? 'default' : 'secondary'}>
                    {item.condition}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <Badge variant="outline" className="w-fit">{item.category}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl text-red-600">${item.price.toFixed(2)}</span>
                    <Button className="bg-red-600 hover:bg-red-700">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact for Custom Parts */}
        <section className="mt-12 bg-black text-white rounded-lg p-8">
          <div className="text-center">
            <h3 className="text-2xl mb-4">Need Something Specific?</h3>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? We can source custom parts or create custom solutions for your diesel.
            </p>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Contact Us for Custom Parts
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}