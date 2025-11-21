import { LucideIcon } from 'lucide-react';

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