"use client";

import { type ReactNode } from "react";
import { motion } from "motion/react";

interface IconLinkProps {
  href: string;
  icon: ReactNode;
  children: ReactNode;
}

export function IconLink({ href, icon, children }: IconLinkProps) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="inline-flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-purple-400"
    >
      <span className="flex-shrink-0" aria-hidden="true">
        {icon}
      </span>
      <span>{children}</span>
    </motion.a>
  );
}
