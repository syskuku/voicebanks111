import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", delay = 0 }) => {
  const style = {
    animationDelay: `${delay}ms`,
  };

  return (
    <div 
      className={`
        bg-white/60
        backdrop-blur-xl
        border border-white/60
        shadow-[0_8px_32px_0_rgba(255,126,182,0.15)]
        rounded-[24px]
        p-6 md:p-8
        animate-fade-in
        hover:bg-white/70
        hover:shadow-[0_12px_40px_0_rgba(255,126,182,0.25)]
        hover:border-white/80
        hover:-translate-y-1
        transition-all duration-500 ease-out
        relative
        overflow-hidden
        group
        ${className}
      `}
      style={style}
    >
      {/* Decorative gradient blob */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-miku-pink/20 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none group-hover:scale-125 transition-transform duration-700" />
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};