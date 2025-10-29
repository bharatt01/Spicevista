import spiceMarketImage from "@/assets/spice-market.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <img
              src={spiceMarketImage}
              alt="Traditional Delhi spice market"
              className="rounded-lg shadow-warm w-full object-cover h-[500px]"
            />
          </div>

          <div className="animate-fade-in-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Story
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                SpiceVista Exports began its journey over 30 years ago in the heart
                of Delhi, where the air is fragrant with the aroma of centuries-old
                spice traditions. What started as a humble venture in Delhi's local
                spice trade has blossomed into a globally recognized name.
              </p>
              
              <p>
                Our founders' deep knowledge of sourcing, blending, and grading
                authentic Indian spices, combined with decades of hands-on
                experience in Delhi's legendary markets like Khari Baoli, has
                positioned us uniquely in the industry.
              </p>
              
              <p>
                Today, we've evolved from serving local markets to exporting India's
                finest spices to discerning customers across Europe, the USA, and
                the Middle East. Our journey reflects our commitment to preserving
                authenticity while embracing global quality standards.
              </p>
              
              <div className="border-l-4 border-primary pl-6 py-4 my-6 bg-muted/50 rounded-r-lg">
                <p className="font-playfair text-xl italic text-foreground">
                  "For us, every spice tells a story — of soil, sun, and centuries
                  of Indian tradition."
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Our Values</h4>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Quality</li>
                    <li>✓ Authenticity</li>
                    <li>✓ Integrity</li>
                    <li>✓ Customer Satisfaction</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Our Mission</h4>
                  <p className="text-sm">
                    To share India's authentic spice heritage with the world while
                    maintaining the highest standards of quality and service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
