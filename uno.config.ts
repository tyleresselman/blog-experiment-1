import {
  defineConfig,
  presetIcons,
  presetWind,
  presetTypography,
} from 'unocss';

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      collections: {
        logos: () =>
          import('@iconify-json/logos/icons.json').then((i) => i.default),
        uil: () =>
          import('@iconify-json/uil/icons.json').then((l) => l.default),
      },
    }),
    presetTypography(),
  ],
  
  theme: {
    colors: {
      togBlue: '#0D198A',    // Base background
      togLime: '#C7FF00',    // Accent lime green
      togLight: '#E1E9FF',   // Optional soft white for text/cards
    },
  },
});
