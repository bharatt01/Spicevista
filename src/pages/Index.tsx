import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Products from "@/components/Products";
import Quality from "@/components/Quality";
import GlobalReach from "@/components/GlobalReach";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Highlights />
      <About />
      <Products />
      <Quality />
      <GlobalReach />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
