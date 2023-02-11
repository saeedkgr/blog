import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'fa',
  base: '/blog/',
  // lastUpdated: true,
  title: ' ',
  titleTemplate: 'وبلاگ',
  description: '',
  ignoreDeadLinks: true,
  themeConfig: {
    //   siteTitle: '',
    //   lastUpdatedText: 'آخرین بروز رسانی',
    //   nav: [{ text: 'صفحه اصلی', link: '/' }],
    //   socialLinks: [],
    outlineTitle: 'در این صفحه',
    //   logo: '/favicon.ico',
    //   docFooter: {
    //     prev: 'صفحه قبل',
    //     next: 'صفحه بعد',
  },
  // sidebar: [
  //   {
  //     collapsible: true,
  //     collapsed: true,
  //     text: 'پشتیبانی',
  //     items: [
  //       {
  //         text: 'نصب و راه اندازی',
  //         link: '/support/installAndUpdateIndex.md',
  //       },
  //       {
  //         text: 'راهنمای نرم افزارها',
  //         link: '/support/softwareGuideindex.md',
  //       },
  //       {
  //         text: 'امور پشتیبانی',
  //         link: '/support/supportingIndex.md',
  //       },
  //       { text: 'ایندکس', link: '/support/' },
  //       { text: 'اطلاعات مشتریان', link: '/customerInfo/' },
  //     ],
  //   },
  //   {
  //     collapsible: true,
  //     collapsed: false,
  //     text: 'اطلاعات و دستورالعملها',
  //     items: [
  //       { text: 'پشتیبانی', link: '/support/' },
  //       { text: 'اداری', link: '/administration/' },
  //       { text: 'مالی', link: '/accounting/' },
  //       { text: 'پشتیبانی شبکه و سخت افزار', link: '/network/' },
  //       { text: 'توسعه', link: '/development/' },
  //       { text: 'مشترک', link: '/common/' },
  //     ],
  //   },
  // ],
  // },
  head: [
    // [
    //   'link',
    //   {
    //     rel: 'icon',
    //     type: 'image/x-icon',
    //     href: '/docs/guide/favicon.ico',
    //   },
    // ],
  ],
})
