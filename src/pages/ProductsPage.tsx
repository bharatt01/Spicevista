import { FC, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react"; // add at the top near other imports

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Product list (images optional)
const products = [
  { name: "Turmeric Powder (Haldi)", image: "", description: "Bright golden spice known for its earthy flavor and health benefits." },
  { name: "Cumin Seeds (Jeera)", image: "", description: "Aromatic spice with a warm, nutty flavor used in Indian curries and snacks." },
  { name: "Coriander Powder (Dhaniya)", image: "", description: "Mild, citrusy spice that adds depth to both vegetarian and non-veg dishes." },
  { name: "Red Chili Powder (Lal Mirch)", image: "", description: "Adds rich color and fiery heat to all kinds of Indian recipes." },
  { name: "Garam Masala", image: "", description: "A flavorful blend of ground spices that enhances every Indian curry." },
  { name: "Cardamom (Elaichi)", image: "", description: "Sweet and aromatic pods used in desserts, teas, and spice blends." },
  { name: "Cinnamon (Dalchini)", image: "", description: "Warm, woody spice used in both savory dishes and sweet treats." },
  { name: "Black Pepper (Kali Mirch)", image: "", description: "The 'King of Spices' with sharp, bold flavor and medicinal properties." },
  { name: "Cloves (Laung)", image: "", description: "Strong, aromatic spice that adds intensity to curries and biryanis." },
  { name: "Fennel Seeds (Saunf)", image: "", description: "Sweet, cooling spice used in cooking and as a mouth freshener." },
  { name: "Fenugreek Seeds (Methi)", image: "", description: "Slightly bitter spice used for pickles, curries, and digestion benefits." },
  { name: "Mustard Seeds (Sarson)", image: "", description: "Essential Indian spice that adds pungent aroma and tangy flavor." },
  { name: "Nutmeg (Jaiphal)", image: "", description: "A warm spice that adds depth to desserts, curries, and spice blends." },
  { name: "Saffron (Kesar)", image: "", description: "World’s most precious spice, known for its aroma, flavor, and golden hue." },
  { name: "Bay Leaf (Tej Patta)", image: "", description: "Fragrant leaf used in curries and rice dishes for rich aroma." },
];

const AllProductsPage: FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter products based on search term
  const filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <section className="py-20 px-6 md:px-16 bg-gradient-warm min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="font-playfair text-5xl font-bold text-foreground mb-4">
              All Our Masalas
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Explore the complete range of our authentic Indian spices — pure, aromatic, and packed with tradition.
            </p>

            {/* Search Bar */}
         {/* Elegant Search Bar */}
<div className="flex justify-center">
  <div className="relative w-full md:w-1/2">
    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
    <Input
      type="text"
      placeholder="Search for a spice (e.g., turmeric, cumin...)"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="pl-12 pr-4 py-3 w-full rounded-full border border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/30 transition-all duration-200 shadow-sm"
    />
  </div>
</div>

          </div>

          {/* Grid layout for products */}
          {filteredProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredProducts.map((item, index) => (
                <Card
                  key={index}
                  className="overflow-hidden transition-transform hover:scale-105 hover:shadow-xl duration-300 bg-card border-primary/20"
                >
                  {/* Image with fallback */}
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-56 w-full object-cover"
                    />
                  ) : (
                    <div className="h-56 w-full flex items-center justify-center bg-gradient-to-tr from-primary/10 to-accent/10 text-muted-foreground text-sm italic">
                      No image available
                    </div>
                  )}

                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-3 text-primary font-playfair">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground mb-5">
                      {item.description}
                    </p>
                    <Button className="w-full bg-primary text-white hover:bg-primary/90 transition-all">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <p className="text-center text-muted-foreground mt-10">
              No spices found matching "{searchTerm}".
            </p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AllProductsPage;
