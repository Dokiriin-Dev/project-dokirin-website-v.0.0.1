"use client";

/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/alt-text */
import Head from "next/head";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { FcGoogle, FcUnlock } from "react-icons/fc";
import {
  auth,
  signInWithEmailAndPassword,
} from "../../firebase/firebase.config";
import Section from "@/components/layout/Section";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [user] = useAuthState(auth);
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginWithEmail = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (user) {
      router.push("/admin");
    } else return;
  }, [user]);

  return (
    <Section>
      <Head>
        <title>nextjs-typescript-tailwindcss-firebase boilerplate Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://www.jonchristie.net/favicon.png" />
      </Head>

      <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:bg-gray-200 lg:dark:bg-zinc-800/30 border-t border-purple-600 rounded shadow-lg shadow-purple-800/50 lg:max-w-md">
          <h3 className="text-3xl font-semibold text-center text-purple-700">
            Login
          </h3>

          <div>
            <label htmlFor="email" className="block text-sm text-gray-300">
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-slate-300 border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <div>
              <label htmlFor="password" className="block text-sm text-gray-300">
                Password
              </label>
              <input
                type="password"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-slate-300 border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <a href="#" className="text-xs text-gray-500 hover:underline">
              Forget Password?
            </a>
            <div className="mt-6">
              <button
                className="w-full px-4 py-2 tracking-wide text-slate-300 transition-colors duration-200 transform border-sky-500 border rounded-md flex items-center justify-center hover:bg-slate-100"
                onClick={handleLoginWithEmail}
              >
                <FcUnlock className="mr-4" size={25} />
                <span>Login with Email</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
export default Login;
