"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/components/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setErrorMsg("");

    // Basic validation
    if (!email || !password) {
      setErrorMsg("Please enter both email and password");
      setLoading(false);
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password: password,
    });

    setLoading(false);

    if (error) {
      // Show user-friendly error message
      if (error.message.includes("Invalid login credentials")) {
        setErrorMsg("Incorrect email or password");
      } else {
        setErrorMsg("Incorrect email or password");
      }
      return;
    }

    console.log("LOGIN SUCCESS", data);

    // Redirect to dashboard on successful login
    router.replace("/dashboard");
  };

  return (
    <div className="w-full border p-4 rounded-md bg-white text-black max-w-md">
      <h2 className="text-2xl font-bold mb-2">Welcome back</h2>
      <p className="text-gray-600 mb-6">Log in to continue learning</p>

      <form onSubmit={handleLogin} className="space-y-4">
        {errorMsg && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
            {errorMsg}
          </div>
        )}

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md text-gray-700 border px-4 py-3"
          disabled={loading}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-md border px-4 py-3"
          disabled={loading}
        />

        <div className="flex justify-center">
          <Button
            type="submit"
            className="w-fit text-gray-700 px-6 bg-[#2eb6dc]"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log in"}
          </Button>
        </div>
      </form>

      <p className="mt-4 text-sm text-gray-600">
        Don&apos;t have an account?{" "}
        <Link href="/auth/sign-up" className="text-blue-600 font-medium">
          Sign up
        </Link>
      </p>
    </div>
  );
}
