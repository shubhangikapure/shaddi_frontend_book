import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

const LoginForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-primary mb-4">Hello Again!</h2>
      <form className="w-full">
        <Input type="email" label="Email" placeholder="test@gmail.com" />
        <Input type="password" label="Password" placeholder="Enter Password" />
        <div className="flex justify-between items-center mb-4">
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Remember Me
          </label>
          <a href="/recover" className="text-primary">Recovery Password</a>
        </div>
        <Button type="submit" className="bg-purple-600 text-white hover:bg-purple-600">
          Login
        </Button>
        <div className="mt-4 text-center">
          <p>
            Don't have an account?{" "}
            <a href="/register" className="text-primary">
              Create Account
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
