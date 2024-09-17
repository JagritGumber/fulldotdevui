import { definePreset, presetUno } from 'unocss'

export default definePreset((options?: any) => {
  return {
    name: 'fullUI',
    presets: [presetUno()],
    theme: {
      spacing: {
        'space-1': 'var(--space-1)',
        'space-2': 'var(--space-2)',
        'space-3': 'var(--space-3)',
        'space-4': 'var(--space-4)',
        'space-5': 'var(--space-5)',
        'space-6': 'var(--space-6)',
        'space-7': 'var(--space-7)',
      },
      borderRadius: {
        1: 'var(--radius-1)',
        2: 'var(--radius-2)',
        3: 'var(--radius-3)',
      },
      fontSize: {
        1: 'var(--text-1)',
        2: 'var(--text-2)',
        3: 'var(--text-3)',
        4: 'var(--text-4)',
        5: 'var(--text-5)',
        6: 'var(--text-6)',
        7: 'var(--text-7)',
        8: 'var(--text-8)',
      },
      colors: {
        color: {
          1: 'var(--color-1)',
          2: 'var(--color-2)',
          3: 'var(--color-3)',
          4: 'var(--color-4)',
          5: 'var(--color-5)',
          6: 'var(--color-6)',
          7: 'var(--color-7)',
          8: 'var(--color-8)',
          9: 'var(--color-9)',
          10: 'var(--color-10)',
          11: 'var(--color-11)',
          12: 'var(--color-12)',
          contrast: 'var(--color-contrast)',
          background: 'var(--color-background)',
        },
        base: {
          1: 'var(--color-base-1)',
          2: 'var(--color-base-2)',
          3: 'var(--color-base-3)',
          4: 'var(--color-base-4)',
          5: 'var(--color-base-5)',
          6: 'var(--color-base-6)',
          7: 'var(--color-base-7)',
          8: 'var(--color-base-8)',
          9: 'var(--color-base-9)',
          10: 'var(--color-base-10)',
          11: 'var(--color-base-11)',
          12: 'var(--color-base-12)',
          contrast: 'var(--color-base-contrast)',
          background: 'var(--color-base-background)',
        },
        brand: {
          1: 'var(--color-brand-1)',
          2: 'var(--color-brand-2)',
          3: 'var(--color-brand-3)',
          4: 'var(--color-brand-4)',
          5: 'var(--color-brand-5)',
          6: 'var(--color-brand-6)',
          7: 'var(--color-brand-7)',
          8: 'var(--color-brand-8)',
          9: 'var(--color-brand-9)',
          10: 'var(--color-brand-10)',
          11: 'var(--color-brand-11)',
          12: 'var(--color-brand-12)',
          contrast: 'var(--color-brand-contrast)',
          background: 'var(--color-brand-background)',
        },
      },
    },
  }
})
