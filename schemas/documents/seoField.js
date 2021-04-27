import React from "react";

// Important items to allow form fields to work properly and patch the dataset.
import { PatchEvent, set } from "part:@sanity/form-builder/patch-event";
import FormField from "part:@sanity/components/formfields/default";

// Import the TextInput from UI
import { TextInput } from "@sanity/ui";

import { FaBeer } from "react-icons/fa";

const HoverInput = React.forwardRef((props, ref) => {
  const { type, onChange } = props;
  return (
    <FormField label={type.title} description={type.description}>
      <FaBeer />
      <h1>Random h1</h1>
      <TextInput
        type='text'
        ref={ref}
        placeholder={type.placeholder}
        value={props.value}
        onChange={(event) => {
          onChange(PatchEvent.from(set(event.target.value)));
        }}
      />
    </FormField>
  );
});

export default {
  name: "seoField",
  title: "SEO Keyword",
  type: "document",
  fields: [
    {
      name: "seoString",
      title: "Something really important for SEO",
      type: "string",
      inputComponent: HoverInput,
    },
  ],
};
