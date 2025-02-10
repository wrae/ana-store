import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "default" | "ghost";
}

export function Button({ children, variant = "default", className = "", ...props }: ButtonProps) {
    return (
        <button
            {...props}
            className={`px-4 py-2 rounded transition ${
                variant === "ghost" ? "bg-transparent hover:bg-gray-200" : "bg-blue-500 text-white hover:bg-blue-600"
            } ${className}`}
        >
            {children}
        </button>
    );
}
