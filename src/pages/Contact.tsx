
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <SectionTitle title={ "Contact Us"} />
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h3>
                <p className="text-gray-600 mb-8">
                  We're here to answer any questions you may have about our organization, 
                  services, or how you can contribute. Feel free to reach out to us using any 
                  of the methods below.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Mail className="text-primary" size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 font-medium">Email</h4>
                      <p className="text-gray-800">cpd.qcca@gmail.com</p>
                      <p className="text-gray-800">pionniersfr@yahoo.fr</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <Phone className="text-primary" size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 font-medium">Phone</h4>
                      <p className="text-gray-800">+1 438 866 1964</p>
                      <p className="text-gray-800">+1 418 780 7340</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                      <MapPin className="text-primary" size={22} />
                    </div>
                    <div>
                      <h4 className="text-sm text-gray-500 font-medium">Address</h4>
                      <p className="text-gray-800">1901 Avenue Mailloux, Suite 104</p>
                      <p className="text-gray-800">Québec, Québec, Canada, G1J 4Z6</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2730.642457319747!2d-71.23252852392754!3d46.830961971433686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb8964d85e15621%3A0xf57ac4841a9752af!2s1901%20Av.%20Mailloux%2C%20Qu%C3%A9bec%2C%20QC%20G1J%204Z6%2C%20Canada!5e0!3m2!1sen!2sus!4v1712514444071!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
                title="CPD Office Location"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
