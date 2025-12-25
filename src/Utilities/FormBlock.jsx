import React from "react";
const FormBlock = ({ name, label, type, placeholder, value, onChange }) => (
  <div className="w-[48%] flex flex-col gap-1">
    <label>{label}</label>
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border-2 border-gray-200 rounded-md px-2 py-1"
    />
  </div>
);

export default FormBlock;
