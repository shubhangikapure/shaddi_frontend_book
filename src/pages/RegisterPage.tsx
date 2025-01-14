import React from "react";
import RegisterForm from "../features/auth/RegisterForm";
import logo from "../assets/images/logo.png";

const RegisterPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center justify-center max-w-screen-xl w-full p-6">
        {/* Left side: Image */}
        <img
          src={logo}
          alt="Logo"
          className="hidden md:block w-full max-w-md rounded-lg" // Set width and max-width, hidden on small screens
        />

        {/* Right side: Register Form */}
        <div className="w-full max-w-md ml-6">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
