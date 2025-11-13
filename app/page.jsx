export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <img
          src="/hero.jpg"
          alt="Behandling hos Thomas Nilsen, Moveoklinikken Bodø"
          className="hero-image"
        />

        <div className="hero-content">
          <h1 className="hero-title">Thomas Nilsen</h1>
          <p className="hero-subtitle">
            Fysioterapeut, osteopat og kognitiv terapeut ved Moveoklinikken i Bodø.
          </p>

          {/* BUTTONS */}
          <div className="button-row">
            <a
              className="primary-button"
              href="mailto:post@moveoklinikken.no?subject=Timebestilling%20hos%20Thomas"
            >
              Bestill time
            </a>

            <a className="secondary-button" href="/om-meg">
              Les mer om meg
            </a>
          </div>
        </div>
      </section>

      {/* TJENESTER */}
      <section className="section">
        <h2 className="section-title">Tjenester</h2>
        <ul className="section-list">
          <li>Individuell fysioterapi for smerter, skader og overbelastning</li>
          <li>Osteopati for langvarige muskel- og skjelettplager</li>
          <li>Kognitiv terapi for stress, bekymringer og tankekjør</li>
          <li>Løpsanalyse og hjelp til trygg oppstart med løping</li>
          <li>Strukturert gruppeopplegg for personer med diabetes</li>
        </ul>
      </section>

      {/* INTRO */}
      <section className="section">
        <h2 className="section-title">Velkommen til Moveoklinikken Bodø</h2>
        <p className="section-text">
          Målet mitt er å hjelpe deg tilbake til en hverdag med mindre smerter,
          bedre funksjon og økt forståelse for egen kropp. Jeg kombinerer fysio,
          osteopati og kognitiv terapi for å se hele mennesket — både fysisk og mentalt.
        </p>
      </section>
    </>
  );
}
