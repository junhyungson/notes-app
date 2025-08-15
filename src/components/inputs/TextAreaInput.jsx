import React from "react";

const TextAreaInput = ({
  label,
  name,
  value,
  onChange,
  required = "false",
}) => {
  return (
    <div className="mb-4">
      <label htmlFor={label} className="block font-semibold">
        {label}
      </label>
      <textarea
        name={name}
        className="w-full border rounded-lg"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextAreaInput;
