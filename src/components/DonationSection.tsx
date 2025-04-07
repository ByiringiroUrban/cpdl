
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart } from 'lucide-react';

const DonationSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="donation" className="section-padding bg-accent/50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('donation.title')}</h2>
          <p className="text-gray-600">{t('donation.content')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[25, 50, 100].map((amount) => (
            <Card key={amount} className="border-2 hover:border-primary transition-colors">
              <CardHeader>
                <CardTitle className="text-center">${amount}</CardTitle>
                <CardDescription className="text-center">One-time donation</CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Heart className="mx-auto text-primary mb-4" size={32} />
                <p className="text-sm text-gray-600">
                  Your contribution helps us continue our mission
                </p>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button className="w-full">
                  {t('donation.button')}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            For custom amounts or recurring donations, please contact us directly.
          </p>
          <Button variant="outline">
            Contact for Custom Donation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;
