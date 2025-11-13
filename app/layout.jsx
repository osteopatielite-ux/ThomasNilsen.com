import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Thomas Nilsen – Fysioterapi, osteopati og kognitiv terapi i Bodø",
  description:
    "Thomas Nilsen ved Moveoklinikken i Bodø tilbyr fysioterapi, osteopati, kognitiv terapi, behandling av smerter, stress, overbelastning og løpsanalyse.",
  keywords: [
    "Fysioterapi Bodø",
    "Fysioterapeut Bodø",
    "Osteopati Bodø",
    "Osteopat Bodø",
    "Kognitiv terapi Bodø",
    "Kognitiv terapeut Bodø",
    "Thomas Nilsen",
    "Moveoklinikken",
    "Løpsanalyse Bodø",
    "Smerter behandling Bodø"
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="no">
      <body>
        <div className="page-wrapper">

          {/* HEADER */}
          <header className="site-header">
            <div className="header-inner">

              {/* LOGO + NAVN */}
              <div className="brand-wrapper">
                <img
                  src="/moveo-logo.png"
                  alt="Moveo logo"
                  className="moveo-logo"
                />

                <div className="brand-text">
                  <div className="brand-name">Thomas Nilsen</div>
                  <div className="brand-role">
                    Fysioterapeut • Osteopat • Kognitiv terapeut
                  </div>
                  <div className="brand-clinic">Moveoklinikken · Bodø</div>
                </div>
              </div>

              {/* NAV */}
              <nav className="main-nav">
                <Link className="nav-link" href="/">Hjem</Link>
                <Link className="nav-link" href="/om-meg">Om meg</Link>
                <Link className="nav-link" href="/kontakt">Kontakt</Link>
              </nav>
            </div>
          </header>

          {/* SIDEINNHOLD */}
          <main className="page-inner">
            {children}
          </main>

          {/* FOOTER */}
          <footer className="site-footer">
            <div className="footer-inner">
              <span>© {new Date().getFullYear()} Thomas Nilsen – Moveoklinikken Bodø</span>
              <span>Fysioterapi • Osteopati • Kognitiv terapi • Løpsanalyse</span>
            </div>
          </footer>

        </div>
      </body>
    </html>
  );
}
