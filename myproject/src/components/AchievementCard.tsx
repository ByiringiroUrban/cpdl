
import React from 'react';
import { Globe, Users, BookOpen } from 'lucide-react';

interface AchievementCardProps {
  text: string;
  index: number;
  icon?: 'globe' | 'users' | 'book' | 'none';
}

const AchievementCard: React.FC<AchievementCardProps> = ({ text, index, icon = 'none' }) => {
  const renderIcon = () => {
    switch (icon) {
      case 'globe':
        return <Globe className="text-primary" size={20} />;
      case 'users':
        return <Users className="text-primary" size={20} />;
      case 'book':
        return <BookOpen className="text-primary" size={20} />;
      default:
        return null;
    }
  };
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold">{index}</span>
        </div>
        <div className="flex items-center gap-2 flex-1">
          {icon !== 'none' && renderIcon()}
          <p className="text-gray-700">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
