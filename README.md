# Ganesh Kumar B — Animated Portfolio (HTML, CSS, Bootstrap 5 & JavaScript)

A zero-build, pure **HTML5 + CSS3 + Bootstrap 5.3 + Vanilla JavaScript** developer portfolio ready to run locally or deploy directly to GitHub Pages / Vercel (`ganeshkumar-github-io.vercel.app`).

## Folder Structure

```text
ganesh-kumar-portfolio/
├── index.html                   # Semantic HTML5 + Bootstrap 5.3 layout
├── css/
│   └── style.css                # Custom CSS3 animations, marquee, scroll-reveal & tokens
├── js/
│   └── main.js                  # Vanilla JS animations, 3D tilt, counters, filter & modal
├── assets/
│   └── Ganesh_Kumar_Resume.pdf  # Included resume PDF
└── README.md                    # Local setup & deployment guide
```

## Run Locally (Pick Any Method)

### Option 1: PHP Built-in Server (Recommended for PHP Developers)
```bash
cd ganesh-kumar-portfolio
php -S localhost:8000
```
Then open `http://localhost:8000` in your browser.

### Option 2: VS Code Live Server
1. Open the `ganesh-kumar-portfolio` folder in VS Code.
2. Right-click `index.html` -> **Open with Live Server**.

### Option 3: Node.js or Python Static Server
```bash
# Using Node.js
npx serve .

# Or using Python 3
python3 -m http.server 3000
```

## Deploy to Vercel / GitHub Pages
- **Vercel**: Push this folder to your GitHub repo and import it in Vercel (Framework Preset: `Other`, Build Command: none, Output Directory: `.`).
- **GitHub Pages**: Push to `main` -> Repository **Settings** -> **Pages** -> Deploy from `main` branch (`/root`).
