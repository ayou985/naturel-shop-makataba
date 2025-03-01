import { ProductCard } from "@/components/product-card"

export function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "Premium Prayer Rug",
      price: 49.99,
      image: "/placeholder.svg",
      category: "Prayer Rugs",
    },
    {
      id: 2,
      name: "Quran - English Translation",
      price: 24.99,
      image: "/placeholder.svg",
      category: "Books",
    },
    {
      id: 3,
      name: "Digital Quran Pen",
      price: 89.99,
      image: "/placeholder.svg",
      category: "Accessories",
    },
    // Add more products as needed
  ]

  return (
    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

