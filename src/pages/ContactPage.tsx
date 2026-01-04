import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import spicesBg from "@/assets/spice-market.jpg";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const contactDetails = [
    { icon: Phone, title: "Phone", text: "+91 9899809777" },
    { icon: Mail, title: "Email", text: "spicevistaexports@gmail.com" },
    { icon: MapPin, title: "Address", text: "142/17 Faridabad, Haryana (121002)" },
    { icon: Clock, title: "Business Hours", text: "Mon – Sat: 9:00 AM – 6:00 PM" },
  ];

  return (
    <>
    <Header />
    <main className="overflow-hidden">
      {/* ---------- HERO SECTION ---------- */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        <img
          src={spicesBg}
          alt="Spices background"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 px-6"
        >
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-4">
            Get in Touch
          </h1>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Have a query, a business proposal, or want to source authentic Indian spices?
            We’d love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* ---------- CONTACT INFO ---------- */}
      <section className="py-24 bg-gradient-to-b from-[#FFF8F2] to-[#FFECD1]">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-playfair text-4xl font-bold text-[#B85C38] mb-10"
          >
            Connect with SpiceVista
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {contactDetails.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-8"
              >
                <div className="mx-auto mb-4 w-14 h-14 rounded-full bg-[#B85C38]/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-[#B85C38]" />
                </div>
                <h3 className="font-semibold text-lg mb-1 text-[#B85C38]">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CONTACT FORM ---------- */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#FFF8F2] rounded-2xl shadow-lg p-10"
          >
            <h2 className="font-playfair text-3xl font-bold text-[#B85C38] mb-6 text-center">
              Send Us a Message
            </h2>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-6 text-left"
            >
              <div>
                <label className="block mb-2 font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B85C38]/50 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B85C38]/50 outline-none"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Type your message..."
                  rows={5}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B85C38]/50 outline-none"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#B85C38] hover:bg-[#A74A2E] text-white px-8 py-3 rounded-full font-semibold shadow-md transition-all"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* ---------- MAP ---------- */}
      <section className="h-[450px] relative">
        <iframe
          title="SpiceVista Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.342333337429!2d77.21672197449886!3d28.656686375669643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd27dbd58d19%3A0x1234567890abcdef!2sKhari%20Baoli%20Spice%20Market%2C%20Delhi!5e0!3m2!1sen!2sin!4v1699912362448!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
        <div className="absolute inset-0 bg-[#B85C38]/10 pointer-events-none"></div>
      </section>
    </main>
    <Footer />
    </>
  );
};

export default ContactPage;
