import "./globals.css";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

export const dynamic = 'force-static'
export const metadata = {
  metadataBase: new URL("https://ensteins.tech"),

  title: {
    default: "ENSTEINS Club",
    template: "%s | ENSTEINS",
  },

  description:
    "ENSTEINS is a university tech club focused on engineering, science, innovation, AI, and modern technologies.",

  keywords: [
    "ENSTEINS",
    "ensteins club",
    "engineering club",
    "science club",
    "innovation club",
    "ENSTA",
    "ENSTA Algeria",
    "Ecole Nationale Supérieure des Technologies Avancées",
    "Higher School of Advanced Technologies",
    "computer science club",
    "web development",
    "machine learning",
    "AI club",
    "UI UX",
    "graphic design",
    "students tech club",
  ],

  openGraph: {
    title: "ENSTEINS Club\nWe make technology moves",
    description:
      "A university tech club focused on engineering, science, AI, and innovation.",
    url: "https://ensteins.tech",
    siteName: "ENSTEINS",
    images: [
      {
        url: "https://ensteins.tech/og_ensteins_logo.png",
        width: 1200,
        height: 630,
        alt: "ENSTEINS Club",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ENSTEINS Club",
    description:
      "A university tech club focused on engineering, science, and innovation.",
    images: ["https://ensteins.tech/og_ensteins_logo.png"],
  },

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#06021A] overflow-x-hidden">
        <div className="pb-12 z-1000">
          <NavigationBar />
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
