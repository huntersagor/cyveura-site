# cyveura.com

Static landing page for Cyveura (Coconut Shield + Hunter SIEM). No build step.

- `index.html`, `assets/css/style.css`, `assets/js/main.js`, `assets/img/` (logo, favicon)
- Product links go to https://coconut.cyveura.com and https://hunter.cyveura.com
- Demo/POC buttons use mailto:contact@cyveura.com. Change this if you use a different address.

Local preview: `python3 -m http.server 8080` in this folder, then open http://localhost:8080
Deploy: upload the folder to any static host (Nginx, Cloudflare Pages, Netlify, S3).
