import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, detectLanguage, saveLanguage, useTranslation } from '@/lib/i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: any, params?: Record<string, string | number>) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en');
  const { t } = useTranslation(language);
  
  useEffect(() => {
    const detectedLang = detectLanguage();
    setLanguageState(detectedLang);
  }, []);
  
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    saveLanguage(lang);
    
    // Mettre à jour la direction du document pour l'arabe
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };
  
  const isRTL = language === 'ar';
  
  // Mettre à jour la direction initiale
  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}