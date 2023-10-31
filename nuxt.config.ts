import materialIcons from 'quasar/icon-set/svg-material-icons'
import materialIconsRound from 'quasar/icon-set/svg-material-icons-round'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devServer: {
    port: 8000 // por padrão: 3000
  },
  modules: [
    'nuxt-quasar-ui'
  ],
  quasar: {
    plugins: [
      'BottomSheet',
      'Dialog',
      'Loading',
      'LoadingBar',
      'Notify',
      'Dark',
    ],
    iconSet: {
      ...materialIcons,
      colorPicker: materialIconsRound.colorPicker,
    },
    extras: {
      font: 'roboto-font',
      fontIcons: ['material-icons'],
      animations: 'all',
    },
    config: {
      dark: true,
    },
    components: {
      defaults: {
        QBtn: {
          unelevated: true,
        },
      },
    },
  }
})
