<<<<<<< HEAD
import "./globals.css";
import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
=======
import "@/src/app/globals.css";
>>>>>>> AboutUsInfo

export const metadata = {
  title: "Ensteins",
  description: "We Make Technology Move",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<<<<<<< HEAD
      <body className="bg-[#06021A] overflow-x-hidden" >
        <div className="pb-12 z-1000" >
          <NavigationBar />
        </div>
=======
      <body className="bg-[#06021A]" >
>>>>>>> AboutUsInfo
        {children}
      <Footer />
      </body>
    </html>
  );
}
