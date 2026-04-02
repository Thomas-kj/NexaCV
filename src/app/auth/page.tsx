"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import LoginForm from "@/components/auth/LoginForm";
import SignupForm from "@/components/auth/SignupForm";
import SocialLogin from "@/components/auth/SocialLogin";
import Link from "next/link";

export default function AuthPage() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 relative overflow-hidden">
      {/* Background decoration - matching landing page */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative min-h-screen flex items-center justify-center px-4 py-2 overflow-hidden">
        <motion.div 
          className="w-full max-w-md"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo/Brand */}
          <motion.div 
            className="text-center mb-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="inline-block">
              <h1 className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                NexaCV
              </h1>
            </Link>
            <motion.p 
              className="text-base text-gray-600 mt-1 font-medium"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Create professional{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold">
                ATS-friendly
              </span>{" "}
              resumes in minutes
            </motion.p>
          </motion.div>

          {/* Auth Card */}
          <motion.div 
            className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Tab Switcher */}
            <div className="flex justify-center gap-2 mb-4 bg-gray-100 rounded-lg p-1">
              <button
                className={`flex-1 font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                  mode === "login" 
                    ? "bg-white text-blue-600 shadow-sm cursor-not-allowed opacity-60" 
                    : "text-gray-400 cursor-not-allowed opacity-50"
                }`}
                onClick={() => setMode("login")}
                disabled
              >
                Sign In
              </button>
              <button
                className={`flex-1 font-medium px-3 py-2 rounded-md transition-all duration-200 ${
                  mode === "signup" 
                    ? "bg-white text-blue-600 shadow-sm cursor-not-allowed opacity-60" 
                    : "text-gray-400 cursor-not-allowed opacity-50"
                }`}
                onClick={() => setMode("signup")}
                disabled
              >
                Sign Up
              </button>
            </div>

            {/* Form */}
            <div className="mb-3">
              {mode === "login" ? <LoginForm /> : <SignupForm />}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3 my-3">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-gray-400 text-xs font-medium">OR</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Social Login */}
            <SocialLogin />

            {/* Back to home */}
            <motion.div 
              className="text-center mt-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Link 
                href="/" 
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm font-medium"
              >
                ← Back to Home
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}
