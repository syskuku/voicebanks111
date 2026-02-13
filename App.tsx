import React, { useState } from 'react';
import { BACKGROUND_IMAGE } from './constants';
import { GlassCard } from './components/GlassCard';
import { LinkButton } from './components/LinkButton';
import { Hitokoto } from './components/Hitokoto';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { Sparkles, Coffee, Megaphone, X } from 'lucide-react';
import { locales } from './locales';
import { Language } from './types';

const App: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>('zh-CN');
  const [isSponsorModalOpen, setIsSponsorModalOpen] = useState(false);
  const siteInfo = locales[currentLang];

  const handleArrowClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const targetGroup = document.getElementById('friendly-links-section');
    const targetLink = document.getElementById('cn-mirror-link');
    
    if (targetGroup) {
      targetGroup.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Add a highlight effect to the specific link button
      if (targetLink) {
        targetLink.classList.add('ring-4', 'ring-miku-pink/50', 'scale-105', 'shadow-2xl');
        setTimeout(() => {
          targetLink.classList.remove('ring-4', 'ring-miku-pink/50', 'scale-105', 'shadow-2xl');
        }, 2000);
      }
    }
  };

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

      <main className="max-w-5xl mx-auto px-6 py-16 md:py-24 flex flex-col relative z-10 pb-12">
        
        {/* Announcement Banner */}
        <div className="max-w-4xl mx-auto mb-10 w-full animate-fade-in">
          <div className="bg-amber-50/90 backdrop-blur-md border border-amber-200 rounded-2xl p-4 md:p-5 shadow-sm flex flex-col md:flex-row gap-4 items-start text-sm text-amber-900">
            <div className="bg-amber-100 p-2 rounded-full shrink-0">
              <Megaphone size={20} className="text-amber-600" />
            </div>
            <div className="leading-relaxed">
              <p className="font-bold mb-1 text-amber-700">站点公告</p>
              <p className="opacity-90">
                iMikufans已全面交割给VOCAKEE社区管理 且 本站与iMikufans.com及Syskuku_雪音詩絵无关，本站将全面剔除所有付费相关链接 将完全遵从非盈利模式。本站下所有资源由社区共同维护及管理，站内所有内容仅作为个人学习、欣赏交流之用。本公告公示时间至2026年2月20日。
              </p>
            </div>
          </div>
        </div>

        {/* Header Section */}
        <header className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-md border border-white/80 mb-8 shadow-sm animate-float hover:bg-white/80 transition-colors duration-300 ring-1 ring-miku-pink/20">
            <Sparkles className="text-miku-dark mr-2" size={16} />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-miku-dark">
              VOCAKEE Community
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
              <div className="shrink-0">
                 <img 
                  src="https://vocakey.wiki/resources/assets/change-your-logo.svg" 
                  alt="Avatar" 
                  className="w-10 h-10 rounded-full border-2 border-white/80 shadow-md object-cover bg-white"
                />
              </div>
              {siteInfo.operator}
            </div>

            {/* Sponsor Button */}
            <button 
              onClick={() => setIsSponsorModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FFDD00] text-amber-900 font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 border border-amber-300/50"
            >
              <Coffee size={16} className="fill-current" />
              <span>{siteInfo.sponsor} (Sponsor)</span>
            </button>
          </div>
        </header>

        {/* Link Groups */}
        <div className="flex flex-col gap-8">
          {siteInfo.linkGroups.map((group, groupIndex) => {
            const isFriendlyLinks = group.title.includes('友情') || group.title.includes('Friendly') || group.title.includes('提供');
            return (
              <section 
                key={groupIndex} 
                id={isFriendlyLinks ? 'friendly-links-section' : undefined}
                className="animate-fade-in" 
                style={{ animationDelay: `${groupIndex * 150}ms` }}
              >
                <GlassCard className="!p-6 md:!p-8">
                  <h2 className="text-2xl font-extrabold text-slate-800 mb-6 flex items-center">
                    <span className="inline-block w-1.5 h-8 bg-gradient-to-b from-miku-pink to-miku-dark rounded-full mr-4 shadow-sm shadow-miku-pink/30"></span>
                    {group.title}
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    {group.items.map((item, itemIndex) => {
                      const isCnMirror = item.url.includes('resources.imikufans.cn');
                      return (
                        <div 
                          key={itemIndex} 
                          id={isCnMirror ? 'cn-mirror-link' : undefined}
                          className="flex-1 min-w-[300px] transition-all duration-500 rounded-2xl"
                        >
                          <LinkButton 
                            item={item} 
                            onArrowClick={item.hasScrollArrow ? handleArrowClick : undefined}
                          />
                        </div>
                      );
                    })}
                  </div>
                </GlassCard>
              </section>
            );
          })}
        </div>

        {/* Hitokoto */}
        <Hitokoto uiText={siteInfo.hitokoto} />

      </main>

      {/* Sponsor Modal */}
      {isSponsorModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm animate-fade-in" 
            onClick={() => setIsSponsorModalOpen(false)}
          />
          <div className="relative w-full max-w-md bg-white/95 backdrop-blur-2xl border border-white/60 rounded-3xl p-8 shadow-2xl text-center ring-1 ring-black/5 animate-modal-in">
            <div className="w-16 h-16 bg-amber-100 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm ring-4 ring-amber-50">
              <Coffee size={32} />
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">赞助说明</h3>
            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
              本站已不支持赞助。<br />如需为本站做贡献请点击下方资源扩充按钮。
            </p>
            <button 
              onClick={() => setIsSponsorModalOpen(false)}
              className="w-full py-3.5 rounded-2xl bg-slate-900 text-white font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 active:scale-[0.98] active:shadow-sm"
            >
              知道了
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes modalIn {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-modal-in {
          animation: modalIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </div>
  );
};

export default App;