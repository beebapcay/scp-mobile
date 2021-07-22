import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Vie from './locales/vi.json';
import Eng from './locales/en.json';
import { ScopeValue } from '../../../models/enum';

export const resources = {
  [ScopeValue.ENG]: {
    translation: Eng,
  },
  [ScopeValue.VIE]: {
    translation: Vie,
  },
};

i18n.use(initReactI18next).init({
  lng: ScopeValue.VIE,
  resources,
});
