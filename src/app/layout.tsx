import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ['400','500','600', '900'],
  variable: "--font-inter",
});


export const metadata: Metadata = {
  title: "Chat UI with Message Grouping Logic",
  description: "Build a simple chat UI using a static array of message items (no API calls). The goal is to assess your understanding of data structure, component design, and usage of React/Next.js best practices (especially Server Components and minimal client-side logic).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
