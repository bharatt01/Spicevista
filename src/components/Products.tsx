import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import wholeSpicesImage from "@/assets/whole-spices.jpg";
import groundSpicesImage from "@/assets/ground-spices.jpg";
import spiceBlendsImage from "@/assets/spice-blends.jpg";

const productCategories = [
  {
    title: "Whole Spices",
    image: wholeSpicesImage,
    items: [
      "Cumin Seeds",
      "Coriander Seeds",
      "Black Pepper",
      "Cloves",
      "Green & Black Cardamom",
      "Cinnamon Sticks",
    ],
    description:
      "Carefully selected whole spices preserving natural oils and authentic flavors.",
  },
  {
    title: "Ground Spices",
    image: groundSpicesImage,
    items: [
      "Turmeric Powder",
      "Red Chilli Powder",
      "Coriander Powder",
      "Cumin Powder",
      "Black Pepper Powder",
      "Ginger Powder",
    ],
    description:
      "Freshly ground powders retaining maximum aroma, color, and potency.",
  },
  {
    title: "Premium Blends",
    image: spiceBlendsImage,
    items: [
      "Garam Masala",
      "Curry Powder",
      "Meat Masala",
      "Chaat Masala",
      "Tandoori Masala",
      "Custom Blends",
    ],
    description:
      "Traditional recipes perfected over generations for authentic Indian flavors.",
  },
];

const specialtyItems = [
  "Kashmir Saffron",
  "Asafoetida (Hing)",
  "Dried Bay Leaves",
  "Fenugreek Seeds",
  "Mustard Seeds",
  "Fennel Seeds",
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <section id="products" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A Carefully Curated Collection of India's Finest Spices
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {productCategories.map((category, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-elegant transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-bold text-foreground mb-3">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {category.description}
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  {category.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-foreground flex items-start"
                    >
                      <span className="text-primary mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        {/* 🔹 View All Button (added below product cards) */}
        <div className="text-center mb-16">
          <Button
            onClick={() => navigate("/products")}
            className="px-8 py-3 text-lg bg-primary text-white hover:bg-primary/90 rounded-full shadow-md transition-all duration-300"
          >
            View All
          </Button>
        </div>

        <Card className="p-8 bg-card border-primary/20">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1">
              <h3 className="font-playfair text-2xl font-bold text-foreground mb-3">
                Specialty Exports
              </h3>
              <p className="text-muted-foreground mb-4">
                Premium specialty items sourced from specific regions known for
                exceptional quality
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {specialtyItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <span className="text-accent">✦</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-primary/10 rounded-lg p-6 border-2 border-primary/20">
              <p className="font-semibold text-foreground mb-2">
                Custom Solutions Available
              </p>
              <p className="text-sm text-muted-foreground">
                • Custom blends for your brand
                <br />
                • Private label packaging
                <br />• Flexible order quantities
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Products;
