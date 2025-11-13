export const metadata = {
  title: "Kontakt – Timebestilling hos Thomas Nilsen",
  description:
    "Kontakt Thomas Nilsen ved Moveoklinikken i Bodø for fysioterapi, osteopati, kognitiv terapi, løpsanalyse eller gruppeopplegg for diabetes.",
};

export default function KontaktPage() {
  return (
    <section className="section">
      <h1 className="section-title">Kontakt</h1>
      <p className="section-text">
        For timebestilling eller spørsmål kan du ta kontakt på e-post eller via telefon.
      </p>
      <p className="section-text">
        <strong>E-post:</strong>{" "}
        <a href="mailto:post@moveoklinikken.no?subject=Timebestilling%20hos%20Thomas">
          post@moveoklinikken.no
        </a>
        <br />
        <strong>Instagram:</strong>{" "}
        <a href="https://instagram.com/osteopat_thomas">@osteopat_thomas</a>
      </p>
      <p className="section-text">
        Klinikken holder til i Bodø. Ta kontakt dersom du er usikker på om jeg er riktig
        person for deg – ofte holder det med en kort avklaring.
      </p>
    </section>
  );
}
