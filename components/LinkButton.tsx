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
            ${item.hasScrollArrow ? 'pr-14 md:pr-16' : ''}
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
          <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
            <button
              onClick={toggleExpand}
              title="查看加速镜像版"
              className={`
                w-10 h-10 md:w-11 md:h-11 pointer-events-auto
                flex items-center justify-center rounded-xl transition-all shadow-lg border
                ${isExpanded 
                  ? 'bg-miku-pink text-white border-miku-pink scale-110' 
                  : 'bg-white text-slate-500 border-white hover:text-miku-pink hover:scale-110 hover:shadow-miku-pink/20 active:scale-95'}
              `}
            >
              <ChevronDown size={22} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} strokeWidth={3} />
            </button>
          </div>
        )}
      </div>

      {isExpanded && item.hasScrollArrow && (
        <div className="animate-fade-in px-1 mt-1">
          <button
            onClick={(e) => {
              setIsExpanded(false);
              onArrowClick?.(e);
            }}
            className="w-full flex items-center gap-4 p-4 rounded-2xl bg-white/90 border-2 border-miku-pink/30 hover:bg-white hover:border-miku-pink transition-all text-left group/sub shadow-xl shadow-miku-pink/5 active:scale-[0.98]"
          >
            <div className="p-2.5 rounded-xl bg-miku-pink text-white shadow-md group-hover/sub:rotate-12 transition-transform">
              <Zap size={20} fill="currentColor" />
            </div>
            <div className="flex-1">
              <div className="text-sm md:text-base font-black text-slate-800 flex items-center gap-2">
                国内站入口
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-green-100 text-green-600 uppercase">FAST</span>
              </div>
              <div className="text-[11px] font-bold text-slate-500 opacity-80">点击跳转至 resources.imikufans.cn</div>
            </div>
            <ChevronDown size={18} className="text-miku-pink -rotate-90 group-hover/sub:translate-x-1 transition-transform" strokeWidth={3} />
          </button>
        </div>
      )}
    </div>
  );
};