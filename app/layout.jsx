import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Thomas Nilsen – Fysioterapeut, osteopat og kognitiv terapeut i Bodø",
  description:
    "Time hos Thomas Nilsen ved Moveoklinikken i Bodø. Fysioterapi, osteopati, kognitiv terapi, løpsanalyse og gruppeopplegg for diabetes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body>
        <div className="page-wrapper">
          <header className="site-header">
            <div className="header-inner">
              <div className="brand">
                <span className="brand-klinikk">Moveoklinikken</span>
                <span className="brand-title">Thomas Nilsen</span>
                <span className="brand-subtitle">
                  Fysioterapeut • Osteopat • Kognitiv terapeut
                </span>
              </div>
              <nav className="main-nav">
                <Link href="/" className="nav-link">
                  Hjem
                </Link>
                <Link href="/om-meg" className="nav-link">
                  Om meg
                </Link>
                <Link href="/kontakt" className="nav-link">
                  Kontakt
                </Link>
              </nav>
            </div>
          </header>

          <main className="page-inner">{children}</main>

          <footer className="site-footer">
            <div className="footer-inner">
              <span>© {new Date().getFullYear()} Thomas Nilsen – Moveoklinikken, Bodø</span>
              <span>Fysioterapi • Osteopati • Kognitiv terapi • Løpsanalyse</span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
