import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Next with Tailwind",
  description: "My design course with tailwind css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
