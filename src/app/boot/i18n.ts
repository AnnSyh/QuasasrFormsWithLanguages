import { boot } from 'quasar/wrappers';
import i18n from '#shared/i18n';

export default boot(({ app }) => {
  app.use(i18n);
});