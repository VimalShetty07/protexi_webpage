import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Protexi — UK Sponsor Compliance, Simplified",
  description:
    "Protexi helps UK sponsor licence holders stay audit-ready with automated visa tracking, document management, and compliance workflows. Trusted by 500+ UK companies.",
  keywords: [
    "UK sponsor compliance",
    "sponsor licence",
    "visa tracking",
    "UKVI compliance",
    "right to work",
    "CoS management",
  ],
  openGraph: {
    title: "Protexi — UK Sponsor Compliance, Simplified",
    description:
      "Stay audit-ready with less manual effort. Automated visa expiry tracking, document workflows, and compliance alerts.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
