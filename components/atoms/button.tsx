"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";

type ButtonVariant = "primary" | "secondary" | "accent";

interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg shadow-purple-500/25",
  secondary:
    "bg-transparent border border-slate-600 text-slate-200 hover:border-slate-400",
  accent:
    "bg-amber-500 text-black font-semibold shadow-lg shadow-amber-500/25",
};

export function Button({
  variant = "primary",
  children,
  className = "",
  type = "button",
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      whileHover={
        disabled
          ? undefined
          : { scale: 1.02, boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)" }
      }
      whileTap={disabled ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`rounded-lg px-5 py-2.5 text-sm font-medium cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
