import { LucideIcon } from 'lucide-react';

export type Language = 'zh-CN' | 'zh-TW' | 'en' | 'ja' | 'ru';

export interface LinkItem {
  title: string;
  url: string;
  tag: string;
  description?: string;
  icon: LucideIcon;
  primary?: boolean;
}

export interface LinkGroup {
  title: string;
  items: LinkItem[];
}

export interface SiteData {
  title: string;
  subtitle: string;
  operator: string;
  sponsor: string;
  linkGroups: LinkGroup[];
  hitokoto: {
    loading: string;
    from: string;
    unknown: string;
    viewDetails: string;
    fallback: string;
  };
  footer: {
    rights: string;
  };
}

export interface HitokotoResponse {
  id: number;
  uuid: string;
  hitokoto: string;
  type: string;
  from: string;
  from_who: string | null;
  creator: string;
  created_at: string;
}