'use client';

import React, { createContext, useContext } from 'react';

import { LexiqueQuery } from '../../tina/__generated__/types';
import { ui } from '../../i18n/ui';

type Lang = keyof typeof ui;

interface LexiqueContextType {
  lang: Lang;
  lexiqueData?: Record<string, LexiqueQuery['lexique'] | null>;
}

const LexiqueContext = createContext<LexiqueContextType | undefined>(undefined);

export function LexiqueProvider({
  children,
  lang,
  lexiqueData,
}: {
  children: React.ReactNode;
  lang: Lang;
  lexiqueData?: Record<string, LexiqueQuery['lexique'] | null>;
}) {
  return (
    <LexiqueContext.Provider value={{ lang, lexiqueData }}>
      {children}
    </LexiqueContext.Provider>
  );
}

export function useLexiqueContext() {
  const context = useContext(LexiqueContext);
  // Si le contexte n'est pas disponible, utiliser la langue par défaut
  if (context === undefined) {
    return { lang: 'fr' as Lang, lexiqueData: undefined };
  }
  return context;
}
