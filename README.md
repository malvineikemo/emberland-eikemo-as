# Emberland & Eikemo AS

Vanleg Next.js-prosjekt med App Router og TypeScript. Ingen Sites-, Cloudflare- eller databaseoppsett er nødvendig.

## Publiser på Vercel

1. Pakk ut ZIP-fila.
2. Erstatt dei gamle prosjektfilene i GitHub med innhaldet i denne mappa. Fjern det gamle oppsettet først, slik at gamle låsefiler, scripts og konfigurasjonar ikkje blir liggjande.
3. Sørg for at package.json ligg i rota av GitHub-repositoriet.
4. I Vercel: vel Next.js og Node.js 24.x. Root Directory skal peika på mappa med package.json.
5. Slå av gamle overstyringar av Build Command, Install Command og Output Directory. vercel.json set npm ci og npm run build.
6. Køyr ei ny utrulling utan gammal byggjecache.

Ingen miljøvariablar eller innlogging er nødvendig.

## Lokal utvikling

Installer Node.js 24. Køyr npm ci og npm run dev. Opne http://localhost:3000.

Produksjonsbygg: npm run build. Lokal produksjonsserver: npm start.
Typekontroll: npm run typecheck.

## Filstruktur

- app/ – dei fem sidene, metadata, hovudlayout og CSS
- components/ – felles navigasjon, botntekst og tenesteinnhald
- public/ – logoar, illustrasjonsbilete og Montserrat-font
- next.config.ts – Next.js-konfigurasjon
- tsconfig.json – TypeScript-konfigurasjon
- package.json og package-lock.json – kommandoar og låste avhengigheiter
- vercel.json – byggjeoppsett for Vercel
- IMAGE-SOURCES.md – biletkjelder og bruksrettar

## Redigering

Forside: app/page.tsx. Tenester: app/tenester/page.tsx og components/content.tsx.
Faste avtalar: app/fast-avtale/page.tsx. Om oss: app/om-oss/page.tsx.
Kontakt: app/kontakt/page.tsx. Meny og botntekst: components/site-shell.tsx.
Fargar, font og layout: app/globals.css.

Kontaktlenkjene opnar e-postprogrammet eller telefonappen. Prosjektet har ikkje eit innsending-skjema eller ein e-postserver.

## Bilete før offentleg publisering

Bileta for fasadevask og takrenner er frå den tidlegare førehandsvisinga.
Kommersielle bruksrettar er ikkje stadfesta. Byt desse to filene i public/images/
med eigne eller lisensierte bilete før offentleg publisering, og oppdater kjeldeomtalen.
Sjå IMAGE-SOURCES.md for detaljar.
