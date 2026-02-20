import type { Metadata } from "next";
import SpecClient from "./_spec-client";

export const metadata: Metadata = {
  title: "API Specification",
  description:
    "API specification for GitHub Contribution Gravity Lens. Endpoint details, query parameters, theme options, and response formats.",
  alternates: {
    canonical: "/spec",
  },
};

export default function SpecPage() {
  return <SpecClient />;
}
