export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/krish-shah/recipe-site',
            category: 'Code',
          },
          {
            title: 'Frontend',
            value: 'https://',
            category: 'apps',
          },
        ],
      },
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: {
        title: 'Recently edited',
        order: '_updatedAt desc',
        limit: 10,
        types: ['recipe'],
      },
      layout: { width: 'medium' },
    },
  ],
}
