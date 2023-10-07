export default {
  name: 'project',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Project Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Project Description',
    },
    {
      name: 'content',
      type: 'array',
      title: 'Project Image',
      of: [
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative Text',
            },
          ],
        },
      ],
    },

    {
      name: 'all_links',
      type: 'array',
      title: 'Project Links',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'logo',
              title: 'Logo Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
          ],
          preview: {
            select: {
              title: 'name',
              media: 'logo',
            },
          },
        },
      ],
    },

    {
      name: 'technologies',
      type: 'array',
      title: 'Tech stack',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'logo',
              title: 'Logo Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
