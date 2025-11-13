export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", padding: "40px" }}>
      <img src="/hero.jpg" style={{ width: "100%", borderRadius: "12px", marginBottom: "40px" }} />

      <section style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "42px", fontWeight: "bold" }}>Thomas Nilsen</h1>
        <p style={{ fontSize: "22px", marginTop: "10px" }}>
          Fysioterapeut • Osteopat • Kognitiv terapeut — Bodø
        </p>
      </section>

      <section style={{ maxWidth: "700px", margin: "40px auto" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "10px" }}>Om meg</h2>
        <p>
          Jeg heter Thomas Nilsen og jobber ved Moveoklinikken i Bodø. Jeg er
          utdannet fysioterapeut, osteopat og kognitiv terapeut med over 20 års
          erfaring innen helsefag.
        </p>
      </section>

      <section style={{ maxWidth: "700px", margin: "40px auto" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "10px" }}>Tjenester</h2>
        <ul>
          <li>Fysioterapi</li>
          <li>Osteopati</li>
          <li>Kognitiv terapi</li>
          <li>Løpsanalyse og skadeforebygging</li>
          <li>Gruppeopplegg for diabetes</li>
        </ul>
      </section>

      <section style={{ maxWidth: "700px", margin: "40px auto" }}>
        <h2 style={{ fontSize: "30px", marginBottom: "10px" }}>Kontakt</h2>
        <p>
          Instagram:{" "}
          <a href="https://instagram.com/osteopat_thomas">@osteopat_thomas</a>
        </p>
      </section>
    </main>
  );
}