import { Download, Book, Home, Users, Mail } from 'lucide-react';
import { LinkGroup } from './types';

export const BACKGROUND_IMAGE = "https://voicebanks.imikufans.com/wid.jpg";

export const SITE_INFO = {
  title: "iMikufans未来之境",
  subtitle: "超级网络 · 虚拟歌手资源下载站",
  operator: "由UP主 Syskuku_雪音詩絵 运营（原 SYSKUKU 研究部）"
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
        url: "https://vocakey.imikufans.com",
        icon: Book,
      }
    ]
  },
  {
    title: "主页导航",
    items: [
      {
        title: "iMikufans.com",
        tag: "主页",
        url: "https://iMikufans.com",
        icon: Home,
      }
    ]
  },
  {
    title: "友情提供",
    items: [
      {
        title: "iMikufans Community",
        description: "虚拟歌手论坛：有小饭团爱睡觉2提供",
        tag: "社区",
        url: "https://flarum.imikufans.cn/",
        icon: Users,
      },
      {
        title: "欢迎资源扩充！",
        tag: "联系",
        url: "mailto:systemzhang123@outlook.com",
        icon: Mail,
      }
    ]
  }
];