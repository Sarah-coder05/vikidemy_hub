"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, SignupFormData } from "@/schemas/signupSchema";
import { supabase } from "@/components/lib/supabase/client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/ui/Input";
import PhoneInput from "@/components/ui/PhoneInput";
import { countries } from "@/components/lib/countryData";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupFormData) => {
    setLoading(true);
    setErrorMsg("");

    const { data: authData, error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/verify-email`,

        data: {
          full_name: data.fullName,
          phone: data.phone,
          location: data.location,
          referral: data.referral,
          role: "parent",
        },
      },
    });

    setLoading(false);

    if (error) {
      setErrorMsg(error.message);
      return;
    }

    console.log("SIGNUP SUCCESS", authData);

    router.replace("/");
  };

  return (
    <main className="min-h-screen mx-[150px] flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-md bg-white rounded-lg shadow-md p-8 space-y-5"
      >
        <h1 className="text-2xl font-bold text-gray-900">
          Create your account
        </h1>

        {errorMsg && <p className="text-red-600 text-sm">{errorMsg}</p>}

        <Input
          label="Parent / Guardian Full Name"
          {...register("fullName")}
          error={errors.fullName?.message}
        />

        <Input
          label="Email Address"
          type="email"
          {...register("email")}
          error={errors.email?.message}
        />

        <Controller
          name="phone"
          control={control}
          render={({ field }) => (
            <PhoneInput
              label="Phone Number (WhatsApp-enabled)"
              value={field.value}
              onChange={field.onChange}
              error={errors.phone?.message}
              placeholder="Enter phone number"
            />
          )}
        />

        <Input
          label="Password"
          type="password"
          {...register("password")}
          error={errors.password?.message}
        />

        <Input
          label="Confirm Password"
          type="password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">Country</label>
          <select
            {...register("location")}
            className="
            w-full
            rounded-lg
            border
            border-gray-300
            px-2
            py-3
            text-gray-900
            bg-white
            appearance-auto
            "
          >
            <option value="">Select your country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.location && (
            <p className="text-red-600 text-sm">{errors.location.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            How did you hear about Vikidemy Hub?
          </label>
          <select
            {...register("referral")}
            className="
            w-full
            rounded-lg
            border
            border-gray-300
            px-2
            py-3
            text-gray-900
            bg-white
            appearance-auto
            "
          >
            <option value="">Select one</option>
            <option value="Instagram">Instagram</option>
            <option value="WhatsApp">WhatsApp</option>
            <option value="Friend">Friend / Referral</option>
            <option value="School">School</option>
            <option value="Google">Google</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Creating account..." : "Create Account"}
        </button>
      </form>
    </main>
  );
}
