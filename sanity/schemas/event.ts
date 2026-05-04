const event = {
  name: "event",
  title: "Event",
  type: "document" as const,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt Text",
          type: "string",
        },
      ],
    },
    {
      name: "avenue",
      title: "Avenue",
      type: "reference",
      to: [{ type: "avenue" }],
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 5,
    },
    {
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt Text", type: "string" }],
        },
      ],
    },
    {
      name: "reportPDF",
      title: "Report PDF",
      type: "file",
      options: { accept: ".pdf" },
    },
  ],
};

export default event;
