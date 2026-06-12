'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from '../../i18n/utils';
import { defaultLang, ui } from '../../i18n/ui';

export default function NotFound() {
  const params = useParams();
  const lang = (params?.lang as keyof typeof ui) ?? defaultLang;
  const t = useTranslations(lang);

  return (
    <main className="mx-auto my-16 flex min-h-[400px] flex-col items-center justify-center gap-6 px-4 text-center lg:max-w-5xl lg:px-0">
      <h1 className="text-4xl font-bold">{t('not-found.title')}</h1>
      <p className="text-gray-600">{t('not-found.description')}</p>
      <Link
        href={`/${defaultLang}`}
        className="btn btn-outline inline-flex items-center gap-2 !no-underline">
        <span>{t("Retour à l'accueil")}</span>
      </Link>
    </main>
  );
}
