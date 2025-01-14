import React from "react";

interface InputProps {
  label?: string; // Optional label prop
  type: string;
  placeholder: string;
  name?: string;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, name }) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
};

export default Input;
