// LoginForm.tsx
import React from "react";
import FloatingInput from "../../features/auth/FloatingInput";  // Ensure the path is correct

const LoginForm: React.FC = () => {
  return (
    <div className="max-w-md mx-auto text-center py-8">
      {/* Page Title */}
      <h1 className="text-2xl font-bold text-purple-800 mb-8">Welcome Back!</h1>

      {/* Login Form */}
      <form className="space-y-8">
        {/* Email Field */}
        <FloatingInput id="email" type="email" label="Email" />

        {/* Password Field */}
        <FloatingInput id="password" type="password" label="Password" />

        {/* Options */}
        <div className="flex items-center justify-between">
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            Remember Me
          </label>
          <a href="#" className="text-purple-600 text-sm hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700"
        >
          Login
        </button>

        {/* Additional Links */}
        <div className="text-center mt-6">
          <span className="text-gray-500">OR</span>
        </div>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-500">
            Don’t have an Account?{' '}
            <a href="#" className="text-purple-600 hover:underline">
              Create Account
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
