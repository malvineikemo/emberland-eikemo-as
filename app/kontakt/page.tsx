"use client";
import { useEffect, useState } from "react";
import { PageIntro } from "../../components/content";
export default function Contact() {
  const [service, setService] = useState("");
  useEffect(() => {
    setService(
      new URLSearchParams(window.location.search).get("teneste") || "",
    );
  }, []);
  return (
    <>
      <PageIntro
        title="Kontakt oss"
        text="Har du eit oppdrag, eller lurar du på noko? Ring eller send ein e-post, så tek vi ein prat om kva du treng hjelp med."
      />
      <section className="wrap section contact-section">
        {service && (
          <p className="selected-service">
            Førespurnaden gjeld: <strong>{service}</strong>
          </p>
        )}
        <div className="two-grid mail-routing">
          <article className="card">
            <h2>Generelle førespurnader</h2>
            <p>Spørsmål om oppdrag eller andre førespurnader til firmaet.</p>
            <a
              className="email"
              href={
                "mailto:hei@emberland-eikemo.no?subject=" +
                encodeURIComponent(
                  service
                    ? "Førespurnad: " + service
                    : "Førespurnad om oppdrag",
                )
              }
            >
              hei@emberland-eikemo.no
            </a>
          </article>
          <article className="card">
            <h2>Faktura</h2>
            <p>Fakturaer til Emberland &amp; Eikemo AS skal sendast hit.</p>
            <a className="email" href="mailto:faktura@emberland-eikemo.no">
              faktura@emberland-eikemo.no
            </a>
          </article>
        </div>
        <h2 className="direct-contact-heading">Direkte kontakt</h2>
        <div className="two-grid">
          {[
            [
              "Malvin Eikemo",
              "45 45 70 09",
              "+4745457009",
              "malvin@emberland-eikemo.no",
            ],
            [
              "Hans Ole Emberland",
              "48 44 21 80",
              "+4748442180",
              "hans.ole@emberland-eikemo.no",
            ],
          ].map(([name, phone, tel, email]) => (
            <article className="card contact-card" key={name}>
              <h2>{name}</h2>
              <a className="phone" href={"tel:" + tel}>
                {phone}
              </a>
              <a
                className="email"
                href={
                  "mailto:" +
                  email +
                  "?subject=" +
                  encodeURIComponent(
                    service
                      ? "Førespurnad: " + service
                      : "Førespurnad om oppdrag",
                  )
                }
              >
                {email}
              </a>
              <a className="button" href={"tel:" + tel}>
                Ring {name === "Hans Ole Emberland" ? "Hans Ole" : "Malvin"}
              </a>
            </article>
          ))}
        </div>
        <div className="split contact-info">
          <div>
            <h3>Fortel oss litt om oppdraget</h3>
            <p>
              Ta gjerne med kvar arbeidet skal utførast, kva du ønskjer hjelp
              med og når det passar. Bilete på e-post kan gjera det enklare å
              vurdera omfanget.
            </p>
          </div>
          <div className="card">
            <h3>Emberland & Eikemo AS</h3>
            <p>
              Solstadvegen 73, Sveio
              <br />
              Org.nr. 935 780 470
            </p>
            <a
              className="read-more"
              href="https://www.facebook.com/ee.eiendomsservice/"
              target="_blank"
              rel="noreferrer"
            >
              Følg oss på Facebook ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
