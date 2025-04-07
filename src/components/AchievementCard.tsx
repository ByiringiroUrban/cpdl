
import React from 'react';

interface AchievementCardProps {
  text: string;
  index: number;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ text, index }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <span className="text-primary-foreground font-bold">{index}</span>
        </div>
        <p className="text-gray-700">{text}</p>
      </div>
    </div>
  );
};

export default AchievementCard;
