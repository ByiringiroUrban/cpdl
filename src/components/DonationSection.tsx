
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
  ShoppingBag,
  Clock,
  Briefcase,
  ShoppingCart,
  Shirt,
  Gift
} from 'lucide-react';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24
    }
  }
};

const DonationSection: React.FC = () => {
  const { t } = useLanguage();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [activeTab, setActiveTab] = useState("financial");
  const [selectedDonationType, setSelectedDonationType] = useState<string | null>(null);
  
  const handleDonationClick = (amount: number) => {
    setSelectedAmount(amount);
    setIsDialogOpen(true);
  };
  
  const handleOtherDonationClick = (type: string) => {
    setSelectedDonationType(type);
    setIsDialogOpen(true);
  };
  
  const handlePaymentSubmit = () => {
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsDialogOpen(false);
      
      // Show success message
      if (activeTab === "financial") {
        toast.success(`Merci pour votre don de ${selectedAmount}$!`, {
          description: "Votre généreuse contribution nous aide à poursuivre notre mission."
        });
      } else {
        toast.success(`Merci pour votre don de ${selectedDonationType}!`, {
          description: "Votre généreuse contribution nous aide à poursuivre notre mission."
        });
      }
      
      // Reset selection
      setSelectedAmount(null);
      setSelectedPaymentMethod("card");
      setSelectedDonationType(null);
    }, 2000);
  };
  
  const donationAmounts = [25, 50, 100];
  
  const paymentMethods = [
    { id: "card", name: "Carte de Crédit", description: "Payer avec Visa, Mastercard, ou American Express" },
    { id: "paypal", name: "PayPal", description: "Paiement rapide et sécurisé avec PayPal" },
    { id: "momo", name: "Mobile Money", description: "Payer via un transfert par Mobile Money" },
  ];

  const otherDonationTypes = [
    { id: "material", name: t('donation.material'), icon: <Gift className="h-8 w-8 text-primary mb-4" />, description: "Faites don de matériel dont vous n'avez plus besoin" },
    { id: "volunteer", name: t('donation.volunteer'), icon: <Clock className="h-8 w-8 text-primary mb-4" />, description: "Donnez de votre temps pour aider nos initiatives" },
    { id: "services", name: t('donation.services'), icon: <Briefcase className="h-8 w-8 text-primary mb-4" />, description: "Offrez vos compétences professionnelles" },
    { id: "food", name: t('donation.food'), icon: <ShoppingCart className="h-8 w-8 text-primary mb-4" />, description: "Contribuez avec des dons alimentaires" },
    { id: "clothes", name: t('donation.clothes'), icon: <Shirt className="h-8 w-8 text-primary mb-4" />, description: "Donnez des vêtements en bon état" },
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
            <TabsTrigger value="financial">Dons Financiers</TabsTrigger>
            <TabsTrigger value="other">{t('donation.other')}</TabsTrigger>
          </TabsList>
          
          <TabsContent value="financial">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {donationAmounts.map((amount) => (
                <motion.div key={amount} variants={itemVariants}>
                  <Card className="border-2 hover:border-primary transition-colors">
                    <CardHeader>
                      <CardTitle className="text-center">${amount}</CardTitle>
                      <CardDescription className="text-center">Don unique</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <Heart className="mx-auto text-primary mb-4" size={32} />
                      <p className="text-sm text-gray-600">
                        Votre contribution nous aide à poursuivre notre mission
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
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Pour des montants personnalisés ou des dons récurrents, veuillez nous contacter directement.
              </p>
              <Button 
                variant="outline"
                onClick={() => handleDonationClick(0)}
              >
                Don Personnalisé
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="other">
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {otherDonationTypes.map((type) => (
                <motion.div key={type.id} variants={itemVariants}>
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
                        En savoir plus
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
                ? "Sélectionnez votre méthode de paiement" 
                : `Faire un don de ${selectedDonationType}`}
            </DialogTitle>
            <DialogDescription>
              {activeTab === "financial" 
                ? `Choisissez votre méthode de paiement préférée pour compléter votre don${selectedAmount ? ` de $${selectedAmount}` : ''}.` 
                : "Veuillez remplir le formulaire ci-dessous pour nous indiquer votre intention de don."}
            </DialogDescription>
          </DialogHeader>
          
          {activeTab === "financial" && (
            <>
              {selectedAmount === 0 && (
                <div className="mb-4">
                  <Label htmlFor="custom-amount">Montant du don ($)</Label>
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
            </>
          )}
          
          {activeTab === "other" && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Nom</Label>
                <input
                  type="text"
                  id="name"
                  className="w-full py-2 px-3 border border-gray-300 rounded-md"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <input
                  type="email"
                  id="email"
                  className="w-full py-2 px-3 border border-gray-300 rounded-md"
                  placeholder="Votre email"
                />
              </div>
              <div>
                <Label htmlFor="details">Détails du don</Label>
                <textarea
                  id="details"
                  className="w-full py-2 px-3 border border-gray-300 rounded-md"
                  rows={3}
                  placeholder="Décrivez votre don (type, quantité, etc.)"
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
              Annuler
            </Button>
            <Button 
              onClick={handlePaymentSubmit}
              disabled={isProcessing || (activeTab === "financial" && (!selectedAmount || selectedAmount <= 0))}
              className="ml-2"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Traitement en cours
                </>
              ) : (
                <>
                  {activeTab === "financial" ? (
                    <>
                      <CreditCard className="mr-2 h-4 w-4" /> Payer Maintenant
                    </>
                  ) : (
                    <>
                      <Check className="mr-2 h-4 w-4" /> Soumettre
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
