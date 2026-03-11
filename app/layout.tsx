import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Abhay Krishnan - Frontend Engineer | React & Next.js Specialist",
  description:
    "Portfolio of Abhay Krishnan, a Frontend Engineer specializing in building scalable React and Next.js applications with 1+ year of experience.",
  keywords: [
    "Abhay Krishnan",
    "Abhay",
    "Frontend Engineer",
    "React Developer",
    "Next.js Developer",
    "Portfolio",
    "Web Developer Kerala",
    "Software Engineer",
  ],
  authors: [{ name: "Abhay Krishnan", url: "https://github.com/abhayk012" }],
  creator: "Abhay Krishnan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://abhay-krishnan.vercel.app", // Placeholder, ideally should be the real URL
    title: "Abhay Krishnan - Frontend Engineer",
    description:
      "Portfolio of Abhay Krishnan, specializing in modern web technologies.",
    siteName: "Abhay Krishnan Portfolio",
    images: [
      {
        url: "/profile/professional-developer-avatar.png",
        width: 1200,
        height: 630,
        alt: "Abhay Krishnan - Frontend Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhay Krishnan - Frontend Engineer",
    description:
      "Portfolio of Abhay Krishnan, specializing in modern web technologies.",
    creator: "@abhaykrishnan", // Placeholder
    images: ["/profile/professional-developer-avatar.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abhay Krishnan",
  jobTitle: "Frontend Engineer",
  url: "https://abhay-krishnan.vercel.app", // Placeholder
  sameAs: [
    "https://www.linkedin.com/in/abhay-krishnan-k/",
    "https://github.com/abhayk012/",
  ],
  description:
    "Frontend Engineer specializing in React, Next.js, and TypeScript.",
  alumniOf: "Kannur University",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Frontend Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
