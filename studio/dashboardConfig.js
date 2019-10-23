export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5db09e939e3c03019417ffce',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio1-studio-momrqsjs',
                  apiId: '1c4ab3b5-3040-4703-9fae-368ca9aa4b50'
                },
                {
                  buildHookId: '5db09e94513153018f498966',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio1-web-jtfaqyam',
                  apiId: '23e1d696-be2e-4a41-bab4-9f8ea8d6d7a9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/justinmaclachlan/sanity-gatsby-portfolio1',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio1-web-jtfaqyam.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
