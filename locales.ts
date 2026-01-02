import { Download, Book, Home, Users, Mail, Search } from 'lucide-react';
import { SiteData, Language } from './types';

const COMMON_URLS = {
  voicebanks: "https://voicebanks1.imikufans.com",
  vocakey: "https://vocakey.imikufans.com",
  vocakeySearch: "https://www.bing.com/search?q=vocakey",
  home: "https://iMikufans.com",
  community: "https://flarum.imikufans.cn/",
  email: "mailto:systemzhang123@outlook.com"
};

export const locales: Record<Language, SiteData> = {
  'zh-CN': {
    title: "iMikufans未来之境",
    subtitle: "超级网络 · 虚拟歌手资源下载站",
    operator: "由UP主 Syskuku_雪音詩絵 运营（原 SYSKUKU 研究部）",
    sponsor: "赞助支持 (Buy me a coffee)",
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
          },
          {
            title: "资料与使用手册",
            tag: "VOCAKEY WIKI",
            description: "⚠️ 我们经历了一场VOCAKEY的非法入侵，现在正在恢复，约一周内完成，各位若感觉体验不好可以在下方搜索其他版本的VOCAKEY",
            url: COMMON_URLS.vocakey,
            icon: Book,
          },
          {
            title: "查找其他 VOCAKEY",
            tag: "镜像搜索",
            description: "在 Bing 上搜索其他可用的 VOCAKEY 镜像站",
            url: COMMON_URLS.vocakeySearch,
            icon: Search,
          }
        ]
      },
      {
        title: "主页导航",
        items: [
          {
            title: "iMikufans.com",
            tag: "主页",
            url: COMMON_URLS.home,
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
            url: COMMON_URLS.community,
            icon: Users,
          },
          {
            title: "欢迎资源扩充！",
            tag: "联系",
            url: COMMON_URLS.email,
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
      rights: "iMikufans 未来之境. 保留所有权利."
    }
  },
  'zh-TW': {
    title: "iMikufans未來之境",
    subtitle: "超級網絡 · 虛擬歌手資源下載站",
    operator: "由UP主 Syskuku_雪音詩絵 運營（原 SYSKUKU 研究部）",
    sponsor: "Buy me a coffee",
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
          },
          {
            title: "資料與使用手冊",
            tag: "VOCAKEY WIKI",
            description: "⚠️ 我們經歷了一場VOCAKEY的非法入侵，現在正在恢復，約一周內完成，各位若感覺體驗不好可以在下方搜索其他版本的VOCAKEY",
            url: COMMON_URLS.vocakey,
            icon: Book,
          },
          {
            title: "查找其他 VOCAKEY",
            tag: "鏡像搜索",
            description: "在 Bing 上搜索其他可用的 VOCAKEY 鏡像站",
            url: COMMON_URLS.vocakeySearch,
            icon: Search,
          }
        ]
      },
      {
        title: "主頁導航",
        items: [
          {
            title: "iMikufans.com",
            tag: "主頁",
            url: COMMON_URLS.home,
            icon: Home,
          }
        ]
      },
      {
        title: "友情提供",
        items: [
          {
            title: "iMikufans Community",
            description: "虛擬歌手論壇：有小飯團愛睡覺2提供",
            tag: "社區",
            url: COMMON_URLS.community,
            icon: Users,
          },
          {
            title: "歡迎資源擴充！",
            tag: "聯繫",
            url: COMMON_URLS.email,
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
      rights: "iMikufans 未來之境. 保留所有權利."
    }
  },
  'en': {
    title: "iMikufans Future Realm",
    subtitle: "Super Network · Vocaloid Resource Portal",
    operator: "Operated by Syskuku_YukineShie (Ex-SYSKUKU Research Dept)",
    sponsor: "Buy me a coffee",
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
          },
          {
            title: "Docs & User Manual",
            tag: "VOCAKEY WIKI",
            description: "⚠️ We experienced an illegal intrusion on VOCAKEY. Recovery is underway and expected within a week. If you experience issues, please search for other mirror versions below.",
            url: COMMON_URLS.vocakey,
            icon: Book,
          },
          {
            title: "Find VOCAKEY Mirrors",
            tag: "SEARCH",
            description: "Search for other usable VOCAKEY mirrors on Bing",
            url: COMMON_URLS.vocakeySearch,
            icon: Search,
          }
        ]
      },
      {
        title: "Navigation",
        items: [
          {
            title: "iMikufans.com",
            tag: "HOME",
            url: COMMON_URLS.home,
            icon: Home,
          }
        ]
      },
      {
        title: "Friendly Links",
        items: [
          {
            title: "iMikufans Community",
            description: "Virtual Singer Forum (Provided by XiaoFanTuanAiShuiJiao2)",
            tag: "FORUM",
            url: COMMON_URLS.community,
            icon: Users,
          },
          {
            title: "Contributions Welcome!",
            tag: "CONTACT",
            url: COMMON_URLS.email,
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
      rights: "iMikufans Future Realm. All Rights Reserved."
    }
  },
  'ja': {
    title: "iMikufans未来の境",
    subtitle: "スーパーネットワーク · ボカロリソースポータル",
    operator: "運営：Syskuku_雪音詩絵 (元SYSKUKU研究部)",
    sponsor: "Buy me a coffee",
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
          },
          {
            title: "資料とマニュアル",
            tag: "VOCAKEY WIKI",
            description: "⚠️ VOCAKEYへの不正侵入が発生しました。現在復旧作業中で、約1週間で完了予定です。不具合がある場合は、以下のリンクから他のミラー版を検索してください。",
            url: COMMON_URLS.vocakey,
            icon: Book,
          },
          {
            title: "VOCAKEYミラーを検索",
            tag: "検索",
            description: "Bingで他の利用可能なVOCAKEYミラーを探す",
            url: COMMON_URLS.vocakeySearch,
            icon: Search,
          }
        ]
      },
      {
        title: "ナビゲーション",
        items: [
          {
            title: "iMikufans.com",
            tag: "ホーム",
            url: COMMON_URLS.home,
            icon: Home,
          }
        ]
      },
      {
        title: "リンク",
        items: [
          {
            title: "iMikufans Community",
            description: "バーチャルシンガーフォーラム（提供：小飯団愛睡覚2）",
            tag: "コミュニティ",
            url: COMMON_URLS.community,
            icon: Users,
          },
          {
            title: "リソース提供歓迎！",
            tag: "連絡",
            url: COMMON_URLS.email,
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
      rights: "iMikufans Future Realm. All Rights Reserved."
    }
  },
  'ru': {
    title: "iMikufans Будущее",
    subtitle: "Суперсеть · Портал ресурсов Vocaloid",
    operator: "Оператор: Syskuku_YukineShie (Ex-SYSKUKU Research Dept)",
    sponsor: "Buy me a coffee",
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
          },
          {
            title: "Документация и Wiki",
            tag: "VOCAKEY WIKI",
            description: "⚠️ Мы столкнулись с незаконным вторжением в VOCAKEY. Ведутся работы по восстановлению (около недели). Если сайт работает плохо, воспользуйтесь поиском зеркал ниже.",
            url: COMMON_URLS.vocakey,
            icon: Book,
          },
          {
            title: "Найти зеркала VOCAKEY",
            tag: "ПОИСК",
            description: "Искать рабочие зеркала VOCAKEY в Bing",
            url: COMMON_URLS.vocakeySearch,
            icon: Search,
          }
        ]
      },
      {
        title: "Навигация",
        items: [
          {
            title: "iMikufans.com",
            tag: "ГЛАВНАЯ",
            url: COMMON_URLS.home,
            icon: Home,
          }
        ]
      },
      {
        title: "Дружественные ссылки",
        items: [
          {
            title: "iMikufans Community",
            description: "Форум виртуальных певцов (Provided by XiaoFanTuanAiShuiJiao2)",
            tag: "ФОРУМ",
            url: COMMON_URLS.community,
            icon: Users,
          },
          {
            title: "Приветствуем вклад!",
            tag: "КОНТАКТЫ",
            url: COMMON_URLS.email,
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
      rights: "iMikufans Future Realm. Все права защищены."
    }
  }
};