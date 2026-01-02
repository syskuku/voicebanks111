import React, { useState } from 'react';
import { BACKGROUND_IMAGE } from './constants';
import { GlassCard } from './components/GlassCard';
import { LinkButton } from './components/LinkButton';
import { Hitokoto } from './components/Hitokoto';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { Sparkles, Heart, Coffee } from 'lucide-react';
import { locales } from './locales';
import { Language } from './types';

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>('zh-CN');
  const siteInfo = locales[currentLang];

  return (
    <div className="min-h-screen w-full relative text-slate-900 font-sans selection:bg-miku-pink selection:text-white overflow-x-hidden">
      {/* Background Layer */}
      <div 
        className="fixed inset-0 w-full h-full z-[-1] bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${BACKGROUND_IMAGE})` }}
      />
      
      {/* Light Overlay */}
      <div className="fixed inset-0 w-full h-full z-[-1] bg-white/30 backdrop-blur-[2px] pointer-events-none" />
      <div className="fixed inset-0 w-full h-full z-[-1] bg-gradient-to-b from-white/60 via-transparent to-white/60 pointer-events-none" />

      {/* Language Switcher Fixed Top Right */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageSwitcher currentLang={currentLang} onLanguageChange={setCurrentLang} />
      </div>

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
              {siteInfo.title}
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl font-bold text-slate-700/90 mb-8 font-display tracking-wide">
            {siteInfo.subtitle}
          </p>

          <div className="flex flex-col items-center gap-4">
            {/* Operator Info with Avatar */}
            <div className="inline-flex items-center gap-3 max-w-3xl mx-auto bg-miku-pink/10 backdrop-blur-md border-2 border-dashed border-miku-pink/40 rounded-2xl px-6 py-3 text-sm md:text-base font-bold text-slate-800 shadow-sm hover:bg-miku-pink/20 transition-colors duration-300">
              <a 
                href="https://b23.tv/mF5hLg7Fix" 
                target="_blank" 
                rel="noopener noreferrer"
                className="shrink-0 transition-transform hover:scale-110 active:scale-95"
              >
                 <img 
                  src="https://voicebanks.imikufans.com/ava.jpg" 
                  alt="Avatar" 
                  className="w-10 h-10 rounded-full border-2 border-white/80 shadow-md object-cover"
                />
              </a>
              {siteInfo.operator}
            </div>

            {/* Sponsor Button */}
            <a 
              href="https://www.imikufans.com/donate.php" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FFDD00] text-amber-900 font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-amber-300/50"
            >
              <Coffee size={16} className="fill-current" />
              {siteInfo.sponsor}
            </a>
          </div>
        </header>

        {/* Content Groups */}
        <div className="flex flex-col gap-8">
          {siteInfo.linkGroups.map((group, index) => (
            <section key={group.title + currentLang} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <GlassCard>
                <h2 className="text-2xl font-extrabold text-slate-800 mb-6 flex items-center">
                  <span className="inline-block w-1.5 h-8 bg-gradient-to-b from-miku-pink to-miku-dark rounded-full mr-4 shadow-sm shadow-miku-pink/30"></span>
                  {group.title}
                </h2>
                <div className="flex flex-wrap gap-4">
                  {group.items.map((item) => (
                    <LinkButton key={item.url + item.title} item={item} />
                  ))}
                </div>
              </GlassCard>
            </section>
          ))}
        </div>

        {/* Footer / Hitokoto */}
        <Hitokoto uiText={siteInfo.hitokoto} />

        {/* Copyright Footer */}
        <footer className="mt-24 text-center pb-8">
          <div className="inline-flex flex-col items-center gap-2 px-8 py-4 rounded-3xl bg-white/40 backdrop-blur-md border border-white/60 shadow-lg shadow-miku-pink/5">
            <div className="flex items-center gap-2 text-miku-dark mb-1">
              <Heart size={16} fill="currentColor" className="animate-pulse" />
              <span className="font-bold text-sm tracking-wider uppercase">MikuFans</span>
            </div>
            <p className="text-xs font-semibold text-slate-600">
              © {new Date().getFullYear()} {siteInfo.footer.rights}
            </p>
          </div>
        </footer>

      </main>
    </div>
  );
};

export default App;