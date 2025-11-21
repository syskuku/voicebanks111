import React from 'react';
import { BACKGROUND_IMAGE, LINK_GROUPS, SITE_INFO } from './constants';
import { GlassCard } from './components/GlassCard';
import { LinkButton } from './components/LinkButton';
import { Hitokoto } from './components/Hitokoto';
import { Sparkles, User, Heart } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full relative text-slate-900 font-sans selection:bg-miku-pink selection:text-white overflow-x-hidden">
      {/* Background Layer - Fixed and Cover */}
      <div 
        className="fixed inset-0 w-full h-full z-[-1] bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
      />
      
      {/* Light Overlay Layer - Reduced opacity to let wid.jpg show through while keeping text readable */}
      <div className="fixed inset-0 w-full h-full z-[-1] bg-white/30 backdrop-blur-[2px] pointer-events-none" />
      
      {/* Gradient Vignette for focus */}
      <div className="fixed inset-0 w-full h-full z-[-1] bg-gradient-to-b from-white/60 via-transparent to-white/60 pointer-events-none" />

      <main className="max-w-5xl mx-auto px-6 py-16 md:py-24 flex flex-col relative z-10">
        
        {/* Header Section */}
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 mb-8 shadow-sm animate-float hover:bg-white/80 transition-colors duration-300 ring-1 ring-miku-pink/20">
            <Sparkles className="text-miku-dark mr-2" size={16} />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-miku-dark">
              Future Realm Network
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight drop-shadow-sm">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-miku-dark via-slate-800 to-miku-dark bg-300% animate-shimmer">
              {SITE_INFO.title}
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl font-bold text-slate-700/90 mb-8 font-display tracking-wide">
            {SITE_INFO.subtitle}
          </p>

          {/* Operator Hint - Styled like the PHP version's hint box but cleaner */}
          <div className="inline-flex items-center gap-3 max-w-3xl mx-auto bg-miku-pink/10 backdrop-blur-md border-2 border-dashed border-miku-pink/40 rounded-2xl px-6 py-4 text-sm md:text-base font-bold text-slate-800 shadow-sm hover:bg-miku-pink/20 transition-colors duration-300">
            <div className="p-1.5 bg-white/50 rounded-full">
              <User size={16} className="text-miku-dark" />
            </div>
            {SITE_INFO.operator}
          </div>
        </header>

        {/* Content Groups */}
        <div className="flex flex-col gap-8">
          {LINK_GROUPS.map((group, index) => (
            <section key={group.title} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <GlassCard>
                <h2 className="text-2xl font-extrabold text-slate-800 mb-6 flex items-center">
                  <span className="inline-block w-1.5 h-8 bg-gradient-to-b from-miku-pink to-miku-dark rounded-full mr-4 shadow-sm shadow-miku-pink/30"></span>
                  {group.title}
                </h2>
                <div className="flex flex-wrap gap-4">
                  {group.items.map((item) => (
                    <LinkButton key={item.url} item={item} />
                  ))}
                </div>
              </GlassCard>
            </section>
          ))}
        </div>

        {/* Footer / Hitokoto */}
        <Hitokoto />

        {/* Copyright Footer */}
        <footer className="mt-24 text-center pb-8">
          <div className="inline-flex flex-col items-center gap-2 px-8 py-4 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-lg shadow-miku-pink/5">
            <div className="flex items-center gap-2 text-miku-dark mb-1">
              <Heart size={16} fill="currentColor" className="animate-pulse" />
              <span className="font-bold text-sm tracking-wider uppercase">MikuFans</span>
            </div>
            <p className="text-xs font-semibold text-slate-600">
              © {new Date().getFullYear()} iMikufans Future Realm. All Rights Reserved.
            </p>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default App;