# Tanzmitmir – Website

Responsive Website in der grünen Farbvariante mit fest aktiviertem Dunkelmodus. Es gibt keinen Farbschema- oder Hell-/Dunkel-Umschalter. Die Startseite ist `index.html`.

## 📁 Datei-Struktur

```
/
├── index.html              # Grüne Website
├── script.js               # Interaktionen der Website
├── netlify.toml            # Netlify-Konfiguration
└── README.md               # Diese Datei
```

Die früheren Farbvarianten und die Farbauswahl wurden entfernt. Alte URLs der Varianten werden auf Netlify auf die grüne Startseite weitergeleitet.

## 🚀 Deployment auf Netlify (KOSTENLOS)

### Option 1: Mit Drag & Drop (einfachste Methode)

1. **Gehe zu** https://app.netlify.com/drop
2. **Ziehe** den ganzen `/kassei` Ordner ins Fenster
3. **Warte** ~30 Sekunden
4. **Fertig!** Die Website ist live 🎉

Die URL sieht dann so aus: `https://[zufälliger-name].netlify.app`

### Option 2: Mit GitHub (für regelmäßige Updates)

1. **GitHub Account erstellen** (falls noch nicht vorhanden)
2. **Repository erstellen** mit Namen `tanzverein-kassei`
3. **Dateien hochladen** (alle .html, .css, .js, netlify.toml)
4. **Netlify verbinden**: 
   - https://app.netlify.com → "Connect a git repository"
   - GitHub auswählen
   - Repository wählen
5. **Deploy!** Netlify macht den Rest automatisch

### Option 3: Netlify CLI (für Profis)

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## ✨ Features

- ✅ Festes dunkles Erscheinungsbild im grünen Farbschema
- ✅ Particles.js Background-Animation
- ✅ Dynamische Musik-Quotes
- ✅ Custom Cursor
- ✅ Responsive Design (Mobile, Tablet, Desktop)
- ✅ Smooth Transitions & Animations
- ✅ Lazy-Loading Images

## 🛠 Lokale Entwicklung

```bash
# Server starten
python3 -m http.server 8000

# Browser öffnen
http://localhost:8000/
```

## 📱 Responsive Breakpoints

- **Desktop**: 1200px+
- **Tablet**: 980px - 1199px
- **Mobile**: 860px - 979px
- **Kleine Mobile**: < 760px

## 🔐 Hinweise

- Keine Abhängigkeiten - pure HTML/CSS/JS
- Alle Assets von CDN (Google Fonts, Particles.js, picsum.photos)
- Funktioniert offline (nach dem ersten Load)
- Kein Build-Prozess nötig

---

**Viel Spaß mit der Website! 🎭✨**
