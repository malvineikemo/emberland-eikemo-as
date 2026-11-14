import type { Metadata } from 'next';
import SiteShell from '../components/site-shell';
import './globals.css';
export const metadata: Metadata={title:{default:'Emberland & Eikemo AS | Eigedomsdrift og vedlikehald',template:'%s | Emberland & Eikemo AS'},description:'Vi hjelper private og næringskundar med eigedomsdrift, vaktmestertenester, hagestell, fasadevask og mindre gravearbeid i Sveio og på Haugalandet.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="nn"><body><SiteShell>{children}</SiteShell></body></html>}
