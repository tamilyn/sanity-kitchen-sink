export default {
  widgets: [
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
                  buildHookId: '5ece95b33400570185a27352',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-uxdpcjq3',
                  apiId: '5037d8e9-9e32-4a9b-b297-bc6a00de8f20'
                },
                {
                  buildHookId: '5ece95b3a0a0ac0259b4288c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-7yjfimi7',
                  apiId: '8ecc7460-dbec-46d5-a587-080cbf8bf371'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tamilyn/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-7yjfimi7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
