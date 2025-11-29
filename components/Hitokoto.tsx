import React, { useEffect, useState } from 'react';
import { Quote, Loader2, ArrowUpRight } from 'lucide-react';
import { GlassCard } from './GlassCard';
import { SiteData } from '../types';

interface HitokotoProps {
  uiText: SiteData['hitokoto'];
}

interface HitokotoResponse {
  id: number;
  uuid: string;
  hitokoto: string;
  type: string;
  from: string;
  from_who: string | null;
  creator: string;
  created_at: string;
}

export const Hitokoto: React.FC<HitokotoProps> = ({ uiText }) => {
  const [data, setData] = useState<HitokotoResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHitokoto = async () => {
      try {
        const res = await fetch('https://v1.hitokoto.cn/?c=a');
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Hitokoto fetch failed", error);
        setData({
          id: 0,
          uuid: 'fallback',
          hitokoto: uiText.fallback,
          type: 'a',
          from: 'System',
          from_who: null,
          creator: 'System',
          created_at: new Date().toISOString()
        });
      } finally {
        setLoading(false);
      }
    };

    fetchHitokoto();
  }, [uiText.fallback]); // Re-fetch if fallback language changes? Optional, but safer to just let it wrap.

  const detailUrl = data?.uuid ? `https://hitokoto.cn?uuid=${data.uuid}` : 'https://hitokoto.cn';

  return (
    <GlassCard className="mt-12 text-center relative overflow-hidden group !p-0" delay={400}>
       <a 
        href={detailUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block w-full h-full p-10 relative z-10"
      >
        <div className="absolute -top-6 -left-6 text-miku-pink/5 rotate-12 transform transition-transform duration-700 group-hover:rotate-0 group-hover:scale-110 group-hover:text-miku-pink/10 pointer-events-none">
          <Quote size={180} />
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-6 p-3 rounded-full bg-miku-pink/10 text-miku-pink group-hover:bg-miku-pink group-hover:text-white transition-colors duration-300">
            {loading ? <Loader2 className="animate-spin" size={24} /> : <Quote size={24} fill="currentColor" />}
          </div>

          {loading ? (
            <div className="w-full max-w-md animate-pulse flex flex-col items-center gap-4">
              <div className="h-5 bg-slate-200 rounded-full w-3/4"></div>
              <div className="h-5 bg-slate-200 rounded-full w-1/2"></div>
              <p className="text-sm text-slate-400 mt-2">{uiText.loading}</p>
            </div>
          ) : (
            <>
              <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed tracking-wide font-display max-w-3xl mx-auto drop-shadow-sm">
                {data?.hitokoto}
              </p>
              
              <div className="mt-8 flex items-center justify-center gap-3 text-sm md:text-base text-slate-500 font-semibold">
                 <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent via-miku-pink/40 to-transparent"></div>
                 <div className="flex flex-wrap justify-center items-center gap-x-2">
                    {data?.from_who && (
                      <span className="text-slate-700">{data.from_who}</span>
                    )}
                    <span className="text-miku-pink font-black text-xs">「</span>
                    <span className="text-slate-700">{data?.from || uiText.unknown}</span>
                    <span className="text-miku-pink font-black text-xs">」</span>
                 </div>
                 <div className="h-[1px] w-8 md:w-16 bg-gradient-to-r from-transparent via-miku-pink/40 to-transparent"></div>
              </div>

              <div className="absolute bottom-4 right-4 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <span className="flex items-center gap-1 text-xs font-bold text-miku-pink bg-white/80 px-2 py-1 rounded-lg shadow-sm">
                  {uiText.viewDetails} <ArrowUpRight size={12} />
                </span>
              </div>
            </>
          )}
        </div>
      </a>
    </GlassCard>
  );
};