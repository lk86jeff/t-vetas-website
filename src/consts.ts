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
        footer: {
            slogan: '致力於成為最可靠的基礎建設服務商',
            address: '台北市內湖區堤頂大道二段283號3樓',
            contactTitle: '聯絡資訊',
            phone: '電話：070-101-85099',
            email: 'Email：sales@t-vetas.com.tw',
            serviceTitle: '服務時間',
            serviceDays: '週一至週五',
            serviceHours: '09:00 - 18:00',
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
        footer: {
            slogan: 'Committed to being the most reliable infrastructure service provider',
            address: '3 F., No. 283, Sec. 2, Tiding Blvd., Neihu Dist., Taipei City 114064, Taiwan (R.O.C.)',
            contactTitle: 'Contact',
            phone: 'Tel: 070-101-85099',
            email: 'Email: sales@t-vetas.com.tw',
            serviceTitle: 'Service Hours',
            serviceDays: 'Monday to Friday',
            serviceHours: '09:00 - 18:00(UTC+8)',ㄕ
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
