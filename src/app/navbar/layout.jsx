import "@/src/app/globals.css"

export const metadata = {
  title: "Ensteins",
  description: "We Make Technology Move",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
