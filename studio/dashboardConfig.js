export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5ee16cf7a2de517bdcd96146',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-5vgi5pbd',
                  apiId: 'c2d99d2e-1863-428a-8f3d-73165d013ea6'
                },
                {
                  buildHookId: '5ee16cf7a7394b7fd8ba9ff7',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-eghzx7j4',
                  apiId: '4bab131e-dae6-4704-be35-cf0431110048'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nguyenrio18/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-eghzx7j4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
