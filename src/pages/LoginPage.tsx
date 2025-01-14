import React from "react";
import LoginForm from "../features/auth/LoginForm";
import logo from "../assets/images/logo.png";

const LoginPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex items-center justify-center max-w-screen-xl w-full p-6">
        {/* Left side: Image */}
        <img
          src={logo}
          alt="Illustration"
          className="hidden md:block w-full max-w-md rounded-lg" // Set width and max-width, hidden on small screens
        />

        {/* Right side: Login Form */}
        <div className="w-full max-w-md ml-6">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
