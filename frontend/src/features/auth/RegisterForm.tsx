import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";

const RegisterForm: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-primary mb-4">Create Account</h2>
      <form className="w-full">
        <Input type="text" label="Name" placeholder="John Doe" />
        <Input type="email" label="Email" placeholder="test@gmail.com" />
        <Input type="password" label="Password" placeholder="Enter Password" />
        <Button type="submit">Register</Button>
        <div className="mt-4 text-center">
          <p>
            Already have an account?{" "}
            <a href="/login" className="text-primary">
              Login
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
