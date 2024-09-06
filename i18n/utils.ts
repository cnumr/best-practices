import { ui, defaultLang } from './ui';

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

/**
 * Test if the string is in the ui for the lang passed or for the default lang
 * @param lang {keyof typeof ui} The lang to test
 * @param key {string | undefined} The key to test
 * @returns {boolean} True if the key is in the ui for the lang passed or for the default lang
 */
export function isStringInUi(lang: keyof typeof ui, key: string | undefined) {
  if (!key) return false;
  return key in ui[lang] || key in ui[defaultLang];
}
