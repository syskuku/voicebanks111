import React, { useState } from 'react';
import { LinkItem } from '../types';
import { ExternalLink, ChevronDown, Zap } from 'lucide-react';

interface LinkButtonProps {
  item: LinkItem;
  onArrowClick?: (e: React.MouseEvent) => void;
}

export const LinkButton: React.FC<LinkButtonProps> = ({ item, onArrowClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = item.icon;
  
  const handleMainClick = (e: React.MouseEvent) => {
    if (item.url.startsWith('javascript:')) {
      e.preventDefault();
      const code = item.url.replace('javascript:', '');
      try {
        new Function(code)();
      } catch (err) {
        console.error("Link code execution failed", err);
      }
    }
  };

  const toggleExpand = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="flex-1 min-w-[300px] flex flex-col gap-2 group/root">
      <div className="flex relative group/container w-full">
        <a
          href={item.url.startsWith('javascript:') ? undefined : item.url}
          target={item.url.startsWith('mailto') ? '_self' : '_blank'}
          rel="noopener noreferrer"
          onClick={handleMainClick}
          className={`
            relative flex items-start md:items-center gap-4 p-4 w-full flex-1
            rounded-2xl transition-all duration-300 ease-out
            border
            ${item.primary 
              ? 'bg-miku-pink/10 border-miku-pink/40 hover:bg-miku-pink/20 hover:border-miku-pink/60' 
              : 'bg-white/40 border-white/60 hover:bg-white/80 hover:border-miku-pink/30'}
            hover:-translate-y-1 hover:shadow-[0_8px_20px_-4px_rgba(255,126,182,0.25)]
            backdrop-blur-md
            ${item.hasScrollArrow ? 'pr-16' : ''}
          `}
        >
          <div className={`
            p-3 rounded-xl shrink-0 transition-all duration-300 flex items-center justify-center mt-1 md:mt-0
            ${item.primary 
              ? 'bg-miku-pink text-white shadow-md shadow-miku-pink/30 group-hover/container:scale-110 group-hover/container:rotate-3' 
              : 'bg-white/80 text-miku-dark shadow-sm group-hover/container:scale-110 group-hover/container:text-miku-pink'}
          `}>
            <Icon size={24} strokeWidth={2.5} />
          </div>

          <div className="flex-1 min-w-0 flex flex-col justify-center gap-0.5">
            <div className="flex items-center gap-2 mb-1">
              <span className={`
                text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider leading-none shrink-0
                ${item.primary ? 'bg-miku-dark text-white' : 'bg-black/5 text-black/60 group-hover/container:bg-miku-pink/10 group-hover/container:text-miku-dark transition-colors'}
              `}>
                {item.tag}
              </span>
            </div>
            <div className="font-bold text-base md:text-lg text-slate-900 break-words pr-2 group-hover/container:text-miku-dark transition-colors">
              {item.title}
            </div>
            {item.description && (
              <div className={`
                text-xs font-medium mt-1 leading-relaxed
                ${item.description.includes('⚠️') ? 'text-red-500/90 font-bold' : 'text-slate-500 group-hover/container:text-slate-700'}
              `}>
                {item.description}
              </div>
            )}
          </div>

          {!item.hasScrollArrow && !item.url.startsWith('javascript:') && (
            <div className="absolute top-4 right-4 opacity-0 transform translate-x-2 group-hover/container:opacity-100 group-hover/container:translate-x-0 transition-all duration-300 text-miku-pink/80">
              <ExternalLink size={16} />
            </div>
          )}
        </a>

        {item.hasScrollArrow && (
          <button
            onClick={toggleExpand}
            title="查看加速镜像版"
            className={`
              absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 
              flex items-center justify-center rounded-xl z-20 transition-all shadow-sm border
              ${isExpanded 
                ? 'bg-miku-pink text-white border-miku-pink scale-110' 
                : 'bg-white text-slate-400 border-slate-200 hover:text-miku-pink hover:border-miku-pink/50 hover:scale-105'}
            `}
          >
            <ChevronDown size={20} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        )}
      </div>

      {isExpanded && item.hasScrollArrow && (
        <div className="animate-fade-in pl-4 pr-2">
          <button
            onClick={(e) => onArrowClick?.(e)}
            className="w-full flex items-center gap-4 p-3 rounded-xl bg-white/60 border border-white/80 hover:bg-miku-pink/5 hover:border-miku-pink/30 transition-all text-left group/sub"
          >
            <div className="p-2 rounded-lg bg-miku-pink/10 text-miku-pink group-hover/sub:bg-miku-pink group-hover/sub:text-white transition-colors">
              <Zap size={18} />
            </div>
            <div className="flex-1">
              <div className="text-sm font-bold text-slate-800">国内加速版 (resources.imikufans.cn)</div>
              <div className="text-[10px] text-slate-500">点击引导至下方国内优化镜像链接</div>
            </div>
            <ChevronDown size={14} className="text-slate-300 group-hover/sub:text-miku-pink -rotate-90" />
          </button>
        </div>
      )}
    </div>
  );
};