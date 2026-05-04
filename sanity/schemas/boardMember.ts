const boardMember = {
  name: "boardMember",
  title: "Board Member",
  type: "document" as const,
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "avenue",
      title: "Avenue",
      type: "reference",
      to: [{ type: "avenue" }],
    },
    {
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", title: "Alt Text", type: "string" },
      ],
    },
    {
      name: "linkedIn",
      title: "LinkedIn URL",
      type: "url",
    },
  ],
};

export default boardMember;
