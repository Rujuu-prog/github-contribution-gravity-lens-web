import type { Metadata } from "next";
import { I18nProvider } from "@/lib/i18n-context";
import { Nav } from "@/components/templates/nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "GitHub Contribution Gravity Lens",
  description:
    "Visualize your GitHub contributions with gravitational lensing effects. Generate stunning SVGs from your contribution graph.",
  openGraph: {
    title: "GitHub Contribution Gravity Lens",
    description:
      "Visualize your GitHub contributions with gravitational lensing effects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased" suppressHydrationWarning>
        <I18nProvider>
          <Nav />
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
