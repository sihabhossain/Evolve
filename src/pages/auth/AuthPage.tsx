import React, { useState } from "react";
import { useForm, FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { User, Lock, Mail, Phone, MapPin } from "lucide-react";

type FormData = {
  name?: string;
  email: string;
  password: string;
  phone?: string;
  address?: string;
  role?: string;
};

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [error, setError] = useState<string>("");

  const onSubmitLogin = (data: FormData) => {
    console.log("Login Data", data);
    // Handle login logic
  };

  const onSubmitRegister = (data: FormData) => {
    console.log("Register Data", data);
    // Handle registration logic
  };

  const toggleForm = () => setIsLogin(!isLogin);

  // Helper function to safely render error messages
  const getErrorMessage = (
    error:
      | string
      | FieldError
      | Merge<FieldError, FieldErrorsImpl<any>>
      | undefined
  ): string | undefined => {
    if (typeof error === "string") return error;
    if (
      error &&
      typeof error === "object" &&
      "message" in error &&
      typeof error.message === "string"
    ) {
      return error.message;
    }
    return undefined;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-20">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-10 shadow-xl">
        <h2 className="text-center text-3xl font-bold text-gray-700">
          {isLogin ? "Login to Your Account" : "Create a New Account"}
        </h2>

        {error && (
          <p className="text-center font-semibold text-red-500">{error}</p>
        )}

        {isLogin ? (
          <form onSubmit={handleSubmit(onSubmitLogin)} className="space-y-6">
            <div className="flex items-center rounded-md bg-gray-20 p-3">
              <Mail className="h-5 w-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
                className="focus:ring-primary-400 ml-3 w-full bg-transparent text-gray-700 focus:outline-none focus:ring-2"
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500">
                {getErrorMessage(errors.email)}
              </p>
            )}

            <div className="flex items-center rounded-md bg-gray-20 p-3">
              <Lock className="h-5 w-5 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
                className="focus:ring-primary-400 ml-3 w-full bg-transparent text-gray-700 focus:outline-none focus:ring-2"
              />
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">
                {getErrorMessage(errors.password)}
              </p>
            )}

            <button
              type="submit"
              className="hover:bg-primary-600 w-full rounded-md bg-primary-500 py-3 font-semibold text-white transition duration-300 focus:outline-none focus:ring-4 focus:ring-primary-300"
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSubmit(onSubmitRegister)} className="space-y-6">
            <div className="flex items-center rounded-md bg-gray-20 p-3">
              <User className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
                className="focus:ring-primary-400 ml-3  w-full bg-transparent text-gray-700 focus:outline-none focus:ring-2"
              />
            </div>
            {errors.name && (
              <p className="text-sm text-red-500">
                {getErrorMessage(errors.name)}
              </p>
            )}

            <div className="flex items-center rounded-md bg-gray-20 p-3">
              <Mail className="h-5 w-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
                className="focus:ring-primary-400 ml-3 w-full bg-transparent text-gray-700 focus:outline-none focus:ring-2"
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-500">
                {getErrorMessage(errors.email)}
              </p>
            )}

            <div className="flex items-center rounded-md bg-gray-20 p-3">
              <Lock className="h-5 w-5 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
                className="focus:ring-primary-400 ml-3 w-full bg-transparent text-gray-700 focus:outline-none focus:ring-2"
              />
            </div>
            {errors.password && (
              <p className="text-sm text-red-500">
                {getErrorMessage(errors.password)}
              </p>
            )}

            <div className="flex items-center rounded-md bg-gray-20 p-3">
              <Phone className="h-5 w-5 text-gray-400" />
              <input
                type="tel"
                placeholder="Phone"
                {...register("phone", { required: "Phone is required" })}
                className="focus:ring-primary-400 ml-3 w-full bg-transparent text-gray-700 focus:outline-none focus:ring-2"
              />
            </div>
            {errors.phone && (
              <p className="text-sm text-red-500">
                {getErrorMessage(errors.phone)}
              </p>
            )}

            <div className="flex items-center rounded-md bg-gray-20 p-3">
              <MapPin className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Address"
                {...register("address", { required: "Address is required" })}
                className="focus:ring-primary-400 ml-3 w-full bg-transparent text-gray-700 focus:outline-none focus:ring-2"
              />
            </div>
            {errors.address && (
              <p className="text-sm text-red-500">
                {getErrorMessage(errors.address)}
              </p>
            )}

            <input type="hidden" {...register("role")} value="user" />

            <button
              type="submit"
              className="hover:bg-primary-600 w-full rounded-md bg-primary-500 py-3 font-semibold text-white transition duration-300 focus:outline-none focus:ring-4 focus:ring-primary-300"
            >
              Sign Up
            </button>
          </form>
        )}

        <p className="text-center text-gray-500">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={toggleForm}
            className="hover:text-primary-400 font-semibold text-primary-500"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
