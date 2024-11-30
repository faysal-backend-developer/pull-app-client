import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/custom/Navbar/Navbar";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Live Pull App Version 1.0",
  description: "Live Pull: Real-Time Data & Instant Updates at Your Fingertips Stay ahead of the game with Live Pull, your ultimate app for real-time data, live updates, and instant notifications. Whether you\'re tracking the latest news, monitoring live feeds, or pulling real-time analytics from your favorite sources, Live Pull ensures you're always in the know.Key Features:Live Data Streaming: Get real-time data, instantly and seamlessly, directly to your device.Instant Notifications: Receive push notifications for the most critical live updates and events as they happen.Customizable Feeds: Personalize your live data streams to receive the most relevant content.Easy-to-Use Interface: Navigate through live feeds with an intuitive design that prioritizes speed and clarity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="border-b" >
          <div className="lg:container lg:mx-auto">
          <Navbar/>
          </div>
        </header>
        <main>
        {children}
        </main>
        
      </body>
    </html>
  );
}
