import { Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ProductGrid } from "@/components/product-grid"

export default function ProductsPage() {
  return (
    <div className="container py-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">All Products</h1>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Sort By</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Newest</DropdownMenuItem>
              <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
              <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="lg:hidden">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Categories</h3>
                  <div className="space-y-3">
                    {["Prayer Rugs", "Books", "Clothing", "Accessories"].map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={category} />
                        <Label htmlFor={category}>{category}</Label>
                      </div>
                    ))}
                  </div>
                </div>
                <Separator />
                <div>
                  <h3 className="text-lg font-semibold mb-4">Price Range</h3>
                  <div className="space-y-3">
                    {["Under $25", "$25 - $50", "$50 - $100", "Over $100"].map((range) => (
                      <div key={range} className="flex items-center space-x-2">
                        <Checkbox id={range} />
                        <Label htmlFor={range}>{range}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <div className="flex gap-8 mt-8">
        {/* Desktop Filters */}
        <div className="hidden lg:block w-[250px] space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <div className="space-y-3">
              {["Prayer Rugs", "Books", "Clothing", "Accessories"].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox id={`desktop-${category}`} />
                  <Label htmlFor={`desktop-${category}`}>{category}</Label>
                </div>
              ))}
            </div>
          </div>
          <Separator />
          <div>
            <h3 className="text-lg font-semibold mb-4">Price Range</h3>
            <div className="space-y-3">
              {["Under $25", "$25 - $50", "$50 - $100", "Over $100"].map((range) => (
                <div key={range} className="flex items-center space-x-2">
                  <Checkbox id={`desktop-${range}`} />
                  <Label htmlFor={`desktop-${range}`}>{range}</Label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <ProductGrid />
      </div>
    </div>
  )
}

