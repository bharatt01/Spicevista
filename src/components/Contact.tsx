import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    country: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Business Inquiry from ${formData.name} - ${formData.company}`;
    const body = `Name: ${formData.name}
Company: ${formData.company}
Country: ${formData.country}
Email: ${formData.email}

Message:
${formData.message}`;

    window.location.href = `mailto:spicevistaexports@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    toast({
      title: "Opening email client...",
      description: "Your default email application will open with your message.",
    });
  };

  const handleWhatsApp = () => {
    const message = `Hello! I'm interested in SpiceVista Exports products.`;
    window.open(`https://wa.me/919899809777?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-4">
            Partner With Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's bring authentic Indian spices to your market
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
              Get in Touch
            </h3>
            
            <div className="space-y-6 mb-8">
              <Card className="p-6 hover:shadow-warm transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Address</h4>
                    <p className="text-muted-foreground">
                      142/17 Faridabad, Haryana (121002)
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-warm transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a
                      href="mailto:spicevistaexports@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      spicevistaexports@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover:shadow-warm transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone / WhatsApp</h4>
                    <a
                      href="tel:+919899809777"
                      className="text-muted-foreground hover:text-primary transition-colors block mb-2"
                    >
                      +91-9899809777
                    </a>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleWhatsApp}
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      Chat on WhatsApp
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <h4 className="font-semibold text-foreground mb-3">
                Why Choose SpiceVista?
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  Competitive pricing with no compromise on quality
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  Consistent year-round supply
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  Flexible packaging: retail & bulk
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  Private labeling for your brand
                </li>
              </ul>
            </Card>
          </div>

          <Card className="p-8">
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-6">
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="border-border"
                />
              </div>

              <div>
                <Input
                  placeholder="Company Name *"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  required
                  className="border-border"
                />
              </div>

              <div>
                <Input
                  placeholder="Country *"
                  value={formData.country}
                  onChange={(e) =>
                    setFormData({ ...formData, country: e.target.value })
                  }
                  required
                  className="border-border"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email Address *"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  required
                  className="border-border"
                />
              </div>

              <div>
                <Textarea
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={5}
                  className="border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-elegant"
                size="lg"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Enquiry
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
