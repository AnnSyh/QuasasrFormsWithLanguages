import type { MessageSchema } from '../types';

const messages: MessageSchema = {
  common: {
    hello: 'Привет',
    welcome: 'Добро пожаловать',
    buttons: {
      save: 'Сохранить',
      cancel: 'Отмена'
    }
  }
};

export default messages;