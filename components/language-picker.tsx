'use client';

import { code_languages, languages, ui } from '../i18n/ui';
import { useTranslations } from '../i18n/utils';
import { useRouter } from 'next/navigation';
import { FunctionComponent } from 'react';

interface LanguagePickerProps {
  lang?: keyof typeof ui;
  style?: string;
}
export const LanguagePicker: FunctionComponent<LanguagePickerProps> = ({
  lang = 'fr',
  style = 'dark',
}) => {
  const t = useTranslations(lang);
  const router = useRouter();
  if (!(code_languages.length > 1)) {
    return null;
  }
  const customStyle =
    style === 'dark'
      ? 'bg-green-600 text-white lg:bg-slate-600 lg:text-white'
      : 'bg-white text-slate-900';
  const onChange = (e) => {
    router.push(`/${e.target.value}`);
  };
  return (
    <label htmlFor="lang-select">
      <span className="sr-only">{t('Language picker')}</span>
      <select
        id="lang-select"
        onChange={onChange}
        className={`rounded-sm py-1 text-sm font-bold ${customStyle}`}>
        <option>{t('Changer de langue')}</option>
        {Object.entries(languages).map(([language, label]) => (
          <option
            key={language}
            value={language}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
};
