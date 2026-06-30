import Footer from "@/component/Footer";
import "./globals.css"
import Navbar from "@/component/Navbar";

export const metadata = { title: "World Explorer", description: "A Next.js country explorer project.", }; 

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

      <Footer/>
    
    </body>
    </html>
  );
}
