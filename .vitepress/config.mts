import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config
export default withMermaid ({
  title: "Bts SIO",
  description: "Documentation pour le bts sio",
  head: [
    ['link', { rel: "icon", type: "image/png", href: "/icons/alien.png" }],
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
              },
              {
                text: 'Tests unitaires',
                collapsed: true,

                items: [
                  { text: '1 - Découverte', link: '/tp/testUnitaire/1-decouverte.md' },
                  { text: '2 - Découverte', link: '/tp/testUnitaire/2-decouverte.md' },
                  { text: '3 - Jest', link: '/tp/testUnitaire/jest/1-jest.md' },
                ]
              }
            ]
          },
        ]
      },
      {
        items: [
          {
            text: 'Mémos',
            collapsed: true,
            items: [
              { text: 'HTML', link: '/memo/html.md' },
              { text: 'CSS', link: '/memo/css.md' },
              { text: 'JS', link: '/memo/js.md' },

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
