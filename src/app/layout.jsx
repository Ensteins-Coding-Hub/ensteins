import "./globals.css";
import NavigationBar from "../components/NavigationBar";

export const metadata = {
  title: "Ensteins",
  description: "We Make Technology Move",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#06021A] overflow-x-hidden" >
        <div className="pb-12 z-1000" >
          <NavigationBar />
        </div>
        {children}
      </body>
    </html>
  );
}
