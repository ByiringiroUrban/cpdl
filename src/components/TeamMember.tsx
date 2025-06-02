
import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface TeamMemberProps {
  name: string;
  role: string;
  imageUrl: string;
  className?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, imageUrl, className }) => {
  // Extract initials for avatar fallback
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();

  return (
    <div className={cn(
      "group relative overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-xl",
      className
    )}>
      <div className="aspect-square overflow-hidden">
        <img 
          src={imageUrl} 
          alt={name} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-0 transition-transform duration-300 group-hover:translate-y-0 z-10">
        <div className="transition-all duration-300 transform group-hover:translate-y-0">
          <Avatar className="h-16 w-16 mb-3 border-2 border-white shadow-lg">
            <AvatarImage src={imageUrl} alt={name} />
            <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <h3 className="text-xl font-semibold text-white group-hover:text-white mb-1">{name}</h3>
          <p className="text-gray-200 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
