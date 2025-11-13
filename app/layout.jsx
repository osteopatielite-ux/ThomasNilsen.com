import "./globals.css";

export const metadata = {
  title: "Thomas Nilsen",
  description: "Fysioterapeut • Osteopat • Kognitiv terapeut — Bodø",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body>{children}</body>
    </html>
  );
}