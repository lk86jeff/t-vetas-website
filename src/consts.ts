// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'T-Vetas Network';
export const SITE_DESCRIPTION = '致力於成為台灣最可靠的基礎建設服務商';

export const languages = {
    'zh-TW': '中文',
    'en': 'English'
};

export const defaultLang = 'zh-TW';

export type Language = keyof typeof languages;

// 語言內容配置
export const i18n = {
    'zh-TW': {
        nav: {
            home: '首頁',
            services: '服務項目',
            references: '實績案例',
            about: '關於我們',
            partners: '合作夥伴'
        },
        about: {
            title: '關於我們',
            description: 'T-Vetas Network 致力於成為台灣最可靠的基礎建設服務商',
            companyIntro: {
                title: '公司簡介',
                content: 'T-Vetas Network 成立於 2016 年，總部位於台灣...'
            }
            // ...其他翻譯內容
        }
        // ...其他頁面的翻譯
    },
    'en': {
        nav: {
            home: 'Home',
            services: 'Services',
            references: 'References',
            about: 'About',
            partners: 'Partners'
        },
        about: {
            title: 'About Us',
            description: 'T-Vetas Network is committed to becoming Taiwan\'s most reliable infrastructure service provider',
            companyIntro: {
                title: 'Company Profile',
                content: 'Founded in 2016 and headquartered in Taiwan...'
            }
            // ...其他翻譯內容
        }
        // ...其他頁面的翻譯
    }
} as const;

export const navItems = {
    'zh-TW': {
        home: '首頁',
        services: '服務項目',
        references: '實績案例',
        about: '關於我們',
        partners: '合作夥伴'
    },
    'en': {
        home: 'Home',
        services: 'Services',
        references: 'References',
        about: 'About',
        partners: 'Partners'
    }
};
