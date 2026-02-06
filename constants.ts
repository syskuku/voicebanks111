import { Download, Book, Activity, Users, Mail } from 'lucide-react';
import { LinkGroup } from './types';

export const BACKGROUND_IMAGE = "https://voicebanks.imikufans.com/wid.jpg";

export const SITE_INFO = {
  title: "VOCAKEE 社区",
  subtitle: "超级网络 · 虚拟歌手资源下载站",
  operator: "由 VOCAKEY.WIKI社区运营"
};

export const LINK_GROUPS: LinkGroup[] = [
  {
    title: "核心资源与工具",
    items: [
      {
        title: "声库下载站及相关工具",
        tag: "VOCALOID",
        url: "https://voicebanks1.imikufans.com",
        icon: Download,
        primary: true,
      },
      {
        title: "资料与使用手册",
        tag: "VOCAKEY WIKI",
        url: "https://vocakey.wiki/",
        icon: Book,
      }
    ]
  },
  {
    title: "站点监控",
    items: [
      {
        title: "VOCAKEE 监控站面板",
        tag: "STATUS",
        url: "https://kuma.imikufans.cn/status/cyanimonitor",
        icon: Activity,
      }
    ]
  },
  {
    title: "友情提供 (非官方)",
    items: [
      {
        title: "iMikufans Community",
        description: "虚拟歌手论坛：由小饭团爱睡觉2提供（本站为.cn域名非.com域名）",
        tag: "社区",
        url: "https://flarum.imikufans.cn/",
        icon: Users,
      },
      {
        title: "欢迎资源扩充！",
        tag: "联系",
        url: "javascript:alert('暂未设置邮箱，请等待本页后续更新')",
        icon: Mail,
      }
    ]
  }
];