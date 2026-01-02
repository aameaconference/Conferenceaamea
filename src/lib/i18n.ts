// Système de traduction multilingue pour AAMEA Conference 2026
// Langues supportées : EN (défaut), FR, AR

export type Language = 'en' | 'fr' | 'ar';

export interface Translations {
  // Navigation
  home: string;
  partners: string;
  contact: string;
  
  // Hero Section
  heroTitle: string;
  heroSubtitle: string;
  heroDate: string;
  whyPartnerTitle: string;
  whyPartnerDescription: string;
  becomePartnerCTA: string;
  downloadBooklet: string;
  registerNow: string;
  
  // Countdown
  countdownTitle: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  
  // Why Attend Section
  whyAttendTitle: string;
  whyAttend1: string;
  whyAttend2: string;
  whyAttend3: string;
  
  // Conference Pillars
  pillarsTitle: string;
  reconnect: string;
  reimagine: string;
  rebuild: string;
  reignite: string;
  
  // Testimonials
  testimonialsTitle: string;
  
  // Partners Section
  partnersTitle: string;
  becomePartner: string;
  partnershipIntro: string;
  downloadProposal: string;
  applyPartner: string;
  whatsapp: string;
  
  // Contact
  contactTitle: string;
  contactSubtitle: string;
  name: string;
  email: string;
  country: string;
  subject: string;
  message: string;
  sendMessage: string;
  
  // Footer
  allRightsReserved: string;
  
  // Form subjects
  generalInquiry: string;
  partnership: string;
  media: string;
  volunteer: string;
  technicalIssue: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    // Navigation
    home: 'Home',
    partners: 'Partners',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'AAMEA Regional Alumni Conference 2026',
    heroSubtitle: 'Reconnect. Reimagine. Rebuild. Reignite.',
    heroDate: 'Kigali, Rwanda — August 12–14, 2026',
    whyPartnerTitle: 'Why Partner with AAMEA 2026?',
    whyPartnerDescription: 'Join the most influential gathering of AIESEC alumni across the Middle East and Africa. Connect with 500+ leaders, decision-makers, and innovators who are shaping the future of our region.',
    becomePartnerCTA: 'Become a Conference Partner',
    downloadBooklet: 'Download Delegate Booklet',
    registerNow: 'Register Now',
    
    // Countdown
    countdownTitle: 'Only {days} Days Until the Conference',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    
    // Why Attend Section
    whyAttendTitle: 'Why Attend?',
    whyAttend1: 'Reconnect with 25,000+ leaders',
    whyAttend2: 'Co-create ventures across borders',
    whyAttend3: 'Shape the future of MEA',
    
    // Conference Pillars
    pillarsTitle: 'Conference Pillars',
    reconnect: 'Reconnect',
    reimagine: 'Reimagine',
    rebuild: 'Rebuild',
    reignite: 'Reignite',
    
    // Testimonials
    testimonialsTitle: 'What Alumni Say',
    
    // Partners Section
    partnersTitle: 'Shape the Future Together — Become a Partner of AAMEA 2026',
    becomePartner: 'Become a Partner',
    partnershipIntro: 'Join 50+ institutions shaping the future of leadership, innovation, and entrepreneurship across the Middle East and Africa.',
    downloadProposal: 'Download Partnership Proposal',
    applyPartner: 'Apply as Partner/Sponsor',
    whatsapp: 'WhatsApp',
    
    // Contact
    contactTitle: 'Let\'s Build the Future Together',
    contactSubtitle: 'Get in touch with our team',
    name: 'Name',
    email: 'Email',
    country: 'Country',
    subject: 'Subject',
    message: 'Message',
    sendMessage: 'Send Message',
    
    // Footer
    allRightsReserved: '© AAMEA Conference 2026. All rights reserved.',
    
    // Form subjects
    generalInquiry: 'General Inquiry',
    partnership: 'Partnership',
    media: 'Media',
    volunteer: 'Volunteer',
    technicalIssue: 'Technical Issue',
  },
  
  fr: {
    // Navigation
    home: 'Accueil',
    partners: 'Partenaires',
    contact: 'Contact',
    
    // Hero Section
    heroTitle: 'Conférence Régionale des Alumni AAMEA 2026',
    heroSubtitle: 'Reconnectez. Réinventez. Reconstruisez. Rallumez.',
    heroDate: 'Kigali, Rwanda — 12–14 août 2026',
    whyPartnerTitle: 'Pourquoi devenir partenaire d\'AAMEA 2026 ?',
    whyPartnerDescription: 'Rejoignez le rassemblement le plus influent des alumni d\'AIESEC au Moyen-Orient et en Afrique. Connectez-vous avec plus de 500 leaders, décideurs et innovateurs qui façonnent l\'avenir de notre région.',
    becomePartnerCTA: 'Devenir Partenaire de la Conférence',
    downloadBooklet: 'Télécharger le Livret Délégué',
    registerNow: 'S\'inscrire Maintenant',
    
    // Countdown
    countdownTitle: 'Plus que {days} jours avant la conférence',
    days: 'Jours',
    hours: 'Heures',
    minutes: 'Minutes',
    seconds: 'Secondes',
    
    // Why Attend Section
    whyAttendTitle: 'Pourquoi Participer ?',
    whyAttend1: 'Reconnectez avec 25 000+ leaders',
    whyAttend2: 'Co-créez des entreprises transfrontalières',
    whyAttend3: 'Façonnez l\'avenir de la région MEA',
    
    // Conference Pillars
    pillarsTitle: 'Piliers de la Conférence',
    reconnect: 'Reconnectez',
    reimagine: 'Réinventez',
    rebuild: 'Reconstruisez',
    reignite: 'Rallumez',
    
    // Testimonials
    testimonialsTitle: 'Ce que disent les Alumni',
    
    // Partners Section
    partnersTitle: 'Façonnons l\'Avenir Ensemble — Devenez Partenaire d\'AAMEA 2026',
    becomePartner: 'Devenir Partenaire',
    partnershipIntro: 'Rejoignez 50+ institutions qui façonnent l\'avenir du leadership, de l\'innovation et de l\'entrepreneuriat au Moyen-Orient et en Afrique.',
    downloadProposal: 'Télécharger la Proposition de Partenariat',
    applyPartner: 'Postuler comme Partenaire/Sponsor',
    whatsapp: 'WhatsApp',
    
    // Contact
    contactTitle: 'Construisons l\'Avenir Ensemble',
    contactSubtitle: 'Contactez notre équipe',
    name: 'Nom',
    email: 'Email',
    country: 'Pays',
    subject: 'Sujet',
    message: 'Message',
    sendMessage: 'Envoyer le Message',
    
    // Footer
    allRightsReserved: '© Conférence AAMEA 2026. Tous droits réservés.',
    
    // Form subjects
    generalInquiry: 'Demande Générale',
    partnership: 'Partenariat',
    media: 'Médias',
    volunteer: 'Bénévolat',
    technicalIssue: 'Problème Technique',
  },
  
  ar: {
    // Navigation
    home: 'الرئيسية',
    partners: 'الشركاء',
    contact: 'اتصل بنا',
    
    // Hero Section
    heroTitle: 'مؤتمر خريجي AAMEA الإقليمي 2026',
    heroSubtitle: 'إعادة الاتصال. إعادة التصور. إعادة البناء. إعادة الإشعال.',
    heroDate: 'كيغالي، رواندا — 12-14 أغسطس 2026',
    whyPartnerTitle: 'لماذا تصبح شريكاً في AAMEA 2026؟',
    whyPartnerDescription: 'انضم إلى أكثر التجمعات تأثيراً لخريجي AIESEC في الشرق الأوسط وأفريقيا. تواصل مع أكثر من 500 قائد وصانع قرار ومبتكر يشكلون مستقبل منطقتنا.',
    becomePartnerCTA: 'كن شريكاً في المؤتمر',
    downloadBooklet: 'تحميل كتيب المندوب',
    registerNow: 'سجل الآن',
    
    // Countdown
    countdownTitle: 'فقط {days} يوم حتى المؤتمر',
    days: 'أيام',
    hours: 'ساعات',
    minutes: 'دقائق',
    seconds: 'ثواني',
    
    // Why Attend Section
    whyAttendTitle: 'لماذا تحضر؟',
    whyAttend1: 'إعادة الاتصال مع أكثر من 25,000 قائد',
    whyAttend2: 'إنشاء مشاريع عبر الحدود',
    whyAttend3: 'تشكيل مستقبل منطقة الشرق الأوسط وأفريقيا',
    
    // Conference Pillars
    pillarsTitle: 'أركان المؤتمر',
    reconnect: 'إعادة الاتصال',
    reimagine: 'إعادة التصور',
    rebuild: 'إعادة البناء',
    reignite: 'إعادة الإشعال',
    
    // Testimonials
    testimonialsTitle: 'ما يقوله الخريجون',
    
    // Partners Section
    partnersTitle: 'لنشكل المستقبل معاً — كن شريكاً في AAMEA 2026',
    becomePartner: 'كن شريكاً',
    partnershipIntro: 'انضم إلى أكثر من 50 مؤسسة تشكل مستقبل القيادة والابتكار وريادة الأعمال في الشرق الأوسط وأفريقيا.',
    downloadProposal: 'تحميل اقتراح الشراكة',
    applyPartner: 'تقدم كشريك/راعي',
    whatsapp: 'واتساب',
    
    // Contact
    contactTitle: 'لنبني المستقبل معاً',
    contactSubtitle: 'تواصل مع فريقنا',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    country: 'البلد',
    subject: 'الموضوع',
    message: 'الرسالة',
    sendMessage: 'إرسال الرسالة',
    
    // Footer
    allRightsReserved: '© مؤتمر AAMEA 2026. جميع الحقوق محفوظة.',
    
    // Form subjects
    generalInquiry: 'استفسار عام',
    partnership: 'شراكة',
    media: 'إعلام',
    volunteer: 'تطوع',
    technicalIssue: 'مشكلة تقنية',
  },
};

// Détection automatique de la langue
export function detectLanguage(): Language {
  // 1. Vérifier localStorage
  const savedLang = localStorage.getItem('aa-mea-language') as Language;
  if (savedLang && ['en', 'fr', 'ar'].includes(savedLang)) {
    return savedLang;
  }
  
  // 2. Détecter la langue du navigateur
  const browserLang = navigator.language.toLowerCase();
  
  if (browserLang.startsWith('fr')) return 'fr';
  if (browserLang.startsWith('ar')) return 'ar';
  
  // 3. Détection géographique basique (peut être améliorée avec une API)
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  // Zones francophones
  if (timezone.includes('Africa/Casablanca') || 
      timezone.includes('Africa/Algiers') || 
      timezone.includes('Africa/Tunis') ||
      timezone.includes('Europe/Paris')) {
    return 'fr';
  }
  
  // Zones arabophones
  if (timezone.includes('Asia/Riyadh') || 
      timezone.includes('Asia/Dubai') || 
      timezone.includes('Africa/Cairo')) {
    return 'ar';
  }
  
  // Défaut : anglais
  return 'en';
}

// Hook pour utiliser les traductions
export function useTranslation(language: Language) {
  const t = (key: keyof Translations, params?: Record<string, string | number>): string => {
    let text = translations[language][key];
    
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        text = text.replace(`{${param}}`, String(value));
      });
    }
    
    return text;
  };
  
  return { t };
}

// Sauvegarder la langue sélectionnée
export function saveLanguage(language: Language) {
  localStorage.setItem('aa-mea-language', language);
}