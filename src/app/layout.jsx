import "./globals.css";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

export const metadata = {
  metadataBase: new URL("https://ensteins.tech"),
  title: {
    default: "ENSTEINS Club",
    template: "%s | ENSTEINS",
  },
};

export default function RootLayout({ children }) {
  const siteUrl = "https://ensteins.tech";
  const ogImage = `${siteUrl}/og_ensteins_logo.png`;
  const title = "ENSTEINS Club | We Make Technology Moves";
  const description =
    "ENSTEINS is a university tech club focused on engineering, science, innovation, AI, and modern technologies.";
  const keywords = [
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
  ].join(", ");

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ENSTEINS Club" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:site_name" content="ENSTEINS" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="ENSTEINS Club Logo" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ENSTEINS Club" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          sizes="32x32"
          type="image/png"
        />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          sizes="16x16"
          type="image/png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="robots" content="index,follow" />
        <meta name="theme-color" content="#06021A" />
      </head>

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
