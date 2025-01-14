// LoginPage.tsx
import React from "react";
import Header from "../features/auth/Header";  // Ensure the correct path
import Illustration from "../features/auth/Illustration";  // Ensure the correct path
import LoginForm from "../features/auth/LoginForm";  // Ensure the correct path

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex flex-grow">
        {/* Left Side */}
        <Illustration />

        {/* Right Side */}
        <div className="w-full sm:w-1/2 bg-white flex items-center justify-center">
          <div className="w-full max-w-md bg-white p-10 shadow-lg rounded-lg">
            <LoginForm />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-gray-400">
        © LOGO 2023 All Rights Reserved.
      </footer>
    </div>
  );
};

export default LoginPage;
