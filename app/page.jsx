export default function Home() {
  return (
    <>
      <section className="hero">
        <img src="/hero.jpg" alt="Thomas Nilsen / Moveoklinikken" className="hero-image" />

        <div className="hero-content">
          <h1 className="hero-title">Thomas Nilsen</h1>
          <p className="hero-subtitle">
            Fysioterapeut, osteopat og kognitiv terapeut ved Moveoklinikken i Bodø.
          </p>

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

      <section className="section">
        <h2 className="section-title">Tjenester</h2>
        <ul className="section-list">
          <li>Individuell fysioterapi for smerter og skader</li>
          <li>Osteopatisk tilnærming til langvarige plager</li>
          <li>Kognitiv terapi for stress, tankekjør og belastning</li>
          <li>Løpsanalyse og hjelp til å komme i gang med løping</li>
          <li>Strukturert gruppeopplegg for personer med diabetes</li>
        </ul>
      </section>
    </>
  );
}
