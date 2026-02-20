"use client";

import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="mx-auto max-w-5xl px-4 pt-20 pb-16">
      {children}
    </div>
  );
}
