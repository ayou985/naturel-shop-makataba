import { ShoppingCart } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage({ params }: { params: { id: string } }) {
  // In a real app, fetch product data based on params.id
  const product = {
    id: params.id,
    name: "Premium Prayer Rug",
    price: 49.99,
    description: "High-quality prayer rug made from premium materials.",
    features: [
      "Soft and comfortable material",
      "Non-slip backing",
      "Portable and lightweight",
      "Beautiful Islamic design",
    ],
    specifications: {
      Material: "Premium Velvet",
      Dimensions: "70cm x 110cm",
      Weight: "1.2kg",
      Origin: "Turkey",
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
  }

  return (
    <div className="container py-8">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative rounded-lg overflow-hidden">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {product.images.slice(1).map((image, index) => (
              <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-bold mt-2">${product.price}</p>
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="space-y-4">
            <h3 className="font-semibold">Key Features:</h3>
            <ul className="list-disc list-inside space-y-2">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <Button size="lg" className="w-full">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>

          <Tabs defaultValue="description" className="mt-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
            </TabsList>
            <TabsContent value="description">
              <Card>
                <CardHeader>
                  <CardTitle>Product Description</CardTitle>
                  <CardDescription>Detailed information about the product</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    This premium prayer rug is designed to provide comfort and beauty during your daily prayers. Crafted
                    with attention to detail, it features a non-slip backing and portable design, making it perfect for
                    both home and travel use.
                  </p>
                  <p>
                    The intricate Islamic patterns are woven with care, creating a beautiful and meaningful prayer space
                    wherever you are.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="specifications">
              <Card>
                <CardHeader>
                  <CardTitle>Product Specifications</CardTitle>
                  <CardDescription>Technical details and dimensions</CardDescription>
                </CardHeader>
                <CardContent>
                  <dl className="grid grid-cols-1 gap-4 text-sm">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="grid grid-cols-2">
                        <dt className="font-semibold">{key}</dt>
                        <dd>{value}</dd>
                      </div>
                    ))}
                  </dl>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

