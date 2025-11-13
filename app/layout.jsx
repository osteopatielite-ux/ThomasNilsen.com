import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Thomas Nilsen – Fysioterapi, osteopati og kognitiv terapi i Bodø",
  description:
    "Thomas Nilsen ved Moveoklinikken i Bodø tilbyr fysioterapi, osteopati, kognitiv terapi, løpsanalyse og helhetlig oppfølging. Bestill time for smerter, stress, overbelastning eller langvarige plager.",
  keywords: [
    "Fysioterapeut Bodø",
    "Fysioterapi Bodø",
    "Osteopat Bodø",
    "Osteopati Bodø",
    "Kognitiv terapi Bodø",
    "Kognitiv terapeut Bodø",
    "Thomas Nilsen",
    "Moveoklinikken",
    "Løpsanalyse Bodø",
    "Smerter behandling Bodø",
    "Muskel og skjelett Bodø",
    "Stress behandling Bodø",
    "Overbelastning Bodø",
    "Behandling Bodø"
  ],
  openGraph: {
    title: "Thomas Nilsen – Fysioterapi, osteopati og kognitiv terapi i Bodø",
    description:
      "Behandling innen fysioterapi, osteopati og kognitiv terapi hos Thomas Nilsen ved Moveoklinikken i Bodø.",
    locale: "no_NO",
    siteName: "Thomas Nilsen – Moveoklinikken Bodø",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body>
        <div className="page-wrapper">

          {/* HEADER */}
          <header className="site-header">
            <div className="header-inner">

              {/* BRANDING */}
              <div className="brand">
                <span className="brand-klinikk">Moveoklinikken</span>
                <span className="brand-title">Thomas Nilsen</span>
                <span className="brand-subtitle">
                  Fysioterapeut • Osteopat • Kognitiv terapeut
                </span>
              </div>

              {/* NAV */}
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

          {/* SIDENS INNHOLD */}
          <main className="page-inner">{children}</main>

          {/* FOOTER */}
          <footer className="site-footer">
            <div className="footer-inner">
              <span>
                © {new Date().getFullYear()} Thomas Nilsen – Moveoklinikken Bodø
              </span>
              <span>
                Fysioterapi • Osteopati • Kognitiv terapi • Løpsanalyse
              </span>
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}
