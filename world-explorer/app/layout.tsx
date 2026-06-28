import "./globals.css"
import Navbar from "@/component/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

      <Navbar />
    
      <main>{children}</main>
    
    </body>
    </html>
  );
}