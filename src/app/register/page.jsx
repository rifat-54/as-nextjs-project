"use client";
import React from 'react';
import { useForm } from "react-hook-form";

const page = () => {
    
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("User Data:", data);
    alert("✅ Registration Successful!");
    // ekhane tumi API call korte paro (fetch/axios diye)
  };

  // password check
  const password = watch("password");

  return (
    <div className="bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-600 min-h-screen flex items-center justify-center">
      <div className="card w-96 shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center mb-4">Create Account ✨</h2>
          <p className="text-center text-gray-500 mb-6">
            Join us and explore amazing features!
          </p>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name */}
            <div className="form-control mb-3">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                {...register("name", { required: "Name is required" })}
                className="input input-bordered w-full"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div className="form-control mb-3">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="input input-bordered w-full"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="form-control mb-3">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
                className="input input-bordered w-full"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="form-control mb-3">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm your password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                className="input input-bordered w-full"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            {/* Register Button */}
            <div className="form-control mt-4">
              <button type="submit" className="btn btn-primary w-full">
                Register
              </button>
            </div>
          </form>

          {/* Divider */}
          <div className="divider">OR</div>

          {/* Social Register */}
          <div className="flex gap-2">
            <button className="btn btn-outline flex-1">Google</button>
            <button className="btn btn-outline flex-1">GitHub</button>
          </div>

          {/* Already have account */}
          <p className="text-center mt-4 text-sm">
            Already have an account?
            <a href="/login" className="link link-primary ml-1">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );





};

export default page;