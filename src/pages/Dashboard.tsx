
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PlusCircle, FileText, Upload, Calendar, Activity, DollarSign, Users } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

// Sample data for the dashboard
const recentActivity = [
  { id: 1, action: "Rapport annuel 2024 ajouté", date: "2024-04-15" },
  { id: 2, action: "Don de 500$ reçu", date: "2024-04-12" },
  { id: 3, action: "Mise à jour du profil de l'organisation", date: "2024-04-10" },
  { id: 4, action: "Nouveau partenariat ajouté", date: "2024-04-05" },
];

const donationData = [
  { name: 'Jan', amount: 1200 },
  { name: 'Fév', amount: 1900 },
  { name: 'Mar', amount: 800 },
  { name: 'Avr', amount: 1600 },
  { name: 'Mai', amount: 2100 },
  { name: 'Juin', amount: 1800 },
];

// Container animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Item animation variants
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

const Dashboard: React.FC = () => {
  const { t } = useLanguage();
  const [isAddReportOpen, setIsAddReportOpen] = useState(false);
  const [reports, setReports] = useState<Array<{ title: string; description: string; date: string }>>([
    { title: "Rapport Annuel 2023", description: "Rapport des activités annuelles de la CPD", date: "2023-12-15" },
    { title: "Bulletin Trimestriel Q1 2024", description: "Mise à jour des activités pour le premier trimestre", date: "2024-03-30" },
  ]);
  
  // Form state
  const [newReport, setNewReport] = useState({ title: '', description: '', file: null as File | null });
  
  const handleAddReport = () => {
    if (newReport.title.trim() === '') {
      toast.error("Veuillez entrer un titre pour le rapport");
      return;
    }
    
    const today = new Date().toISOString().split('T')[0];
    
    setReports([...reports, { 
      title: newReport.title, 
      description: newReport.description,
      date: today
    }]);
    
    setNewReport({ title: '', description: '', file: null });
    setIsAddReportOpen(false);
    
    toast.success("Rapport ajouté avec succès!");
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="container-custom">
          <SectionTitle 
            title={t('dashboard.title')} 
            center={false}
            className="mb-8"
          />
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Rapports Totaux</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{reports.length}</div>
                  <p className="text-xs text-muted-foreground">+2 ce mois</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Dons Totaux (CAD)</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$8,400</div>
                  <p className="text-xs text-muted-foreground">+18% depuis le dernier mois</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Visiteurs</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,234</div>
                  <p className="text-xs text-muted-foreground">+7% depuis la semaine dernière</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          
          <Tabs defaultValue="reports" className="mb-8">
            <TabsList className="mb-4">
              <TabsTrigger value="reports">{t('dashboard.reports')}</TabsTrigger>
              <TabsTrigger value="donations">{t('dashboard.donations')}</TabsTrigger>
              <TabsTrigger value="activity">{t('dashboard.activity')}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="reports">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium">Rapports et Publications</h3>
                  <Button onClick={() => setIsAddReportOpen(true)}>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    {t('reports.add')}
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {reports.map((report, index) => (
                    <motion.div key={index} variants={itemVariants}>
                      <Card>
                        <CardHeader>
                          <CardTitle>{report.title}</CardTitle>
                          <CardDescription>{report.date}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600">{report.description}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between">
                          <Button variant="outline" size="sm">
                            Voir
                          </Button>
                          <Button variant="outline" size="sm">
                            Télécharger
                          </Button>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
            
            <TabsContent value="donations">
              <Card>
                <CardHeader>
                  <CardTitle>Aperçu des Dons</CardTitle>
                  <CardDescription>Les dons reçus au cours des 6 derniers mois</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={donationData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="amount" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="activity">
              <Card>
                <CardHeader>
                  <CardTitle>Activité Récente</CardTitle>
                  <CardDescription>Dernières actions sur la plateforme</CardDescription>
                </CardHeader>
                <CardContent>
                  <motion.div 
                    className="space-y-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {recentActivity.map((activity, index) => (
                      <motion.div 
                        key={activity.id}
                        variants={itemVariants}
                        className="flex items-start space-x-4"
                      >
                        <div className="mt-1 bg-primary/10 p-2 rounded-full">
                          <Activity className="h-4 w-4 text-primary" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{activity.action}</p>
                          <p className="text-xs text-gray-500 flex items-center mt-1">
                            <Calendar className="h-3 w-3 mr-1" />
                            {activity.date}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      {/* Add Report Dialog */}
      <Dialog open={isAddReportOpen} onOpenChange={setIsAddReportOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t('reports.add')}</DialogTitle>
            <DialogDescription>
              Ajoutez un nouveau rapport ou une publication à la base de données.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">{t('reports.form.title')}</Label>
              <Input 
                id="title" 
                value={newReport.title}
                onChange={(e) => setNewReport({...newReport, title: e.target.value})}
              />
            </div>
            
            <div>
              <Label htmlFor="description">{t('reports.form.description')}</Label>
              <Textarea 
                id="description" 
                value={newReport.description}
                onChange={(e) => setNewReport({...newReport, description: e.target.value})}
              />
            </div>
            
            <div>
              <Label htmlFor="file">{t('reports.form.file')}</Label>
              <div className="mt-1 flex items-center">
                <label className="block w-full">
                  <div className="flex items-center justify-center px-6 py-4 border-2 border-dashed border-gray-300 rounded-md cursor-pointer hover:border-primary/50 transition-colors">
                    <Upload className="h-5 w-5 mr-2 text-gray-500" />
                    <span className="text-sm text-gray-500">
                      {newReport.file ? newReport.file.name : "Cliquez pour choisir un fichier"}
                    </span>
                  </div>
                  <input
                    id="file"
                    type="file"
                    className="sr-only"
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setNewReport({...newReport, file: e.target.files[0]});
                      }
                    }}
                  />
                </label>
              </div>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddReportOpen(false)}>
              Annuler
            </Button>
            <Button onClick={handleAddReport}>
              {t('reports.form.submit')}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
