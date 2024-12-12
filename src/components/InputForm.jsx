import { Label, TextInput } from "flowbite-react";
import React from "react";

export default function InputForm({
  placeholder = "",
  label = "Name",
  ...rest
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
      <TextInput {...rest} placeholder={placeholder} id="small" sizing="md" />
    </div>
  );
}
