import merge from 'deepmerge'
import type { Preset } from 'unocss'
import { presetRadix, type RadixColors } from 'unocss-preset-radix'

interface CustomPalette {
  1: string
  2: string
  3: string
  4: string
  5: string
  6: string
  7: string
  8: string
  9: string
  10: string
  11: string
  12: string
}

type Hue = RadixColors
// | CustomPalette
// | {
//     light: CustomPalette
//     dark: CustomPalette
//   }

type Step =
  // base
  | 'base1'
  | 'base2'
  | 'base3'
  | 'base4'
  | 'base5'
  | 'base6'
  | 'base7'
  | 'base8'
  | 'base9'
  | 'base10'
  | 'base11'
  | 'base12'
  | 'base-fg'
  // accent
  | 'accent1'
  | 'accent2'
  | 'accent3'
  | 'accent4'
  | 'accent5'
  | 'accent6'
  | 'accent7'
  | 'accent8'
  | 'accent9'
  | 'accent10'
  | 'accent11'
  | 'accent12'
  | 'accent-fg'
  // transparent
  | null

interface Impact {
  // default
  bg?: Step
  ring?: Step
  text?: Step
  heading?: Step
  // section
  sectionBg?: Step
  sectionRing?: Step
  sectionText?: Step
  sectionHeading?: Step
  // card
  cardBg?: Step
  cardRing?: Step
  cardText?: Step
  cardHeading?: Step
  // input
  inputBg?: Step
  inputRing?: Step
  inputText?: Step
  // primary
  primaryBg?: Step
  primaryBgHover?: Step
  primaryBgActive?: Step
  primaryRing?: Step
  primaryRingHover?: Step
  primaryText?: Step
  // secondary
  secondaryBg?: Step
  secondaryBgHover?: Step
  secondaryBgActive?: Step
  secondaryRing?: Step
  secondaryRingHover?: Step
  secondaryText?: Step
}

export interface Config {
  colors?: {
    scheme?: 'dark' | 'light'
    accent?: Hue
    base?: Hue
  }
  impacts?: {
    low?: Impact
    medium?: Impact
    high?: Impact
    solid?: Impact
    extreme?: Impact
  }
}

const defaultConfig: Config = {
  colors: {
    scheme: 'light',
    base: 'slate',
    accent: 'indigo',
  },
  impacts: {
    low: {
      bg: 'base1',
      ring: 'base6',
      text: 'base11',
      heading: 'base12',
      sectionBg: 'base1',
      sectionRing: null,
      sectionText: 'base11',
      sectionHeading: 'base12',
      cardBg: null,
      cardRing: null,
      cardText: 'base11',
      cardHeading: 'base12',
      inputBg: 'base2',
      inputRing: 'base6',
      inputText: 'base11',
      primaryBg: 'accent3',
      primaryBgHover: 'accent4',
      primaryBgActive: 'accent5',
      primaryRing: 'accent7',
      primaryRingHover: 'accent8',
      primaryText: 'accent11',
      secondaryBg: null,
      secondaryBgHover: 'accent2',
      secondaryBgActive: 'accent3',
      secondaryRing: null,
      secondaryRingHover: null,
      secondaryText: 'accent11',
    },
    medium: {
      bg: 'base1',
      ring: 'base6',
      text: 'base11',
      heading: 'base12',
      sectionBg: 'base1',
      sectionRing: null,
      sectionText: 'base11',
      sectionHeading: 'base12',
      cardBg: 'base2',
      cardRing: 'base6',
      cardText: 'base11',
      cardHeading: 'base12',
      inputBg: 'base2',
      inputRing: 'base6',
      inputText: 'base11',
      primaryBg: 'accent9',
      primaryBgHover: 'accent10',
      primaryBgActive: 'accent10',
      primaryRing: 'accent10',
      primaryRingHover: 'accent10',
      primaryText: 'accent-fg',
      secondaryBg: 'accent3',
      secondaryBgHover: 'accent4',
      secondaryBgActive: 'accent5',
      secondaryRing: 'accent7',
      secondaryRingHover: 'accent8',
      secondaryText: 'accent11',
    },
    high: {
      bg: 'base2',
      ring: 'base6',
      text: 'base11',
      heading: 'base12',
      sectionBg: 'accent2',
      sectionRing: 'accent6',
      sectionText: 'base11',
      sectionHeading: 'base12',
      cardBg: 'base2',
      cardRing: 'base6',
      cardText: 'base11',
      cardHeading: 'base12',
      inputBg: 'base2',
      inputRing: 'base6',
      inputText: 'base11',
      primaryBg: 'accent9',
      primaryBgHover: 'accent10',
      primaryBgActive: 'accent10',
      primaryRing: 'accent10',
      primaryRingHover: 'accent10',
      primaryText: 'accent-fg',
      secondaryBg: 'accent3',
      secondaryBgHover: 'accent4',
      secondaryBgActive: 'accent5',
      secondaryRing: 'accent7',
      secondaryRingHover: 'accent8',
      secondaryText: 'accent11',
    },
    solid: {
      bg: 'base12',
      ring: null,
      text: 'base6',
      heading: 'base1',
      sectionBg: 'base12',
      sectionRing: null,
      sectionText: 'base1',
      sectionHeading: 'base1',
      cardBg: 'base12',
      cardRing: 'base11',
      cardText: 'base1',
      cardHeading: 'base1',
      inputBg: 'base12',
      inputRing: 'base12',
      inputText: 'base1',
      primaryBg: 'accent9',
      primaryBgHover: 'accent10',
      primaryBgActive: 'accent10',
      primaryRing: null,
      primaryRingHover: null,
      primaryText: 'accent-fg',
      secondaryBg: null,
      secondaryBgHover: null,
      secondaryBgActive: null,
      secondaryRing: 'accent9',
      secondaryRingHover: 'accent10',
      secondaryText: 'accent1',
    },
    extreme: {
      bg: 'accent9',
      ring: 'accent-fg',
      text: 'accent-fg',
      heading: 'accent-fg',
      sectionBg: 'accent9',
      sectionRing: null,
      sectionText: 'accent-fg',
      sectionHeading: 'accent-fg',
      cardBg: 'accent9',
      cardRing: 'accent-fg',
      cardText: 'accent-fg',
      cardHeading: 'accent-fg',
      inputBg: 'accent9',
      inputRing: 'accent-fg',
      inputText: 'accent-fg',
      primaryBg: 'accent-fg',
      primaryBgHover: 'accent-fg',
      primaryBgActive: 'accent-fg',
      primaryRing: 'accent-fg',
      primaryRingHover: 'accent-fg',
      primaryText: 'accent9',
      secondaryBg: null,
      secondaryBgHover: null,
      secondaryBgActive: null,
      secondaryRing: 'accent-fg',
      secondaryRingHover: 'accent-fg',
      secondaryText: 'accent-fg',
    },
  },
}

export default function preset(passedConfig?: Config): Preset {
  let config: any = merge(defaultConfig, passedConfig || {}) as Config

  function varValue(value: Step): string {
    if (!value) return 'transparent'
    let paletteName: any = ''
    if (value?.includes('base')) paletteName = config.colors['base']
    if (value?.includes('accent')) paletteName = config.colors['accent']
    return `var(--un-preset-radix-${value?.replace('base', paletteName).replace('accent', paletteName)})`
  }

  function generateThemeCSS(key: string, impact: any): string {
    return `
      ${key === 'medium' ? ':root,' : ''}
      :where(.impact-${key}) {
        --bg: ${varValue(impact.bg)};
        --ring: ${varValue(impact.ring)};
        --text: ${varValue(impact.text)};
        --heading: ${varValue(impact.heading)};
        --section-bg: ${varValue(impact.sectionBg)};
        --section-ring: ${varValue(impact.sectionRing)};
        --section-text: ${varValue(impact.sectionText)};
        --section-heading: ${varValue(impact.sectionHeading)};
        --card-bg: ${varValue(impact.cardBg)};
        --card-ring: ${varValue(impact.cardRing)};
        --card-text: ${varValue(impact.cardText)};
        --card-heading: ${varValue(impact.cardHeading)};
        --input-bg: ${varValue(impact.inputBg)};
        --input-ring: ${varValue(impact.inputRing)};
        --input-text: ${varValue(impact.inputText)};
        --primary-bg: ${varValue(impact.primaryBg)};
        --primary-bg-hover: ${varValue(impact.primaryBgHover)};
        --primary-bg-active: ${varValue(impact.primaryBgActive)};
        --primary-ring: ${varValue(impact.primaryRing)};
        --primary-ring-hover: ${varValue(impact.primaryRingHover)};
        --primary-text: ${varValue(impact.primaryText)};
        --secondary-bg: ${varValue(impact.secondaryBg)};
        --secondary-bg-hover: ${varValue(impact.secondaryBgHover)};
        --secondary-bg-active: ${varValue(impact.secondaryBgActive)};
        --secondary-ring: ${varValue(impact.secondaryRing)};
        --secondary-ring-hover: ${varValue(impact.secondaryRingHover)};
        --secondary-text: ${varValue(impact.secondaryText)};
      }

      .scheme-light .scheme-reverse {
        --at-apply: scheme-dark;
      }
      .scheme-light .scheme-reverse {
        --at-apply: scheme-dark;
      }
    `
  }

  return {
    name: 'unocss-preset-theme',
    presets: [
      presetRadix({
        darkSelector:
          config.colors.scheme === 'dark'
            ? ':root, .scheme-dark'
            : '.scheme-dark .scheme-reverse',
        lightSelector:
          config.colors.scheme === 'light'
            ? ':root, .scheme-light'
            : '.scheme-light .scheme-reverse',
        palette: [config.colors.base, config.colors.accent],
      }),
    ],
    preflights: [
      ...Object.entries(config.impacts).map(([key, value]) => ({
        getCSS: () => generateThemeCSS(key, value),
      })),
    ],
  }
}
