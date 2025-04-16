import type { MessageSchema } from '../types';

const messages: MessageSchema = {
  common: {
    hello: 'Hello',
    welcome: 'Welcome to our app',
    buttons: {
      save: 'Save',
      cancel: 'Cancel'
    }
  }
};

export default messages;