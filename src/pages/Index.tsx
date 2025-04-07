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
      name: "Jacques Ntibarikure",
      role: "General Coordinator",
      imageUrl: "https://static.wixstatic.com/media/88ee31_4ea2559eb96746cf89e185bd34328b93~mv2.jpg/v1/crop/x_0,y_12,w_1168,h_1179/fill/w_624,h_630,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Jacques-Site-Web_edited.jpg"
    },
    {
      name: "Nancy Roy",
      role: "Volunteer for Elderly Care",
      imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      name: "Freddy Byamonyi",
      role: "Executive Director (CPD East DRC)",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      name: "Team Member 4",
      role: "Peace Education",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      name: "Team Member 5",
      role: "Youth Development",
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      name: "Team Member 6",
      role: "ICT Training Coordinator",
      imageUrl: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      name: "Team Member 7",
      role: "Volunteer Coordinator",
      imageUrl: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      name: "Team Member 8",
      role: "Fundraising Specialist",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
      name: "Team Member 9",
      role: "Community Outreach",
      imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    }
  ];

  const goalImages = [
    {
      url: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      alt: "Elderly support"
    },
    {
      url: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      alt: "Fighting violence"
    },
    {
      url: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      alt: "Youth education"
    }
  ];

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
        <section className="section-padding bg-white">
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
                <p className="text-gray-700 mb-4">{t('fields.content')}</p>
                <p className="text-gray-700">
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
        
        {/* Achievements Section */}
        <section id="achievements" className="section-padding bg-white">
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
