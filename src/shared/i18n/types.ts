// Базовый тип для сообщений
type CommonMessages = {
  hello: string;
  welcome: string;
  buttons: {
    save: string;
    cancel: string;
  };
};

// Основной тип схемы сообщений
export type MessageSchema = {
  common: CommonMessages;
};

// Тип для доступных локалей
export type I18nLocales = 'en-US' | 'ru-RU';

// Тип для опций i18n
export interface I18nOptions {
  legacy: boolean;
  locale: I18nLocales;
  fallbackLocale: I18nLocales;
  messages: Record<I18nLocales, MessageSchema>;
}