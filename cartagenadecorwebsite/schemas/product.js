export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Default variant',
      name: 'defaultProductVariant',
      type: 'productVariant',
    },
    {
      title: 'Variants',
      name: 'variants',
      type: 'array',
      of: [
        {
          title: 'Variant',
          type: 'productVariant',
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'array',
        of: [{type: 'block'}]
    },
    {
      name: 'features',
      title: 'Features',
      type: 'array',
        of: [{type: 'block'}]
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'category'},
        },
      ],
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'images[0]',
    },
  },
}
