import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: {
      header: {
        locale: {
          en: 'English',
          pt: 'Portuguese',
        },
      },
      hero: {
        header: 'FullStack Dev always ready to learn and ship code',
      },
    },
    pt: {
      header: {
        locale: {
          en: 'Inglês',
          pt: 'Português',
        },
      },
      hero: {
        header: 'FullStack Dev sempre pronto para aprender e enviar código',
      },
    },
  },
});

export default i18n;
