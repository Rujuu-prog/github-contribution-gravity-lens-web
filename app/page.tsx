import { REPO_URL } from "@/lib/constants";
import HomeClient from "./_home-client";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://gravity-lens.rujuu.com";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GitHub Contribution Gravity Lens",
    description:
      "Visualize your GitHub contributions with gravitational lensing effects. Generate stunning SVGs from your contribution graph.",
    url: BASE_URL,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    author: {
      "@type": "Person",
      name: "Rujuu",
      url: REPO_URL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
