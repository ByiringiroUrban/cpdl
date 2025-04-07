
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import SectionTitle from '@/components/SectionTitle';
import ContactInfo from '@/components/ContactInfo';
import TeamMember from '@/components/TeamMember';
import AchievementCard from '@/components/AchievementCard';
import DonationSection from '@/components/DonationSection';

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Presentation Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle title={t('presentation.title')} />
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 mb-6">{t('presentation.content')}</p>
              <p className="text-gray-700 font-medium text-center">{t('presentation.motto')}</p>
            </div>
          </div>
        </section>
        
        {/* Objectives Section */}
        <section id="objectives" className="section-padding bg-gray-50">
          <div className="container-custom">
            <SectionTitle title={t('objectives.title')} />
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 mb-6 font-medium">{t('objectives.intro')}</p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary-foreground font-bold text-xs">1</span>
                  </div>
                  <p className="text-gray-700">{t('objectives.1')}</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary-foreground font-bold text-xs">2</span>
                  </div>
                  <p className="text-gray-700">{t('objectives.2')}</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary-foreground font-bold text-xs">3</span>
                  </div>
                  <p className="text-gray-700">{t('objectives.3')}</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary-foreground font-bold text-xs">4</span>
                  </div>
                  <p className="text-gray-700">{t('objectives.4')}</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary-foreground font-bold text-xs">5</span>
                  </div>
                  <p className="text-gray-700">{t('objectives.5')}</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center mr-3 mt-1">
                    <span className="text-primary-foreground font-bold text-xs">6</span>
                  </div>
                  <p className="text-gray-700">{t('objectives.6')}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="section-padding bg-primary/5">
          <div className="container-custom">
            <SectionTitle title={t('mission.title')} />
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-gray-700 font-medium">{t('mission.content')}</p>
            </div>
          </div>
        </section>
        
        {/* Fields of Action Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle title={t('fields.title')} />
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-gray-700">{t('fields.content')}</p>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section id="team" className="section-padding bg-gray-50">
          <div className="container-custom">
            <SectionTitle title={t('team.title')} />
            <div className="max-w-md mx-auto">
              <TeamMember 
                name="Jacques Ntibarikure" 
                role="General Coordinator" 
                imageUrl="https://static.wixstatic.com/media/88ee31_4ea2559eb96746cf89e185bd34328b93~mv2.jpg/v1/crop/x_0,y_12,w_1168,h_1179/fill/w_624,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Jacques-Site-Web_edited.jpg" 
              />
            </div>
          </div>
        </section>
        
        {/* Achievements Section */}
        <section id="achievements" className="section-padding bg-white">
          <div className="container-custom">
            <SectionTitle title={t('achievements.title')} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AchievementCard text={t('achievements.1')} index={1} />
              <AchievementCard text={t('achievements.2')} index={2} />
              <AchievementCard text={t('achievements.3')} index={3} />
              <AchievementCard text={t('achievements.4')} index={4} />
              <AchievementCard text={t('achievements.5')} index={5} />
              <AchievementCard text={t('achievements.6')} index={6} />
              <AchievementCard text={t('achievements.7')} index={7} />
            </div>
          </div>
        </section>
        
        {/* Information Sections */}
        <section id="information" className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <SectionTitle title={t('seniors.title')} />
                <p className="text-gray-700 mb-8">{t('seniors.content')}</p>
                
                <SectionTitle title={t('peace.title')} />
                <p className="text-gray-700 mb-8">{t('peace.content')}</p>
              </div>
              
              <div>
                <SectionTitle title={t('training.title')} />
                <p className="text-gray-700 mb-8">{t('training.content')}</p>
                
                <SectionTitle title={t('youth.title')} />
                <p className="text-gray-700 mb-8">{t('youth.content')}</p>
                
                <SectionTitle title={t('volunteer.title')} />
                <p className="text-gray-700 mb-8">{t('volunteer.content')}</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact and News Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <ContactInfo />
              
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">
                  {t('news.title')}
                </h3>
                <p className="text-gray-700">{t('news.content')}</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Reports Section */}
        <section id="reports" className="section-padding bg-gray-50">
          <div className="container-custom">
            <SectionTitle title={t('reports.title')} />
            <p className="text-center text-gray-600 italic">{t('reports.note')}</p>
            <div className="mt-8 text-center">
              <p className="text-gray-700">Reports and publications will be available soon.</p>
            </div>
          </div>
        </section>
        
        {/* Donation Section */}
        <DonationSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
