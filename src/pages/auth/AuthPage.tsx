import React, { useState } from "react";
import { useForm, FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { User, Lock, Mail, Phone, MapPin, Loader2 } from "lucide-react";
import {
  useLoginMutation,
  useSignupMutation,
} from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { useAppDispatch } from "@/redux/store/hooks";
import { setUser } from "@/redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { FormData } from "@/types/types";

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: isLogin
      ? { email: "sihab@gmail.com", password: "sih@b321" }
      : {},
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [FormError, setFormError] = useState<string>("");

  const navigate = useNavigate();

  // dispatch
  const dispatch = useAppDispatch();

  // rtk query login and registration api
  const [login] = useLoginMutation();
  const [signup] = useSignupMutation();

  const onSubmitLogin = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      const userInfo = {
        email: data.email,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();

      dispatch(setUser({ user: res.data, token: res.token }));

      if (res.statusCode === 200) {
        toast.success(res.message);
      }

      navigate("/");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onSubmitRegister = async (data: FormData) => {
    try {
      setIsSubmitting(true);
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
        phone: data.phone,
        address: data.address,
        role: "user", // Automatically set the role to "user"
      };

      const res = await signup(userInfo).unwrap();

      dispatch(setUser({ user: res.data, token: res.token }));

      toast.success(res.message);

      navigate("/");
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
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

        {FormError && (
          <p className="text-center font-semibold text-red-500">{FormError}</p>
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
              disabled={isSubmitting}
              className="hover:bg-primary-600 flex w-full items-center justify-center rounded-md bg-primary-500 py-3 font-semibold text-white transition duration-300 focus:outline-none focus:ring-4 focus:ring-primary-300"
            >
              {isSubmitting ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : null}
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

            {/* Role is automatically set to "user" */}
            <input type="hidden" {...register("role")} value="user" />

            <button
              type="submit"
              disabled={isSubmitting}
              className="hover:bg-primary-600 flex w-full items-center justify-center rounded-md bg-primary-500 py-3 font-semibold text-white transition duration-300 focus:outline-none focus:ring-4 focus:ring-primary-300"
            >
              {isSubmitting ? (
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              ) : null}
              Sign Up
            </button>
          </form>
        )}

        <p className="text-center text-gray-500">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span
            className="cursor-pointer font-semibold text-primary-500 hover:underline"
            onClick={toggleForm}
          >
            {isLogin ? "Sign Up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
