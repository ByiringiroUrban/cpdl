
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useQuery } from '@tanstack/react-query';
import { fetchReports } from '@/services/reportsService';
import SectionTitle from '@/components/SectionTitle';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';

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

const ReportsSection: React.FC = () => {
  const { t } = useLanguage();
  
  // Fetch reports using React Query
  const { data: reports = [], isLoading, error } = useQuery({
    queryKey: ['reports'],
    queryFn: fetchReports
  });

  return (
    <section id="reports" className="section-padding bg-gray-50">
      <div className="container-custom">
        <SectionTitle title={t('reports.title')} />
        
        {isLoading ? (
          <div className="text-center py-4">Chargement des rapports...</div>
        ) : error ? (
          <div className="text-center text-red-500 py-4">
            <p>Erreur lors du chargement des rapports.</p>
          </div>
        ) : reports.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-gray-600 italic">{t('reports.note')}</p>
            <p className="mt-4 text-gray-700">Aucun rapport disponible pour le moment.</p>
          </div>
        ) : (
          <motion.div 
            className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {reports.map((report) => (
              <motion.div key={report._id} variants={itemVariants}>
                <Card className="h-full flex flex-col">
                  <CardHeader>
                    <CardTitle className="text-lg">{report.title}</CardTitle>
                    <CardDescription>{new Date(report.createdAt).toLocaleDateString('fr-FR')}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-gray-600 line-clamp-3">{report.content}</p>
                  </CardContent>
                  <CardFooter className="border-t pt-4">
                    <Button variant="outline" size="sm" className="w-full">
                      <FileText className="mr-2 h-4 w-4" />
                      Voir le rapport
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ReportsSection;
