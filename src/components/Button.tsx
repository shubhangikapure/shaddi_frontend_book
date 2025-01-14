import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, type = "button", ...props }) => {
  return (
    <button
      type={type}
      {...props}
      className="w-full bg-primary text-white py-2 rounded-md bg-purple-700"
    >
      {children}
    </button>
  );
};

export default Button;
