import { CTA, PageIntro } from "../../components/content";
export const metadata = { title: "Faste avtalar" };
export default function Agreements() {
  return (
    <>
      <PageIntro
        title="Faste avtalar"
        text="Vi tilbyr faste avtalar om tilsyn, vedlikehald og sesongarbeid. Oppgåvene blir tilpassa bygget, uteområdet og behovet ditt."
      />
      <section className="wrap section">
        <div className="split">
          <div>
            <h2>Samla oppfølging av eigedomen</h2>
            <p>
              Ein fast avtale passar for næringsbygg, fellesareal,
              utleigeeigedomar og private eigedomar som treng jamleg oppfølging.
            </p>
            <p>
              Vi går gjennom eigedomen saman med deg og avtalar kva som skal
              gjerast, kor ofte vi skal koma og korleis ekstraarbeid skal
              avklarast.
            </p>
            <a className="button" href="/kontakt?teneste=Fast%20avtale">
              Be om ein prat om fast avtale
            </a>
          </div>
          <div className="card">
            <h3>Dette kan avtalen omfatta</h3>
            <ul className="checklist">
              <li>Tilsyn og vaktmesterrundar</li>
              <li>Plenklipping og stell av uteområde</li>
              <li>Reinsk av takrenner og sluk</li>
              <li>Småreparasjonar og vedlikehald</li>
              <li>Sesongarbeid, brøyting og strøing</li>
            </ul>
          </div>
        </div>
        <div className="three-grid process">
          <div>
            <span className="step">1</span>
            <h3>Vi ser på behovet</h3>
            <p>
              Du fortel om eigedomen og oppgåvene. Vi avtalar synfaring ved
              behov.
            </p>
          </div>
          <div>
            <span className="step">2</span>
            <h3>Vi lagar ein avtale</h3>
            <p>Omfang, frekvens og pris blir avklart før oppstart.</p>
          </div>
          <div>
            <span className="step">3</span>
            <h3>Vi følgjer opp</h3>
            <p>
              Vi utfører dei avtalte oppgåvene og tek kontakt om vi oppdagar
              noko som treng merksemd.
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
