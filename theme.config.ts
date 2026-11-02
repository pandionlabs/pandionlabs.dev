import { defineThemeConfig } from '@utils/defineThemeConfig'
import previewImage from '@assets/img/social-preview-image.png'
import logoImage from '@assets/img/aster logo v2.svg'

export default defineThemeConfig({
  name: '',
  id: 'aster-website',
  seo: {
    title: 'Aster',
    subtitle: 'Every bee counts',
    description: 'Aster is the app that helps beekeepers beekeep better',
    image: previewImage,
  },
  logo: logoImage,
  colors: {
    primary: '#bb78ff',
    secondary: '#f8d96c',
    neutral: '#fffcf6',
    outline: '#161616',
  },
  navigation: {
    darkmode: true,
    items: [
      {
        type: 'link',
        label: 'Home',
        href: '/',
      },
      // {
      //         type: 'link',
      //         label: 'Blog',
      //         href: '/blog',
      //       },
      // {
      //         type: 'link',
      //         label: 'Portfolio',
      //         href: '/portfolio',
      //       },
      // {
      //         type: 'dropdown',
      //         label: 'Features',
      //         items: [
      //           {
      //                       label: 'Accessibility statement',
      //                       href: '/accessibility-statement',
      //                     },
      //           {
      //                       label: 'Accessible components',
      //                       href: '/accessible-components',
      //                     },
      //           {
      //                       label: 'Accessible launcher',
      //                       href: '/accessible-launcher',
      //                     },
      //           {
      //                       label: 'Color contrast checker',
      //                       href: '/color-contrast-checker',
      //                     },
      //           {
      //                       label: 'Markdown page',
      //                       href: '/markdown-page',
      //                     },
      //           {
      //                       label: 'MDX page',
      //                       href: '/mdx-page',
      //                     },
      //           {
      //                       label: 'Sitemap',
      //                       href: '/sitemap',
      //                     }
      //         ],
      //       },
      {
        type: 'link',
        label: 'Contact',
        href: '/contact',
      },
    ],
  },
  socials: [],
})
