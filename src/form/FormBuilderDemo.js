import React from "react";
import FormBuilder from "react-form-builder2";
export const FormBuilderDemo = (props) => {
  var items = [
    {
      key: "Header",
      name: "Header Text",
      icon: "fa fa-header",
      static: true,
      content: "Placeholder Text...",
    },
    {
      key: "Paragraph",
      name: "Paragraph",
      static: true,
      icon: "fa fa-paragraph",
      content: "Placeholder Text...",
    },
  ];

  return (
    <FormBuilder.ReactFormBuilder
      url="path/to/GET/initial.json"
      toolbarItems={items}
      saveUrl="path/to/POST/built/form.json"
    />
  );
};
