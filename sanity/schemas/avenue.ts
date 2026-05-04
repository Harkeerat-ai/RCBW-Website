const avenue = {
  name: "avenue",
  title: "Avenue",
  type: "document" as const,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "color",
      title: "Color",
      type: "string",
      description: "Hex color code for the avenue (e.g., #DC2626)",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    },
    {
      name: "icon",
      title: "Icon",
      type: "string",
      description: "Icon name (e.g., heart, globe, briefcase, trophy, users)",
    },
  ],
};

export default avenue;
