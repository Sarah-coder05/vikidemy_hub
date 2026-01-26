import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export default function Input({ label, error, ...props }: Props) {
  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>

      <input
        {...props}
        className="w-full rounded-lg text-gray-700 border border-gray-300 px-4 py-3
                   focus:outline-none focus:ring-2 focus:ring-gray-800"
      />

      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
