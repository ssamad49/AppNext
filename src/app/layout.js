import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "ROCHDI",
    template: "%s | ROCHDI",
  },
  description: "Personal blog of Rochdi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <NavBar/>
        {children}
        <footer className="text-center text-gray-500 text-sm py-4 fixed bottom-0 w-full">
          <div>
            &copy; {new Date().getFullYear()}{" "}
            <a href="https://rochdi.dev" className="text-blue-600">
              Rochdi
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
