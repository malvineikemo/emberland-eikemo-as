import { PageIntro } from "../../components/content";
export const metadata = { title: "Om oss" };
export default function About() {
  return (
    <>
      <PageIntro
        title="Om oss"
        text="Emberland & Eikemo AS vart starta i 2025."
      />
      <section className="wrap section about-content">
        <div className="split">
          <div>
            <h2>Visjonen vår</h2>
            <p>
              Vi ønskjer å vera eit firma kundane har tillit til og kjem tilbake
              til. God dialog, tydelege avtalar og skikkeleg utført arbeid skal
              liggja til grunn for det vi gjer.
            </p>
            <p>
              Vi vil byggja langsiktige kundeforhold og utvikla firmaet gjennom
              fornøgde kundar og ansvarleg drift.
            </p>
          </div>
          <aside className="card">
            <h3>Med base i Sveio</h3>
            <p>
              Vi held til i Sveio og tek oppdrag i Sveio, Haugesund og elles på
              Haugalandet.
            </p>
            <a href="/kontakt" className="read-more">
              Kontakt oss →
            </a>
          </aside>
        </div>
        <div className="owners">
          <h2>Folka i firmaet</h2>
          <div className="two-grid" style={{ marginTop: 24 }}>
            <article className="card">
              <h3>Malvin Eikemo</h3>
              <p>Driftsleiar</p>
              <a href="mailto:malvin@emberland-eikemo.no">
                malvin@emberland-eikemo.no
              </a>
            </article>
            <article className="card">
              <h3>Hans Ole Emberland</h3>
              <p>Dagleg leiar og styreleiar</p>
              <a href="mailto:hans.ole@emberland-eikemo.no">
                hans.ole@emberland-eikemo.no
              </a>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
