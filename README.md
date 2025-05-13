
# ServiceAer.ro - Site Static

Acesta este codul sursă pentru site-ul de prezentare **ServiceAer.ro**, dedicat serviciilor de aer condiționat în București și Ilfov.

## ✅ Servicii oferite

- Montaj aer condiționat
- Curățare și igienizare
- Service și reparații
- Întreținere periodică

## 🔧 Conținutul arhivei

- `index.html` – Pagina principală
- `styles.css` – Stilizarea site-ului
- `_redirects` – Redirecționare `serviceaer.ro` → `www.serviceaer.ro`

## 🚀 Publicare automată (Cloudflare Pages)

1. Creează un repository nou pe [GitHub](https://github.com/)
2. Încarcă fișierele din această arhivă în repository
3. Mergi în Cloudflare → Pages → Create Project
4. Alege „Connect to GitHub” și selectează repository-ul creat
5. Lasă câmpurile „Build command” și „Output folder” goale (site-ul e pur static)
6. La final, conectează domeniul `www.serviceaer.ro` din setările proiectului Pages

## 🔒 Recomandări suplimentare Cloudflare

- Activează `Always Use HTTPS` în tabul SSL/TLS
- Adaugă Page Rules pentru Cache Everything și redirecționare non-www
- Activează DNSSEC (deja recomandat)

---

Site-ul este optimizat pentru viteză, securitate și ușurință în mentenanță. Poți extinde ușor conținutul adăugând pagini sau funcționalități statice.
