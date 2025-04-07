
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle,
  DialogFooter
} from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Heart, CreditCard, Check, Loader2 } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const DonationSection: React.FC = () => {
  const { t } = useLanguage();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("card");
  const [isProcessing, setIsProcessing] = useState(false);
  
  const handleDonationClick = (amount: number) => {
    setSelectedAmount(amount);
    setIsDialogOpen(true);
  };
  
  const handlePaymentSubmit = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsDialogOpen(false);
      
      // Show success message
      toast.success(`Thank you for your $${selectedAmount} donation!`, {
        description: "Your generous contribution helps us continue our mission."
      });
      
      // Reset selection
      setSelectedAmount(null);
      setSelectedPaymentMethod("card");
    }, 2000);
  };
  
  const donationAmounts = [25, 50, 100];
  
  const paymentMethods = [
    { id: "card", name: "Credit Card", description: "Pay with Visa, Mastercard, or American Express" },
    { id: "paypal", name: "PayPal", description: "Fast and secure payment with PayPal" },
    { id: "momo", name: "Mobile Money", description: "Pay using Mobile Money transfer" },
  ];

  return (
    <section id="donation" className="section-padding bg-accent/50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t('donation.title')}</h2>
          <p className="text-gray-600">{t('donation.content')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {donationAmounts.map((amount) => (
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
                <Button 
                  className="w-full"
                  onClick={() => handleDonationClick(amount)}
                >
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
          <Button 
            variant="outline"
            onClick={() => handleDonationClick(0)}
          >
            Custom Donation
          </Button>
        </div>
      </div>
      
      {/* Payment Method Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Select Payment Method</DialogTitle>
            <DialogDescription>
              Choose your preferred payment method to complete your 
              {selectedAmount ? ` $${selectedAmount}` : ''} donation.
            </DialogDescription>
          </DialogHeader>
          
          {selectedAmount === 0 && (
            <div className="mb-4">
              <Label htmlFor="custom-amount">Enter Donation Amount ($)</Label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500 sm:text-sm">$</span>
                </div>
                <input
                  type="number"
                  name="custom-amount"
                  id="custom-amount"
                  className="w-full pl-7 pr-12 py-2 border border-gray-300 rounded-md"
                  placeholder="0.00"
                  min="1"
                  step="1"
                  onChange={(e) => setSelectedAmount(Number(e.target.value))}
                />
              </div>
            </div>
          )}
          
          <RadioGroup 
            defaultValue={selectedPaymentMethod} 
            onValueChange={setSelectedPaymentMethod}
            className="gap-4"
          >
            {paymentMethods.map((method) => (
              <div key={method.id} className="flex items-start space-x-3">
                <RadioGroupItem value={method.id} id={method.id} />
                <div className="grid gap-1.5">
                  <Label htmlFor={method.id} className="font-medium">{method.name}</Label>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </div>
              </div>
            ))}
          </RadioGroup>
          
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsDialogOpen(false)}
              disabled={isProcessing}
            >
              Cancel
            </Button>
            <Button 
              onClick={handlePaymentSubmit}
              disabled={isProcessing || !selectedAmount || selectedAmount <= 0}
              className="ml-2"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing
                </>
              ) : (
                <>
                  <CreditCard className="mr-2 h-4 w-4" /> Pay Now
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default DonationSection;
