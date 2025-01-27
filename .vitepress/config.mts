import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Bts SIO",
  description: "Documentation pour le bts sio",
  base: '/docBtsSio/',
  head: [
    ['link', { rel: "icon", type: "image/png", href: "/docBtsSio/icons/alien.png"}],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Accueil', link: '/' },
    ],
    logo: '/icons/alien.png',
    outline: {
      label: "Sommaire"
    },
    docFooter: {
      prev: false,
      next: false
    },

    sidebar: [
      {
        items: [
          {
            text: 'Travaux pratiques',
            collapsed: true,
            items: [
              {
                text: 'PHP',
                collapsed: true,

                items: [
                  { text: '1 - Les conditions', link: '/tp/php/1-condition.md' },
                  { text: '2 - Les tableaux associatifs', link: '/tp/php/2-tableaux.md' },
                  { text: '3 - $_GET et $_POST', link: '/tp/php/3-get-post.md' },
                ]
              }
            ]
          },
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
