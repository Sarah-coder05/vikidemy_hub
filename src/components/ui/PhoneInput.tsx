"use client";

import React from "react";
import PhoneInputWithCountry from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
  label?: string;
  error?: string;
  placeholder?: string;
}

const PhoneInput = ({
  value,
  onChange,
  label,
  error,
  placeholder = "Enter phone number",
}: PhoneInputProps) => {
  return (
    <div className="space-y-1">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <PhoneInputWithCountry
        international
        defaultCountry="NG"
        value={value}
        onChange={(val) => onChange(val || "")}
        placeholder={placeholder}
        className="phone-input-custom"
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <style jsx global>{`
        .phone-input-custom {
          display: flex;
          gap: 8px;
        }
        .phone-input-custom .PhoneInputCountry {
          border: 1px solid #060606ff;
          border-radius: 0.5rem;
          padding: 12px;
          background: white;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .phone-input-custom .PhoneInputCountryIcon {
          width: 24px;
          height: 18px;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1);
        }
        .phone-input-custom .PhoneInputCountrySelectArrow {
          width: 8px;
          height: 8px;
          border-color: #6b7280;
          opacity: 0.7;
        }
        .phone-input-custom .PhoneInputInput {
          flex: 1;
          border: 1px solid #020407ff;
          border-radius: 0.5rem;
          padding: 12px 16px;
          color: #111827;
          font-size: 14px;
          outline: none;
        }
        .phone-input-custom .PhoneInputInput:focus {
          border-color: #3b82f6;
          ring: 2px;
          color: #111827;
          ring-color: #3b82f6;
        }
      `}</style>
    </div>
  );
};

export default PhoneInput;
