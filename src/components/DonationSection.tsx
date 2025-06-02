
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Heart, 
  CreditCard, 
  Check, 
  Loader2, 
  Gift
} from 'lucide-react';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchStats, createDonation } from '@/services/donationsService';

const DonationSection: React.FC = () => {
  const { t } = useLanguage();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState("financial");
  const [selectedDonationType, setSelectedDonationType] = useState<string | null>(null);
  
  const queryClient = useQueryClient();
  
  const { data: stats } = useQuery({
    queryKey: ['stats'],
    queryFn: fetchStats
  });

  const createDonationMutation = useMutation({
    mutationFn: createDonation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['donations', 'stats'] });
      setIsDialogOpen(false);
      toast.success(t('donation.success'));
    }
  });
  
  const handleDonationClick = () => {
    setIsDialogOpen(true);
  };
  
  const handleOtherDonationClick = (type: string) => {
    setSelectedDonationType(type);
    setIsDialogOpen(true);
  };
  
  const handlePaymentSubmit = () => {
    setIsProcessing(true);
    
    const donationType: "financial" | "other" = activeTab === "financial" ? "financial" : "other";
    
    const donationData = {
      type: donationType,
      amount: activeTab === "financial" ? selectedAmount : undefined,
      donorName: (document.getElementById('name') as HTMLInputElement)?.value || 'Anonymous',
      description: (document.getElementById('details') as HTMLTextAreaElement)?.value,
      donationType: selectedDonationType
    };

    createDonationMutation.mutate(donationData);
    
    setTimeout(() => {
      setIsProcessing(false);
      setSelectedAmount(null);
      setSelectedPaymentMethod("card");
      setSelectedDonationType(null);
    }, 2000);
  };
  
  const paymentMethods = [
    { id: "card", name: t('donation.payment.card'), description: t('donation.payment.card.desc') },
    { id: "paypal", name: t('donation.payment.paypal'), description: t('donation.payment.paypal.desc') },
    { id: "momo", name: t('donation.payment.momo'), description: t('donation.payment.momo.desc') },
  ];

  const otherDonationTypes = [
    { id: "material", name: t('donation.material'), icon: <Gift className="h-8 w-8 text-primary mb-4" />, description: t('donation.material.desc') },
    { id: "volunteer", name: t('donation.volunteer'), icon: <Gift className="h-8 w-8 text-primary mb-4" />, description: t('donation.volunteer.desc') },
    { id: "services", name: t('donation.services'), icon: <Gift className="h-8 w-8 text-primary mb-4" />, description: t('donation.services.desc') },
    { id: "food", name: t('donation.food'), icon: <Gift className="h-8 w-8 text-primary mb-4" />, description: t('donation.food.desc') },
    { id: "clothes", name: t('donation.clothes'), icon: <Gift className="h-8 w-8 text-primary mb-4" />, description: t('donation.clothes.desc') },
  ];

  return (
    <section id="donation" className="section-padding bg-accent/50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {t('donation.title')}
          </motion.h2>
          <motion.p 
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {t('donation.content')}
          </motion.p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-2 mb-8">
            <TabsTrigger value="financial">{t('donation.financial')}</TabsTrigger>
            <TabsTrigger value="other">{t('donation.other')}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="financial">
            <div className="text-center mb-8">
              <p className="text-gray-600 mb-4">
                {t('donation.financial.subtitle')}
              </p>
              <Button 
                onClick={handleDonationClick}
                className="mx-auto"
              >
                <Heart className="mr-2 h-4 w-4" /> {t('donation.button')}
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="other">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {otherDonationTypes.map((type) => (
                <motion.div 
                  key={type.id} 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="border-2 hover:border-primary transition-colors">
                    <CardHeader>
                      <CardTitle className="text-center">{type.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      {type.icon}
                      <p className="text-sm text-gray-600">
                        {type.description}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-center">
                      <Button 
                        className="w-full"
                        onClick={() => handleOtherDonationClick(type.id)}
                      >
                        {t('donation.learn.more')}
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
      
      {/* Payment Method Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {activeTab === "financial" 
                ? t('donation.dialog.payment.title')
                : t('donation.dialog.other.title', { type: selectedDonationType })}
            </DialogTitle>
            <DialogDescription>
              {activeTab === "financial" 
                ? t('donation.dialog.payment.desc')
                : t('donation.dialog.other.desc')}
            </DialogDescription>
          </DialogHeader>
          
          {activeTab === "financial" && (
            <>
              <div className="mb-4">
                <Label htmlFor="custom-amount">{t('donation.amount.label')}</Label>
                <div className="relative mt-1">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">$</span>
                  </div>
                  <input
                    type="number"
                    name="custom-amount"
                    id="custom-amount"
                    className="w-full pl-7 pr-12 py-2 border border-gray-300 rounded-md"
                    placeholder={t('donation.amount.placeholder')}
                    min="1"
                    step="1"
                    onChange={(e) => setSelectedAmount(Number(e.target.value))}
                  />
                </div>
              </div>
              
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
            </>
          )}
          
          {activeTab === "other" && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">{t('contact.form.name')}</Label>
                <input
                  type="text"
                  id="name"
                  className="w-full py-2 px-3 border border-gray-300 rounded-md"
                  placeholder={t('donation.form.name.placeholder')}
                />
              </div>
              <div>
                <Label htmlFor="email">{t('contact.form.email')}</Label>
                <input
                  type="email"
                  id="email"
                  className="w-full py-2 px-3 border border-gray-300 rounded-md"
                  placeholder={t('donation.form.email.placeholder')}
                />
              </div>
              <div>
                <Label htmlFor="details">{t('donation.form.details')}</Label>
                <textarea
                  id="details"
                  className="w-full py-2 px-3 border border-gray-300 rounded-md"
                  rows={3}
                  placeholder={t('donation.form.details.placeholder')}
                ></textarea>
              </div>
            </div>
          )}
          
          <DialogFooter>
            <Button 
              variant="outline" 
              onClick={() => setIsDialogOpen(false)}
              disabled={isProcessing}
            >
              {t('common.cancel')}
            </Button>
            <Button 
              onClick={handlePaymentSubmit}
              disabled={isProcessing || (activeTab === "financial" && (!selectedAmount || selectedAmount <= 0))}
              className="ml-2"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> {t('common.processing')}
                </>
              ) : (
                <>
                  {activeTab === "financial" ? (
                    <>
                      <CreditCard className="mr-2 h-4 w-4" /> {t('donation.pay.now')}
                    </>
                  ) : (
                    <>
                      <Check className="mr-2 h-4 w-4" /> {t('common.submit')}
                    </>
                  )}
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
