import { ContactForm } from "@/components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero header with proper spacing for fixed navbar */}
      <div className="bg-black pt-28 sm:pt-32 md:pt-36 pb-16 sm:pb-20 text-white text-center">
        <div className="container mx-auto px-4 sm:px-6">
          <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl mb-4">CONTACT US</h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            Get in touch to discuss your project requirements or request our company profile.
          </p>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <span className="text-black font-bold uppercase tracking-widest text-sm mb-2 block">Get In Touch</span>
              <h2 className="font-heading font-black text-3xl text-black mb-8">HEAD OFFICE</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-black rounded flex items-center justify-center shrink-0">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black mb-1">Physical Address</h4>
                    <p className="text-gray-600">1855 Finca Street,<br />Phola, Mpumalanga,<br />South Africa</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-black rounded flex items-center justify-center shrink-0">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black mb-1">Phone</h4>
                    <p className="text-gray-600">+27 73 256 7948</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-black rounded flex items-center justify-center shrink-0">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black mb-1">Email</h4>
                    <p className="text-gray-600">info@siyaphusha.co.za</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-black rounded flex items-center justify-center shrink-0">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-black mb-1">Office Hours</h4>
                    <p className="text-gray-600">Mon - Fri: 08:00 - 17:00<br />Sat - Sun: Closed</p>
                  </div>
                </div>
              </div>

              {/* Embedded Map - Static Placeholder for Visual */}
              <div className="h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114584.75080886634!2d29.0!3d-26.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDAwJzAwLjAiUyAyOcKwMDAnMDAuMCJF!5e0!3m2!1sen!2sza!4v1625000000000!5m2!1sen!2sza" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  className="transition-all duration-500"
                ></iframe>
              </div>
            </div>

            <div>
               <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
