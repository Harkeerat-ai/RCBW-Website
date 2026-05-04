const newsletter = {
  name: "newsletter",
  title: "Newsletter",
  type: "document" as const,
  fields: [
    {
      name: "issueNumber",
      title: "Issue Number",
      type: "number",
      validation: (Rule: { required: () => unknown }) => Rule.required(),
    },
    {
      name: "title",
      title: "Title",
      type: "string",
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
        { name: "alt", title: "Alt Text", type: "string" },
      ],
    },
    {
      name: "pdfFile",
      title: "PDF File",
      type: "file",
      options: { accept: ".pdf" },
    },
    {
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 3,
    },
  ],
};

export default newsletter;
