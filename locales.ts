import { Download, Book, Activity, Users, Mail, ExternalLink } from 'lucide-react';
import { SiteData, Language } from './types';

const COMMON_URLS = {
  voicebanks: "https://voicebanks1.imikufans.com",
  voicebanksCn: "https://resources.imikufans.cn",
  vocakey: "https://vocakey.wiki/",
  monitor: "https://kuma.imikufans.cn/status/cyanimonitor",
  community: "https://flarum.imikufans.cn/",
  noEmailAlert: "javascript:alert('暂未设置邮箱，请等待本页后续更新')"
};

export const locales: Record<Language, SiteData> = {
  'zh-CN': {
    title: "VOCAKEE 社区",
    subtitle: "超级网络 · 虚拟歌手资源下载站",
    operator: "由 VOCAKEY.WIKI社区运营",
    sponsor: "赞助支持",
    linkGroups: [
      {
        title: "核心资源与工具",
        items: [
          {
            title: "声库下载站及相关工具",
            tag: "VOCALOID",
            url: COMMON_URLS.voicebanks,
            icon: Download,
            primary: true,
            hasScrollArrow: true
          },
          {
            title: "资料与使用手册",
            tag: "VOCAKEY WIKI",
            url: COMMON_URLS.vocakey,
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
            url: COMMON_URLS.monitor,
            icon: Activity,
          }
        ]
      },
      {
        title: "友情提供 (非官方)",
        items: [
          {
            title: "声库资源站2（国内优化版）",
            description: "推荐国内用户使用，访问速度更快",
            tag: "加速",
            url: COMMON_URLS.voicebanksCn,
            icon: ExternalLink,
          },
          {
            title: "iMikufans Community",
            description: "虚拟歌手论坛：由小饭团爱睡觉2提供（本站为.cn域名非.com域名）",
            tag: "社区",
            url: COMMON_URLS.community,
            icon: Users,
          },
          {
            title: "欢迎资源扩充！",
            tag: "联系",
            url: COMMON_URLS.noEmailAlert,
            icon: Mail,
          }
        ]
      }
    ],
    hitokoto: {
      loading: "加载一言中...",
      from: "出处",
      unknown: "未知",
      viewDetails: "查看详情",
      fallback: "今天也要元气满满～"
    },
    footer: {
      rights: "VOCAKEE 社区. 保留所有权利."
    }
  },
  'zh-TW': {
    title: "VOCAKEE 社區",
    subtitle: "超級網絡 · 虛擬歌手資源下載站",
    operator: "由 VOCAKEY.WIKI社區運營",
    sponsor: "贊助支持",
    linkGroups: [
      {
        title: "核心資源與工具",
        items: [
          {
            title: "聲庫下載站及相關工具",
            tag: "VOCALOID",
            url: COMMON_URLS.voicebanks,
            icon: Download,
            primary: true,
            hasScrollArrow: true
          },
          {
            title: "資料與使用手冊",
            tag: "VOCAKEY WIKI",
            url: COMMON_URLS.vocakey,
            icon: Book,
          }
        ]
      },
      {
        title: "站點監控",
        items: [
          {
            title: "VOCAKEE 監控站面板",
            tag: "STATUS",
            url: COMMON_URLS.monitor,
            icon: Activity,
          }
        ]
      },
      {
        title: "友情提供 (非官方)",
        items: [
          {
            title: "聲庫資源站2（國內優化版）",
            description: "推薦國內用戶使用，訪問速度更快",
            tag: "加速",
            url: COMMON_URLS.voicebanksCn,
            icon: ExternalLink,
          },
          {
            title: "iMikufans Community",
            description: "虛擬歌手論壇：由小飯團愛睡覺2提供（本站為.cn域名非.com域名）",
            tag: "社區",
            url: COMMON_URLS.community,
            icon: Users,
          },
          {
            title: "歡迎資源擴充！",
            tag: "聯繫",
            url: COMMON_URLS.noEmailAlert,
            icon: Mail,
          }
        ]
      }
    ],
    hitokoto: {
      loading: "加載一言中...",
      from: "出處",
      unknown: "未知",
      viewDetails: "查看詳情",
      fallback: "今天也要元氣滿滿～"
    },
    footer: {
      rights: "VOCAKEE 社區. 保留所有權利."
    }
  },
  'en': {
    title: "VOCAKEE Community",
    subtitle: "Super Network · Vocaloid Resource Portal",
    operator: "Operated by VOCAKEY.WIKI Community",
    sponsor: "Sponsor",
    linkGroups: [
      {
        title: "Core Resources",
        items: [
          {
            title: "Voicebank Downloads & Tools",
            tag: "VOCALOID",
            url: COMMON_URLS.voicebanks,
            icon: Download,
            primary: true,
            hasScrollArrow: true
          },
          {
            title: "Docs & User Manual",
            tag: "VOCAKEY WIKI",
            url: COMMON_URLS.vocakey,
            icon: Book,
          }
        ]
      },
      {
        title: "Status Monitor",
        items: [
          {
            title: "VOCAKEE Monitor Panel",
            tag: "STATUS",
            url: COMMON_URLS.monitor,
            icon: Activity,
          }
        ]
      },
      {
        title: "Friendly Links (Unofficial)",
        items: [
          {
            title: "Resource Hub 2 (CN Optimized)",
            description: "Faster access for mainland China users",
            tag: "MIRROR",
            url: COMMON_URLS.voicebanksCn,
            icon: ExternalLink,
          },
          {
            title: "iMikufans Community",
            description: "Virtual Singer Forum: Provided by XiaoFanTuanAiShuiJiao2 (This site is .cn not .com)",
            tag: "FORUM",
            url: COMMON_URLS.community,
            icon: Users,
          },
          {
            title: "Contributions Welcome!",
            tag: "CONTACT",
            url: COMMON_URLS.noEmailAlert,
            icon: Mail,
          }
        ]
      }
    ],
    hitokoto: {
      loading: "Loading Quote...",
      from: "Source",
      unknown: "Unknown",
      viewDetails: "Details",
      fallback: "Have a wonderful day!"
    },
    footer: {
      rights: "VOCAKEE Community. All Rights Reserved."
    }
  },
  'ja': {
    title: "VOCAKEE コミュニティ",
    subtitle: "スーパーネットワーク · ボカロリソースポータル",
    operator: "運営：VOCAKEY.WIKI コミュニティ",
    sponsor: "スポンサー",
    linkGroups: [
      {
        title: "コアリソースとツール",
        items: [
          {
            title: "声庫ダウンロード＆ツール",
            tag: "VOCALOID",
            url: COMMON_URLS.voicebanks,
            icon: Download,
            primary: true,
            hasScrollArrow: true
          },
          {
            title: "資料とマニュアル",
            tag: "VOCAKEY WIKI",
            url: COMMON_URLS.vocakey,
            icon: Book,
          }
        ]
      },
      {
        title: "サイト監視",
        items: [
          {
            title: "VOCAKEE 監視パネル",
            tag: "STATUS",
            url: COMMON_URLS.monitor,
            icon: Activity,
          }
        ]
      },
      {
        title: "リンク (非公式)",
        items: [
          {
            title: "リソースサイト2（国内最適化版）",
            description: "中国国内ユーザーに推奨、アクセスがより速い",
            tag: "加速",
            url: COMMON_URLS.voicebanksCn,
            icon: ExternalLink,
          },
          {
            title: "iMikufans Community",
            description: "バーチャルシンガーフォーラム：提供：小飯団爱睡觉2（本サイトは.cnであり.comではありません）",
            tag: "コミュニティ",
            url: COMMON_URLS.community,
            icon: Users,
          },
          {
            title: "リソース提供歓迎！",
            tag: "連絡",
            url: COMMON_URLS.noEmailAlert,
            icon: Mail,
          }
        ]
      }
    ],
    hitokoto: {
      loading: "読み込み中...",
      from: "出典",
      unknown: "不明",
      viewDetails: "詳細を見る",
      fallback: "今日も元気でいこう！"
    },
    footer: {
      rights: "VOCAKEE Community. All Rights Reserved."
    }
  },
  'ru': {
    title: "VOCAKEE Community",
    subtitle: "Суперсеть · Портал ресурсов Vocaloid",
    operator: "Оператор: VOCAKEY.WIKI Community",
    sponsor: "Спонсировать",
    linkGroups: [
      {
        title: "Основные ресурсы",
        items: [
          {
            title: "Загрузка голосовых банков",
            tag: "VOCALOID",
            url: COMMON_URLS.voicebanks,
            icon: Download,
            primary: true,
            hasScrollArrow: true
          },
          {
            title: "Документация и Wiki",
            tag: "VOCAKEY WIKI",
            url: COMMON_URLS.vocakey,
            icon: Book,
          }
        ]
      },
      {
        title: "Мониторинг",
        items: [
          {
            title: "Панель мониторинга VOCAKEE",
            tag: "STATUS",
            url: COMMON_URLS.monitor,
            icon: Activity,
          }
        ]
      },
      {
        title: "Дружественные ссылки (Неофициально)",
        items: [
          {
            title: "Хаб ресурсов 2 (CN Оптимизировано)",
            description: "Более быстрый доступ для пользователей в Китае",
            tag: "ЗЕРКАЛО",
            url: COMMON_URLS.voicebanksCn,
            icon: ExternalLink,
          },
          {
            title: "iMikufans Community",
            description: "Форум виртуальных певцов: Provided by XiaoFanTuanAiShuiJiao2 (Это сайт .cn, а не .com)",
            tag: "ФОРУМ",
            url: COMMON_URLS.community,
            icon: Users,
          },
          {
            title: "Приветствуем вклад!",
            tag: "КОНТАКТЫ",
            url: COMMON_URLS.noEmailAlert,
            icon: Mail,
          }
        ]
      }
    ],
    hitokoto: {
      loading: "Загрузка цитаты...",
      from: "Источник",
      unknown: "Неизвестно",
      viewDetails: "Подробнее",
      fallback: "Чудесного дня!"
    },
    footer: {
      rights: "VOCAKEE Community. Все права защищены."
    }
  }
};