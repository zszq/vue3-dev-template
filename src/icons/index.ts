import type { App } from 'vue';
import 'virtual:svg-icons-register';
import SvgIcon from './SvgIcon.vue';

export default {
  install: (app: App) => {
    app.component('svg-icon', SvgIcon);
  }
};
