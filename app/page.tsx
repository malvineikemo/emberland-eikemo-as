export default function Home() {
  return (
    <>
      <section className="home-hero wrap">
        <div>
          <span className="location">EMBERLAND & EIKEMO AS</span>
          <h1>
            Hjelp med bygg
            <br />
            og uteområde.
          </h1>
          <p className="lead">
            Praktisk hjelp for private og næring. Fortel oss kva du treng, så
            tek vi ein prat om oppdraget.
          </p>
          <div className="actions">
            <a href="/kontakt" className="button">
              Ta kontakt
            </a>
            <a href="/tenester" className="button outline">
              Sjå tenestene våre
            </a>
          </div>
        </div>
        <aside className="hero-panel">
          <h2>Finn det du leitar etter</h2>
          <p>Tenester, avtalar og informasjon om firmaet.</p>
          {[
            ["Tenestene våre", "/tenester"],
            ["Faste avtalar", "/fast-avtale"],
            ["Om firmaet", "/om-oss"],
            ["Kontakt og førespurnader", "/kontakt"],
          ].map(([label, url]) => (
            <a href={url} key={label}>
              {label}
              <span>→</span>
            </a>
          ))}
        </aside>
      </section>
    </>
  );
}
