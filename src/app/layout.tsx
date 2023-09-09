import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiptap rich text editor",
  description: "A rich text editor made with tiptap",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-[100dvh]">{children}</main>
      </body>
    </html>
  );
}
