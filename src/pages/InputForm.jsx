import { Label, TextInput } from "flowbite-react";
import React from "react";

export default function InputForm({
  type = "text",
  label = "Name",
  placeholder,
}) {
  return (
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor="small"
          className="text-[0.9rem] text-gray-500"
          value={label}
        />
      </div>
      <TextInput placeholder={placeholder} id="small" type={type} sizing="md" />
    </div>
  );
}
