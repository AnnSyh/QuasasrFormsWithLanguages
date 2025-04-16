import { createI18n } from 'vue-i18n';
import type { I18nOptions, MessageSchema, I18nLocales } from './types';
import enMessages from './locales/en-US';
import ruMessages from './locales/ru-RU';

// Создаем объект сообщений с явной типизацией
const messages = {
  'en-US': enMessages,
  'ru-RU': ruMessages
} satisfies Record<I18nLocales, MessageSchema>;

// Создаем экземпляр i18n
const i18n = createI18n<I18nOptions>({
  legacy: false,
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages
});

// Получаем типизированные методы
const { t, locale } = i18n.global;

// Экспортируем необходимые сущности
export { t, locale };
export default i18n;