import { Caveat, DM_Sans } from "next/font/google";
import { ColorScheme } from "./types/shared";

/**
 * "system" - follows the user's system appearance
 * "light" - forces your website to always use light theme
 * "dark" - forces your website to always use dark theme
 */
export const THEME: "system" | "light" | "dark" = "dark";

/**
 * Your App Store App ID without the 'id' prefix.
 * Replace this once the new App Store Connect record shows the Apple ID.
 */
export const APP_ID = "1234567890";

/**
 * Custom fonts for 'whimsical' and 'cursive' font styles.
 * Default system font is used for all other font styles.
 */
export const WHIMSICAL_FONT = Caveat({ subsets: ["latin"] });
export const CURSIVE_FONT = DM_Sans({ subsets: ["latin"] });

export const MATERIAL_SYMBOLS = [
  "send",
  "check_circle",
  "star",
  "mail",
  "open_in_new",
  "open_in_full",
  "play_arrow",
  "pause",
  "lock",
  "target",
] as const;

export const COLORS: ColorScheme = {
  LIGHT: {
    "text-primary": "#101114",
    "text-secondary": "rgba(43, 46, 56, 0.70)",
    "fill-0": "#F5F1EA",
    "fill-1": "#ECE4D7",
    "fill-2": "#E0D3BE",
    "fill-3": "#C9B89D",
    "accent-brand": "#101114",
    "accent-orange": "#BE8A43",
    "accent-green": "#2E8B57",
    "accent-red": "#B24C3E",
    "accent-blue": "#3C5E7A",
    "accent-indigo": "#56618D",
    "accent-mint": "#49857E",
    "accent-purple": "#7A5A87",
    "accent-pink": "#A55A6B",
  },
  DARK: {
    "text-primary": "#F6F1E8",
    "text-secondary": "rgba(234, 224, 208, 0.72)",
    "fill-0": "#121211",
    "fill-1": "#181714",
    "fill-2": "#23211D",
    "fill-3": "#312C25",
    "accent-brand": "#E7D2B4",
    "accent-orange": "#C99856",
    "accent-green": "#54A071",
    "accent-red": "#D16B57",
    "accent-blue": "#6E92B0",
    "accent-indigo": "#8A8FCE",
    "accent-mint": "#73B7B0",
    "accent-purple": "#A787C3",
    "accent-pink": "#C97992",
  },
} as const;

export const MAX_RELEASE_NOTES_PER_PAGE = 5;

export const IS_WAITLIST_ENABLED = false;
