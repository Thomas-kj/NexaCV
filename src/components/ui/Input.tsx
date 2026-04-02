import React from "react";

export default function Input({
  type,
  name,
  placeholder,
  value,
  onChange,
  className = "",
  ...props
}: {
  type: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  [key: string]: any;
}) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white text-gray-900 placeholder-gray-500 ${className}`}
      style={{ 
        filter: 'none', 
        WebkitBackdropFilter: 'none', 
        backdropFilter: 'none',
        color: '#111827',
        backgroundColor: '#ffffff'
      }}
      {...props}
    />
  );
};
