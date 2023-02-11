import DefaultTheme from 'vitepress/theme'
import './custom.css'

export default {
  // root component to wrap each page
  ...DefaultTheme,

  enhanceApp(ctx) {
    // DefaultTheme.enhanceApp(ctx)
  },
  // this is a Vue 3 functional component
  //NotFound: () => 'custom 404',

  /*enhanceApp({ app, router, siteData }) {
    //console.log(siteData)
    // app is the Vue 3 app instance from `createApp()`.
    // router is VitePress' custom router. `siteData` is
    // a `ref` of current site-level metadata.
  },*/
}
