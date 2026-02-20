import type { Metadata } from "next";
import DocsClient from "./_docs-client";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Learn how to use GitHub Contribution Gravity Lens. Quick start guide, embedding instructions, theme options, and advanced configuration.",
  alternates: {
    canonical: "/docs",
  },
};

export default function DocsPage() {
  return <DocsClient />;
}
