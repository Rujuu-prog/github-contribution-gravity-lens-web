import type { Metadata } from "next";
import { I18nProvider } from "@/lib/i18n-context";
import { Nav } from "@/components/templates/nav";
import { GoogleAnalytics } from "@/components/atoms/google-analytics";
import "./globals.css";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? "https://gravity-lens.rujuu.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "GitHub Contribution Gravity Lens",
    template: "%s | GitHub Contribution Gravity Lens",
  },
  description:
    "Visualize your GitHub contributions with gravitational lensing effects. Generate stunning SVGs from your contribution graph.",
  keywords: [
    "GitHub",
    "contribution graph",
    "gravitational lensing",
    "SVG",
    "visualization",
    "developer tools",
    "GitHub Actions",
  ],
  authors: [{ name: "Rujuu" }],
  creator: "Rujuu",
  openGraph: {
    title: "GitHub Contribution Gravity Lens",
    description:
      "Visualize your GitHub contributions with gravitational lensing effects.",
    url: BASE_URL,
    siteName: "GitHub Contribution Gravity Lens",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "GitHub Contribution Gravity Lens",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GitHub Contribution Gravity Lens",
    description:
      "Visualize your GitHub contributions with gravitational lensing effects.",
    images: ["/opengraph-image"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className="dark">
      <body className="antialiased" suppressHydrationWarning>
        {gaId && <GoogleAnalytics gaId={gaId} />}
        <I18nProvider>
          <Nav />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
