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
import Partners from '@/components/Partners';
import ReportsSection from './ReportsSection';
import { motion } from 'framer-motion';
import { Globe, Users, Book, ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { cn } from '@/lib/utils';

const Index = () => {
  const { t } = useLanguage();

  const teamMembers = [
    {
      name: "MONSIEUR JACQUES NTIBARIKURE",
      role: "Coordinateur Général",
      imageUrl: "https://static.wixstatic.com/media/88ee31_4ea2559eb96746cf89e185bd34328b93~mv2.jpg/v1/crop/x_0,y_12,w_1168,h_1179/fill/w_624,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Jacques-Site-Web_edited.jpg"
    },
    {
      name: "MADAME NANCY ROY",
      role: "Membre volontaire auprès des personnes âgées.",
      imageUrl: "https://static.wixstatic.com/media/88ee31_7f95537f2e394b0894de9c610f20b409~mv2.jpeg/v1/crop/x_0,y_107,w_976,h_867/fill/w_710,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image%20site%20cpd%20canda.jpeg"
    },
    {
      name: "MADAME GORETTE KONYOLA",
      role: "Membre volontaire",
      imageUrl: "https://static.wixstatic.com/media/88ee31_f794c2a47edb4d3fa546bffaf3cbaeeb~mv2.jpg/v1/fill/w_631,h_552,al_c,q_80,enc_avif,quality_auto/Goreth-site-Jacques_edited_edited.jpg"
    },
   
    {
      name: "MADAME DIANE GOSSAN",
      role: "Présidente du conseil d'administration",
      imageUrl: "https://static.wixstatic.com/media/88ee31_ef8f7c1434624f9e8713836c5a9ea10b~mv2.jpeg/v1/fill/w_720,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202020-07-16%20at%2011_13_47_jp.jpeg"
    },
    {
      name: "MONSIEUR PIERRE NIYONKURU",
      role: "Directeur Administratif et chargé de la communication",
      imageUrl: "https://static.wixstatic.com/media/88ee31_8be619dbbe20443e877b6907e7c496c7~mv2.jpeg/v1/crop/x_0,y_0,w_640,h_560/fill/w_734,h_639,al_c,lg_1,q_85,enc_avif,quality_auto/WhatsApp%20Image%202020-07-16%20at%2011_14_51_jp.jpeg"
    },
    {
      name: "MADAME ROSE CHOUNMELE",
      role: "Membre responsable de la pôle thématique d'Action sociale",
      imageUrl: "https://static.wixstatic.com/media/88ee31_ec91c9433a3748cd8460d1129b75d093~mv2.jpeg/v1/crop/x_0,y_160,w_1200,h_1050/fill/w_720,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Rose1.jpeg"
    },
    {
      name: "MONSIEUR ADOLPHE GATORE ND",
      role: "Membre responsable adjoint de la pôle thématique d'Action sociale",
      imageUrl: "https://static.wixstatic.com/media/88ee31_088b1c596ad749999deac6de2ad3a114~mv2.jpeg/v1/crop/x_0,y_275,w_1200,h_1050/fill/w_720,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Photo-Adolphe.jpeg"
    },
    {
      name: "MONSIEUR JEAN PIERRE NGANYIRA",
      role: "En charge  des projets et de la mobilisation des ressources",
      imageUrl: "https://static.wixstatic.com/media/88ee31_65560d2380ed4539a55fb3d2d983a61f~mv2.jpeg/v1/crop/x_0,y_90,w_720,h_630/fill/w_720,h_630,al_c,q_85,enc_avif,quality_auto/Jean-Pierre.jpeg"
    }, {
      name: "MADAME NANCY CÔTÉ",
      role: "Conseil d'administration",
      imageUrl: "https://static.wixstatic.com/media/88ee31_19cdb02a60b44a1689de0dace4542c14~mv2.jpeg/v1/crop/x_66,y_0,w_636,h_650/fill/w_617,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Nancy%20C%C3%B4t%C3%A9-Gimp.jpeg"
    }
  ];

  const goalImages = [
    {
      url: "https://static.wixstatic.com/media/88ee31_adfe032a47704a5a85f5488564b72702~mv2.jpg/v1/crop/x_0,y_106,w_1919,h_1133/fill/w_1035,h_611,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/people-3140100_1920.jpg",
      alt: "Elderly support"
    },
    {
      url: "https://static.wixstatic.com/media/88ee31_e68b8c93b30e4f8c86cabd1106a5ab42~mv2.jpg/v1/fill/w_459,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/unsplash-old-woman.jpg"
    },
    {
      url: "https://static.wixstatic.com/media/88ee31_36511b399fad413bb21942bad2234a56~mv2.jpg/v1/fill/w_477,h_690,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/88ee31_36511b399fad413bb21942bad2234a56~mv2.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Presentation Section */}
        <section className="section-padding bg-secondary">
          <div className="container-custom">
            <SectionTitle title={t('presentation.title')} />
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 mb-6">{t('presentation.content')}</p>
              <p className="text-gray-700 font-medium text-center">{t('presentation.motto')}</p>
            </div>
          </div>
          <div className="flex justify-center item-center py-8">
          <motion.a 
                          href="/contact" 
                          className="btn-primary"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                  Nous Approches
          </motion.a>
          </div>
        </section>


        
        {/* Objectives Section */}
        <section id="objectives" className="section-padding bg-gray-300">
          <div className="container-custom">
            <SectionTitle title={t('objectives.title')} />
            <div className="max-w-4xl mx-auto">
              <p className="text-gray-700 mb-6 font-medium">{t('objectives.intro')}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {goalImages.map((image, index) => (
                  <div key={index} className="rounded-lg overflow-hidden shadow-md">
                    <img src={image.url} alt={image.alt} className="w-full h-48 object-cover" />
                  </div>
                ))}
              </div>
              
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
        <section className="section-padding bg-secondary-foreground">
          <div className="container-custom">
            <SectionTitle title={t('fields.title')} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="World Map" 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
              <div>
                <p className="text-gray-400 mb-4">{t('fields.content')}</p>
                <p className="text-gray-400">
                  The Colony of Development Pioneers' scope of action is the entire territory of Quebec, in Canada and abroad where its objectives are justified. In Africa, activities are concentrated in the Democratic Republic of Congo and Burundi.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section id="team" className="section-padding bg-gray-50 py-20">
          <div className="container-custom">
            <SectionTitle title={t('team.title')} />
            <div className="mt-10 max-w-7xl mx-auto px-4">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4">
                  {teamMembers.map((member, index) => (
                    <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                      <TeamMember
                        name={member.name} 
                        role={member.role} 
                        imageUrl={member.imageUrl}
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-center mt-8 gap-4">
                  <CarouselPrevious className="relative static transform-none border-primary bg-white text-primary hover:bg-primary hover:text-white" />
                  <CarouselNext className="relative static transform-none border-primary bg-white text-primary hover:bg-primary hover:text-white" />
                </div>
              </Carousel>
            </div>
          </div>
        </section>
        
        {/* Partners Section - NEW */}
        <Partners />
        
        {/* Achievements Section */}
        <section id="achievements" className="section-padding bg-gray-400">
          <div className="container-custom">
            <SectionTitle title={t('achievements.title')} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AchievementCard text={t('achievements.1')} index={1} icon="users" />
              <AchievementCard text={t('achievements.2')} index={2} icon="users" />
              <AchievementCard text={t('achievements.3')} index={3} icon="book" />
              <AchievementCard text={t('achievements.4')} index={4} icon="globe" />
              <AchievementCard text={t('achievements.5')} index={5} icon="book" />
              <AchievementCard text={t('achievements.6')} index={6} icon="users" />
              <AchievementCard text={t('achievements.7')} index={7} icon="globe" />
            </div>
          </div>
        </section>
        
        <section>

        
        </section>
        {/* Activities Section - New Section */}
        <section id="activities" className="section-padding bg-gray-50">
          <div className="container-custom">
            <SectionTitle title="ACTIVITIES" />
            <div className="max-w-4xl mx-auto">
              <div className="space-y-6">
                <p className="text-gray-700">
                  Support and assist elderly people and immigrants in need of assistance. To combat loneliness and maintain and promote human warmth among elderly people, the CPD organizes cultural activities for them and facilitates the provision of caregivers when needed.
                </p>
                <p className="text-gray-700">
                  Prevent, combat and fight against armed violence, violence against women.
                </p>
                <p className="text-gray-700">
                  Raise awareness, train and support young people on peace, respect for human rights and against drug use through information and awareness-raising activities.
                </p>
                <p className="text-gray-700">
                  Advocacy for the implementation of international conventions, protocols and treaties aimed at building and consolidating peace, respect for human and humanitarian rights and sustainable development.
                </p>
                <p className="text-gray-700">
                  Supervise young people on cross-cutting themes for sustainable development around French clubs.
                </p>
                <p className="text-gray-700">
                  Contribute to preventing, eradicating and combating violence and violations of the rights of vulnerable and minority people such as victims of conflict, LGBTQI+ people, and people with disabilities.
                </p>
                <p className="text-gray-700">
                  Support populations in need of assistance with socio-economic development initiatives, by applying a policy of support for agriculture and livestock farming.
                </p>
              </div>
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
                <div className="mb-8">
                  <p className="text-gray-700 mb-4">{t('peace.content')}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <img 
                      src="https://images.unsplash.com/photo-1540553002-c69a97c29279?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                      alt="Peace Education" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1546773740-b8c43346ed72?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                      alt="Non-violence Education" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <SectionTitle title={t('training.title')} />
                <div className="mb-8">
                  <p className="text-gray-700 mb-4">{t('training.content')}</p>
                  <div className="mt-4">
                    <img 
                      src="https://images.unsplash.com/photo-1588702547919-26089e690ecc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                      alt="ICT Training" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                </div>
                
                <SectionTitle title={t('youth.title')} />
                <div className="mb-8">
                  <p className="text-gray-700 mb-4">{t('youth.content')}</p>
                  <div className="mt-4">
                    <img 
                      src="https://images.unsplash.com/photo-1517486808906-6ca8b3f8e35f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                      alt="Youth Supervision" 
                      className="rounded-lg shadow-md w-full h-48 object-cover"
                    />
                  </div>
                </div>
                
                <SectionTitle title={t('volunteer.title')} />
                <p className="text-gray-700 mb-8">{t('volunteer.content')}</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact and News Section */}
        <section className="section-padding bg-gray-500">
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
        
        {/* Reports Section - Using our new component */}
        <ReportsSection />
        
        {/* Donation Section */}
        <DonationSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
