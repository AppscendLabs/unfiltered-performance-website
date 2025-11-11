import React, { useState } from 'react';
import { 
  Package, Settings, Users, Mail, Plus, Edit, Trash2, 
  Upload, DollarSign, Eye, BarChart3, LogOut 
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { toast } from 'sonner@2.0.3';

// Mock data for demonstration
const mockPartnerProducts = [
  { id: 1, name: "High Flow Turbocharger", brand: "BorgWarner", cost: 2200, price: 2499.99, margin: 13.6 },
  { id: 2, name: "Performance Exhaust System", brand: "MBRP", cost: 750, price: 899.99, margin: 20.0 },
  { id: 3, name: "Cold Air Intake System", brand: "S&B Filters", cost: 380, price: 449.99, margin: 18.4 }
];

const mockShopInventory = [
  { id: 101, name: "Used Cummins 6.7L Engine Block", price: 3500.00, cost: 2800, quantity: 1, condition: "Rebuilt" },
  { id: 102, name: "Allison Transmission Rebuild Kit", price: 1250.00, cost: 900, quantity: 3, condition: "New" }
];

const mockInquiries = [
  { 
    id: 1, 
    name: "John Smith", 
    email: "john@example.com", 
    service: "Performance Tuning", 
    vehicle: "2020 Ram 2500 Cummins",
    date: "2024-01-15",
    status: "New"
  },
  { 
    id: 2, 
    name: "Mike Johnson", 
    email: "mike@example.com", 
    service: "Engine Rebuild", 
    vehicle: "2018 Silverado Duramax",
    date: "2024-01-14",
    status: "Contacted"
  }
];

export function AdminPanel() {
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    cost: '',
    condition: 'New',
    quantity: '1',
    category: '',
    image: null as File | null
  });

  const [partnerPricing, setPartnerPricing] = useState<Record<number, number>>({});

  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Adding new product:', newProduct);
    toast.success('Product added successfully!');
    
    // Reset form
    setNewProduct({
      name: '',
      description: '',
      price: '',
      cost: '',
      condition: 'New',
      quantity: '1',
      category: '',
      image: null
    });
  };

  const handlePriceUpdate = (productId: number, newPrice: number) => {
    setPartnerPricing(prev => ({ ...prev, [productId]: newPrice }));
    toast.success('Price updated successfully!');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setNewProduct(prev => ({ ...prev, image: file }));
      toast.success('Image selected');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-black text-white p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl">Admin Panel - Unfiltered Performance</h1>
          <Button variant="outline" size="sm" className="border-white text-white hover:bg-white hover:text-black">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="dashboard" className="space-y-8">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="partner-products" className="flex items-center gap-2">
              <DollarSign className="h-4 w-4" />
              Partner Products
            </TabsTrigger>
            <TabsTrigger value="inventory" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Shop Inventory
            </TabsTrigger>
            <TabsTrigger value="inquiries" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Inquiries
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total Revenue</p>
                      <p className="text-2xl">$45,230</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Active Products</p>
                      <p className="text-2xl">{mockPartnerProducts.length + mockShopInventory.length}</p>
                    </div>
                    <Package className="h-8 w-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">New Inquiries</p>
                      <p className="text-2xl">{mockInquiries.filter(i => i.status === 'New').length}</p>
                    </div>
                    <Mail className="h-8 w-8 text-red-500" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Avg Margin</p>
                      <p className="text-2xl">17.3%</p>
                    </div>
                    <BarChart3 className="h-8 w-8 text-purple-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span>New inquiry from John Smith</span>
                    <Badge variant="outline">2 hours ago</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span>Product price updated: High Flow Turbocharger</span>
                    <Badge variant="outline">4 hours ago</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                    <span>New shop inventory item added</span>
                    <Badge variant="outline">1 day ago</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="partner-products">
            <Card>
              <CardHeader>
                <CardTitle>Partner Product Pricing</CardTitle>
                <p className="text-gray-600">Manage pricing for products from partner companies</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockPartnerProducts.map((product) => (
                    <div key={product.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <h3 className="font-medium">{product.name}</h3>
                        <p className="text-sm text-gray-600">{product.brand}</p>
                        <p className="text-sm text-gray-500">Cost: ${product.cost}</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Current Price</p>
                          <p className="text-lg">${product.price}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-600">Margin</p>
                          <p className="text-lg text-green-600">{product.margin}%</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="New price"
                            className="w-24"
                            onBlur={(e) => {
                              const newPrice = parseFloat(e.target.value);
                              if (newPrice && newPrice > 0) {
                                handlePriceUpdate(product.id, newPrice);
                              }
                            }}
                          />
                          <Button size="sm" className="bg-red-600 hover:bg-red-700">
                            Update
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="inventory">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Add New Product */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Plus className="h-5 w-5" />
                    Add New Product
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleProductSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="productName">Product Name</Label>
                      <Input
                        id="productName"
                        value={newProduct.name}
                        onChange={(e) => setNewProduct(prev => ({ ...prev, name: e.target.value }))}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="productDescription">Description</Label>
                      <Textarea
                        id="productDescription"
                        value={newProduct.description}
                        onChange={(e) => setNewProduct(prev => ({ ...prev, description: e.target.value }))}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="productPrice">Selling Price</Label>
                        <Input
                          id="productPrice"
                          type="number"
                          step="0.01"
                          value={newProduct.price}
                          onChange={(e) => setNewProduct(prev => ({ ...prev, price: e.target.value }))}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="productCost">Cost</Label>
                        <Input
                          id="productCost"
                          type="number"
                          step="0.01"
                          value={newProduct.cost}
                          onChange={(e) => setNewProduct(prev => ({ ...prev, cost: e.target.value }))}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="productCondition">Condition</Label>
                        <select
                          id="productCondition"
                          value={newProduct.condition}
                          onChange={(e) => setNewProduct(prev => ({ ...prev, condition: e.target.value }))}
                          className="w-full p-2 border border-gray-300 rounded-md"
                        >
                          <option value="New">New</option>
                          <option value="Used">Used</option>
                          <option value="Rebuilt">Rebuilt</option>
                          <option value="Refurbished">Refurbished</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="productQuantity">Quantity</Label>
                        <Input
                          id="productQuantity"
                          type="number"
                          min="1"
                          value={newProduct.quantity}
                          onChange={(e) => setNewProduct(prev => ({ ...prev, quantity: e.target.value }))}
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="productCategory">Category</Label>
                      <Input
                        id="productCategory"
                        value={newProduct.category}
                        onChange={(e) => setNewProduct(prev => ({ ...prev, category: e.target.value }))}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="productImage">Product Image</Label>
                      <div className="flex items-center gap-2">
                        <Input
                          id="productImage"
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-red-50 file:text-red-600"
                        />
                        <Upload className="h-5 w-5 text-gray-400" />
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-red-600 hover:bg-red-700">
                      Add Product
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Current Inventory */}
              <Card>
                <CardHeader>
                  <CardTitle>Current Shop Inventory</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockShopInventory.map((item) => (
                      <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h3 className="font-medium">{item.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant={item.condition === 'New' ? 'default' : 'secondary'}>
                              {item.condition}
                            </Badge>
                            <span className="text-sm text-gray-600">Qty: {item.quantity}</span>
                          </div>
                          <p className="text-lg text-red-600 mt-1">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="inquiries">
            <Card>
              <CardHeader>
                <CardTitle>Customer Inquiries</CardTitle>
                <p className="text-gray-600">Manage service requests and customer communications</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockInquiries.map((inquiry) => (
                    <div key={inquiry.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium">{inquiry.name}</h3>
                        <Badge variant={inquiry.status === 'New' ? 'destructive' : 'secondary'}>
                          {inquiry.status}
                        </Badge>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div>
                          <p><strong>Email:</strong> {inquiry.email}</p>
                          <p><strong>Service:</strong> {inquiry.service}</p>
                        </div>
                        <div>
                          <p><strong>Vehicle:</strong> {inquiry.vehicle}</p>
                          <p><strong>Date:</strong> {inquiry.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-4">
                        <Button size="sm" className="bg-red-600 hover:bg-red-700">
                          <Mail className="h-4 w-4 mr-1" />
                          Reply
                        </Button>
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-1" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Business Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input id="businessName" defaultValue="Unfiltered Performance" />
                  </div>
                  <div>
                    <Label htmlFor="businessPhone">Phone</Label>
                    <Input id="businessPhone" defaultValue="(555) 123-4567" />
                  </div>
                  <div>
                    <Label htmlFor="businessEmail">Email</Label>
                    <Input id="businessEmail" type="email" defaultValue="info@unfilteredperformance.com" />
                  </div>
                  <div>
                    <Label htmlFor="businessAddress">Address</Label>
                    <Textarea id="businessAddress" defaultValue="123 Performance Drive&#10;Diesel City, DC 12345" />
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700">Save Changes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Email Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="adminEmail">Admin Email</Label>
                    <Input id="adminEmail" type="email" defaultValue="admin@unfilteredperformance.com" />
                    <p className="text-sm text-gray-600 mt-1">Inquiry notifications will be sent here</p>
                  </div>
                  <div>
                    <Label htmlFor="autoReply">Auto-Reply Message</Label>
                    <Textarea 
                      id="autoReply" 
                      defaultValue="Thank you for your inquiry! We've received your message and will respond within 24 hours."
                      rows={4}
                    />
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700">Update Email Settings</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}