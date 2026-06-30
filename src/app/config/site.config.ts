export type Theme = 'dark' | 'light';
export type Culture = 'el' | 'en';

export const SITE_CONFIG = {
  api: {
    baseUrl: 'https://cafebarrestaurantapi-gjagh7csarhjaxd7.italynorth-01.azurewebsites.net',
    market: 'TavernaMediterra',
  },
  theme: {
    default: 'light' as Theme,
    colors: {
      dark: {
        background: '#0d1f2d',
        surface: '#102637',
        surfaceAlt: '#163245',
        text: '#e8f4f8',
        textMuted: 'rgba(232,244,248,0.5)',
        accent: '#4a9eca',
        accentHover: '#6ab8e0',
        border: 'rgba(74,158,202,0.2)',
        navBg: 'rgba(13,31,45,0.97)',
        overlay: 'rgba(13,31,45,0.65)',
      },
      light: {
        background: '#f0f8ff',
        surface: '#ffffff',
        surfaceAlt: '#e0f0f8',
        text: '#0d1f2d',
        textMuted: 'rgba(13,31,45,0.5)',
        accent: '#1a6fa0',
        accentHover: '#0e5080',
        border: 'rgba(26,111,160,0.2)',
        navBg: 'rgba(240,248,255,0.97)',
        overlay: 'rgba(240,248,255,0.65)',
      },
    },
  },
  images: {
    hero: 'https://images.unsplash.com/photo-1514190051997-0f6f39ca5cde?w=1400&q=80',
    about: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=70',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=70',
      'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=70',
    ],
  },
  business: {
    name: 'Taverna Mediterra',
    address: 'Ποσειδώνος 45, Γλυφάδα',
    addressEn: '45 Poseidonos Ave, Glyfada, Athens',
    phone: '+30 210 894 2310',
    email: 'info@tavernamediterr.gr',
    hours: 'Καθημερινά 12:00–00:00',
    hoursEn: 'Daily 12:00–00:00',
    social: { instagram: 'https://www.instagram.com/tavernamediterr', facebook: 'https://www.facebook.com/tavernamediterr' },
  },
  reservation: {
    defaultTime: '13:00',
    defaultPartySize: 4,
  },
  location: {
    lat: 37.8713,
    lng: 23.7533,
    zoom: 15,
    mapsUrl: 'https://www.google.com/maps?q=37.8713,23.7533',
  },
};
