
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
import { PlusCircle, FileText, Upload, Calendar, Activity, DollarSign, Users, AlertTriangle, FileUp, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { fetchReports, createReport, deleteReport, Report } from '@/services/reportsService';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { fetchStats, fetchDonations, incrementVisitor } from '@/services/donationsService';

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

const Dashboard: React.FC = () => {
  const { t } = useLanguage();
  const [isAddReportOpen, setIsAddReportOpen] = useState(false);
  const [newReport, setNewReport] = useState({ title: '', content: '' });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const queryClient = useQueryClient();
  
  const { data: reports = [], isLoading: reportsLoading, error: reportsError } = useQuery({
    queryKey: ['reports'],
    queryFn: fetchReports
  });
  
  const { data: stats, isLoading: statsLoading } = useQuery({
    queryKey: ['stats'],
    queryFn: fetchStats
  });

  const { data: donations = [], isLoading: donationsLoading } = useQuery({
    queryKey: ['donations'],
    queryFn: fetchDonations
  });

  // Increment visitor count on dashboard visit
  React.useEffect(() => {
    incrementVisitor().catch(console.error);
  }, []);

  const createReportMutation = useMutation({
    mutationFn: createReport,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reports'] });
      setNewReport({ title: '', content: '' });
      setSelectedFile(null);
      setIsAddReportOpen(false);
      toast.success("Rapport ajouté avec succès!");
    },
    onError: (error) => {
      console.error('Error creating report:', error);
      toast.error("Erreur lors de l'ajout du rapport");
    }
  });

  const deleteReportMutation = useMutation({
    mutationFn: deleteReport,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['reports'] });
      toast.success("Rapport supprimé avec succès!");
    },
    onError: (error) => {
      console.error('Error deleting report:', error);
      toast.error("Erreur lors de la suppression du rapport");
    }
  });

  const handleDeleteReport = (reportId: string) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce rapport ?")) {
      deleteReportMutation.mutate(reportId);
    }
  };

  const handleAddReport = () => {
    if (newReport.title.trim() === '') {
      toast.error("Veuillez entrer un titre pour le rapport");
      return;
    }
    
    const formData = new FormData();
    formData.append('title', newReport.title);
    formData.append('content', newReport.content);
    if (selectedFile) {
      formData.append('file', selectedFile);
    }
    
    createReportMutation.mutate(formData);
  };

  // Prepare donation chart data from real donations
  const donationChartData = React.useMemo(() => {
    if (!donations.length) return [];
    
    const monthlyData: { [key: string]: number } = {};
    const months = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
    
    donations.forEach(donation => {
      if (donation.type === 'financial' && donation.amount) {
        const date = new Date(donation.createdAt);
        const monthKey = months[date.getMonth()];
        monthlyData[monthKey] = (monthlyData[monthKey] || 0) + donation.amount;
      }
    });
    
    return months.map(month => ({
      name: month,
      amount: monthlyData[month] || 0
    }));
  }, [donations]);

  // Generate recent activity from real data
  const recentActivity = React.useMemo(() => {
    const activities = [];
    
    // Add recent reports
    reports.slice(0, 3).forEach(report => {
      activities.push({
        id: `report-${report._id}`,
        action: `Rapport "${report.title}" ajouté`,
        date: new Date(report.createdAt).toLocaleDateString('fr-FR')
      });
    });
    
    // Add recent donations
    donations.slice(0, 3).forEach(donation => {
      const amount = donation.type === 'financial' ? ` de ${donation.amount}$` : '';
      activities.push({
        id: `donation-${donation._id}`,
        action: `Don${amount} reçu de ${donation.donorName}`,
        date: new Date(donation.createdAt).toLocaleDateString('fr-FR')
      });
    });
    
    // Sort by date (most recent first) and take only 4 items
    return activities
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 4);
  }, [reports, donations]);

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
                  <div className="text-2xl font-bold">
                    {reportsLoading ? '...' : reports.length}
                  </div>
                  <p className="text-xs text-muted-foreground">Mis à jour en temps réel</p>
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
                  <div className="text-2xl font-bold">
                    {statsLoading ? '...' : `$${stats?.totalDonations || 0}`}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {statsLoading ? '...' : `${stats?.monthlyGrowth > 0 ? '+' : ''}${stats?.monthlyGrowth?.toFixed(1) || 0}% depuis le dernier mois`}
                  </p>
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
                  <div className="text-2xl font-bold">
                    {statsLoading ? '...' : stats?.visitors || 0}
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {statsLoading ? '...' : `${stats?.weeklyGrowth > 0 ? '+' : ''}${stats?.weeklyGrowth?.toFixed(1) || 0}% depuis la semaine dernière`}
                  </p>
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
                
                {reportsLoading ? (
                  <div className="text-center py-8">Chargement des rapports...</div>
                ) : reportsError ? (
                  <div className="text-center py-8 text-red-500">
                    Erreur lors du chargement des rapports. Veuillez réessayer plus tard.
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {reports.length === 0 ? (
                      <div className="col-span-2 text-center py-8 text-gray-500">
                        Aucun rapport disponible. Ajoutez votre premier rapport !
                      </div>
                    ) : (
                      reports.map((report) => (
                        <motion.div key={report._id} variants={itemVariants}>
                          <Card>
                            <CardHeader>
                              <div className="flex justify-between items-start">
                                <div className="flex-1">
                                  <CardTitle className="text-lg">{report.title}</CardTitle>
                                  <CardDescription>
                                    {new Date(report.createdAt).toLocaleDateString('fr-FR')}
                                  </CardDescription>
                                </div>
                                <Button 
                                  variant="ghost" 
                                  size="sm" 
                                  onClick={() => handleDeleteReport(report._id!)}
                                  disabled={deleteReportMutation.isPending}
                                  className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                >
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="text-sm text-gray-600 mb-3">{report.content}</p>
                              {report.fileUrl && (
                                <a
                                  href={`http://localhost:5000${report.fileUrl}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center text-sm text-primary hover:underline"
                                >
                                  <FileText className="mr-1 h-4 w-4" />
                                  {report.fileName}
                                </a>
                              )}
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))
                    )}
                  </div>
                )}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="donations">
              <Card>
                <CardHeader>
                  <CardTitle>Aperçu des Dons</CardTitle>
                  <CardDescription>
                    {donationsLoading ? 'Chargement...' : `Les dons reçus au cours des derniers mois (${donations.length} dons totaux)`}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {donationsLoading ? (
                    <div className="h-80 flex items-center justify-center">
                      <p>Chargement des données de dons...</p>
                    </div>
                  ) : (
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={donationChartData}
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
                  )}
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
                  {reportsLoading || donationsLoading ? (
                    <div className="text-center py-8">Chargement de l'activité récente...</div>
                  ) : (
                    <motion.div 
                      className="space-y-4"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      {recentActivity.length === 0 ? (
                        <div className="text-center py-8 text-gray-500">
                          Aucune activité récente disponible.
                        </div>
                      ) : (
                        recentActivity.map((activity, index) => (
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
                        ))
                      )}
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Dialog open={isAddReportOpen} onOpenChange={setIsAddReportOpen}>
        <DialogContent className="sm:max-w-[500px]">
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
              <Label htmlFor="content">{t('reports.form.description')}</Label>
              <Textarea 
                id="content" 
                value={newReport.content}
                onChange={(e) => setNewReport({...newReport, content: e.target.value})}
              />
            </div>

            <div>
              <Label htmlFor="file">Document (PDF, DOC, DOCX, TXT - max 10MB)</Label>
              <div className="mt-2">
                <Input
                  id="file"
                  type="file"
                  onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                  accept=".pdf,.doc,.docx,.txt"
                  className="cursor-pointer"
                />
              </div>
              {selectedFile && (
                <p className="text-sm text-muted-foreground mt-2">
                  Fichier sélectionné: {selectedFile.name}
                </p>
              )}
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => {
              setIsAddReportOpen(false);
              setSelectedFile(null);
              setNewReport({ title: '', content: '' });
            }}>
              Annuler
            </Button>
            <Button 
              onClick={handleAddReport}
              disabled={createReportMutation.isPending}
            >
              {createReportMutation.isPending ? (
                <>
                  <FileUp className="mr-2 h-4 w-4 animate-bounce" />
                  Envoi en cours...
                </>
              ) : (
                t('reports.form.submit')
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
