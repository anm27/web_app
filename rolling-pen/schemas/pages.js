export default {
  name: 'pages',
  type: 'document',
  title: 'Pages',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    },

    // {
    //   name: 'type',
    //   type: 'reference',
    //   title: 'Services',
    //   //   validation: (Rule) => Rule.required(),
    //   to: [{type: 'service'}],
    // },
    //   {
    //     name: 'dishes',
    //     type: 'array',
    //     title: 'Dishes',
    //     validation: (Rule) => Rule.required(),
    //     of: [{type: 'reference', to: [{type: 'dishes'}]}],
    //   },
  ],
}
