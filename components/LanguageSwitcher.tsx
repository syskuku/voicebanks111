import React, { useState, useRef, useEffect } from 'react';
import { Languages, ChevronDown } from 'lucide-react';
import { Language } from '../types';

interface LanguageSwitcherProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: 'zh-CN', label: '简体中文', flag: '🇨🇳' },
  { code: 'zh-TW', label: '繁體中文', flag: '' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
];

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLabel = LANGUAGES.find(l => l.code === currentLang)?.label || 'Language';

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300
          ${isOpen ? 'bg-white text-miku-dark shadow-md' : 'bg-white/40 text-slate-700 hover:bg-white/60'}
          backdrop-blur-md border border-white/60
        `}
      >
        <Languages size={18} />
        <span className="text-sm font-bold hidden sm:inline-block">{currentLabel}</span>
        <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white/90 backdrop-blur-xl border border-white/80 rounded-xl shadow-xl overflow-hidden animate-fade-in z-50">
          <div className="py-1">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  onLanguageChange(lang.code);
                  setIsOpen(false);
                }}
                className={`
                  w-full text-left px-4 py-2 text-sm font-medium flex items-center gap-3 hover:bg-miku-pink/10 transition-colors
                  ${currentLang === lang.code ? 'text-miku-pink bg-miku-pink/5' : 'text-slate-600'}
                `}
              >
                <span className="text-base">{lang.flag}</span>
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};