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
    {
      title: "Categories",
      name: "categories",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },
    {
      title: "SEO Focus Keyword",
      name: "seoFocusKeyword",
      type: "string",
      of: [{ type: "reference", to: [{ type: "seoField" }] }],
    },
    {
      title: "Menu",
      name: "menu",
      type: "array",
      of: [{ type: "reference", to: [{ type: "dropdown" }] }],
    },
  ],
};
