"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/components/lib/supabase/client";

export default function VerifyPage() {
  const router = useRouter();
  const [resending, setResending] = useState(false);
  const [message, setMessage] = useState("");

  const handleResendEmail = async () => {
    setResending(true);
    setMessage("");

    // Get the current user's email from the session
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user?.email) {
      setMessage("No user found. Please sign up again.");
      setResending(false);
      return;
    }

    const { error } = await supabase.auth.resend({
      type: "signup",
      email: user.email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/verify-email`,
      },
    });

    setResending(false);

    if (error) {
      setMessage(`Error: ${error.message}`);
    } else {
      setMessage("Verification email sent! Please check your inbox.");
    }
  };

  const handleGoToDashboard = () => {
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4 bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 space-y-6">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Verify your email
          </h1>

          <p className="text-gray-600 mb-6">
            We&apos;ve sent a verification link to your email. Please check your
            inbox and click the link to verify your account.
          </p>

          {message && (
            <div
              className={`p-3 rounded-lg mb-4 ${
                message.includes("Error")
                  ? "bg-red-50 text-red-700"
                  : "bg-green-50 text-green-700"
              }`}
            >
              {message}
            </div>
          )}

          <div className="space-y-3">
            <button
              onClick={handleGoToDashboard}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Go to Dashboard
            </button>

            <button
              onClick={handleResendEmail}
              disabled={resending}
              className="w-full bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {resending ? "Sending..." : "Resend Verification Email"}
            </button>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              <strong>Didn&apos;t receive the email?</strong>
            </p>
            <ul className="text-sm text-gray-500 mt-2 space-y-1 text-left">
              <li>• Check your spam/junk folder</li>
              <li>• Make sure you entered the correct email</li>
              <li>• Click &quot;Resend Verification Email&quot; above</li>
              <li>• Wait a few minutes and check again</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
