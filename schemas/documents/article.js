export default {
  title: "Article", // The human-readable label. Used in the studio.
  name: "article", // Required. The field name, and key in the data record.
  type: "document", // Required. The name of any valid schema type.
  // Input fields below, as many as you need.
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
  ],
};
