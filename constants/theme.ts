import { Platform } from 'react-native';

export const OUColors = {
  crimson: '#841617', // Oklahoma Crimson
  darkCrimson: '#4e0002', // Dark Crimson
  black: '#000000',
  darkGray: '#323232',
  lightGray: '#f0f0f0',
  white: '#ffffff',
  cream: '#f2e8d0',
  // Accents
  sky: '#bcdceb',
  leaf: '#8ca57d',
  stone: '#beb4a5',
} as const;

// Semantic light/dark color sets built from OU palette. Choose Crimson as primary in light theme.
const tintColorLight = OUColors.crimson;
const tintColorDark = OUColors.crimson;

export const Colors = {
  light: {
    // Backgrounds and surfaces
    background: OUColors.white,
    surface: OUColors.lightGray,

    // Primary / brand
    primary: OUColors.crimson,
    primaryDark: OUColors.darkCrimson,

    // Text
    text: OUColors.black,
    textOnPrimary: OUColors.white,

    // Accents (use sparingly)
    accentSky: OUColors.sky,
    accentLeaf: OUColors.leaf,
    accentStone: OUColors.stone,

    // Utilities
    border: OUColors.stone,
    tint: tintColorLight,
    icon: OUColors.darkGray,
    tabIconDefault: OUColors.darkGray,
    tabIconSelected: tintColorLight,
  },
  dark: {
    // For dark mode, make Dark Gray the dominant neutral with Crimson as accent
    background: OUColors.darkGray,
    surface: '#202020',

    primary: OUColors.crimson,
    primaryDark: OUColors.darkCrimson,

    text: OUColors.white,
    textOnPrimary: OUColors.white,

    accentSky: OUColors.sky,
    accentLeaf: OUColors.leaf,
    accentStone: OUColors.stone,

    border: '#2b2b2b',
    tint: tintColorDark,
    icon: '#ECEDEE',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
} as const;

//Logos
export const Logos = {
  CenteredWordmarkOU: require('../assets/OU-logos/CenteredWordmarkOU.png'),
  InterlockingOU: require('../assets/OU-logos/InterlockingOU.png'),
  LinearWordmarkOU: require('../assets/OU-logos/LinearWordmarkOU.png'),
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
