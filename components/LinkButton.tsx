import React from 'react';
import { LinkItem } from '../types';
import { ExternalLink } from 'lucide-react';

interface LinkButtonProps {
  item: LinkItem;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ item }) => {
  const Icon = item.icon;
  
  return (
    <a
      href={item.url}
      target={item.url.startsWith('mailto') ? '_self' : '_blank'}
      rel="noopener noreferrer"
      className={`
        group relative flex items-start md:items-center gap-4 p-4 w-full flex-1 min-w-[300px]
        rounded-2xl transition-all duration-300 ease-out
        border
        ${item.primary 
          ? 'bg-miku-pink/10 border-miku-pink/40 hover:bg-miku-pink/20 hover:border-miku-pink/60' 
          : 'bg-white/40 border-white/60 hover:bg-white/80 hover:border-miku-pink/30'}
        hover:-translate-y-1 hover:shadow-[0_8px_20px_-4px_rgba(255,126,182,0.25)]
        backdrop-blur-md
      `}
    >
      <div className={`
        p-3 rounded-xl shrink-0 transition-all duration-300 flex items-center justify-center mt-1 md:mt-0
        ${item.primary 
          ? 'bg-miku-pink text-white shadow-md shadow-miku-pink/30 group-hover:scale-110 group-hover:rotate-3' 
          : 'bg-white/80 text-miku-dark shadow-sm group-hover:scale-110 group-hover:text-miku-pink'}
      `}>
        <Icon size={24} strokeWidth={2.5} />
      </div>

      <div className="flex-1 min-w-0 flex flex-col justify-center gap-0.5">
        <div className="flex items-center gap-2 mb-1">
          <span className={`
            text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider leading-none shrink-0
            ${item.primary ? 'bg-miku-dark text-white' : 'bg-black/5 text-black/60 group-hover:bg-miku-pink/10 group-hover:text-miku-dark transition-colors'}
          `}>
            {item.tag}
          </span>
        </div>
        <div className="font-bold text-base md:text-lg text-slate-900 break-words pr-6 group-hover:text-miku-dark transition-colors">
          {item.title}
        </div>
        {item.description && (
          <div className={`
            text-xs font-medium mt-1 leading-relaxed
            ${item.description.includes('⚠️') ? 'text-red-500/90 font-bold' : 'text-slate-500 group-hover:text-slate-700'}
          `}>
            {item.description}
          </div>
        )}
      </div>

      <div className="absolute top-4 right-4 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-miku-pink/80">
        <ExternalLink size={16} />
      </div>
    </a>
  );
};