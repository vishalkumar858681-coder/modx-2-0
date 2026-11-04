# Modexa 2.0 — START HERE

Modexa Digital homepage, final design from Claude (3 Nov 2026). Moon theme (moon white + dark blue + dark yellow), all motion, icons, photos and docs are in this folder.

## Folder me kya hai

| File / folder | Kya hai |
|---|---|
| `site/index.html` | Poora homepage (saara text, sections, icons) |
| `site/css/style.css` | Saare colours, fonts, button sizes, spacing aur **saare motion/animation** (pure CSS) |
| `site/img/` | Photos (sample, Unsplash; baad me real photos se replace karna) |
| `docs/DESIGN.md` | Colours (hex codes), button colours + sizes, fonts, spacing, icons, photos, rules |
| `docs/MOTION.md` | Har section ka motion/animation, kab chalta hai, kitni der, hover effects |
| `docs/SECTION-STATUS.md` | 16 sections ka status aur locked decisions |
| `docs/CHAT-SUMMARY.md` | Claude ke saath poori chat ka detailed summary |
| `docs/COLOUR-RESEARCH.md` | 20 agencies ki colour research aur Moon theme kaise chuna |
| `previews/` | Final images (desktop + phone), **motion walkthrough video**, agency research images |
| `CHATGPT-PROMPT.md` | ChatGPT me paste karne wala starting prompt |
| `server.js`, `package.json`, `start-windows.bat`, `start-mac.command` | Localhost par chalane ke liye |

## Step 1: ChatGPT me le jaana
1. ChatGPT me ek naya **Project** banao, naam "Modexa 2.0".
2. Ye poori **Modexa-2.0.zip** upload karo. Agar zip na le, to `docs/` ki saari files, `site/index.html`, `site/css/style.css` aur `previews/` ki images upload karo.
3. `CHATGPT-PROMPT.md` ka text copy karke ChatGPT me paste karo.
4. Motion samjhane ke liye `previews/Modexa-2.0-motion-walkthrough.mp4` khud dekho. Usme har section ka naam aur animation neeche likha aata hai. `docs/MOTION.md` me yahi sab likha hua hai, ChatGPT ko wahi file dikhao.

## Step 2: VS Code me kholna aur localhost par chalana
1. Zip ko unzip karo, aur VS Code me **File → Open Folder** se `Modexa-2.0` folder kholo.
2. Ek baar **Node.js** install karo (nodejs.org se, LTS version). Ye free hai.
3. VS Code me **Terminal → New Terminal** kholo aur likho:
   ```
   node server.js
   ```
4. Browser (Chrome) me kholo: **http://localhost:3000**
5. **Asaan tareeka:**
   - Windows par `start-windows.bat` par double-click karo.
   - Mac par `start-mac.command` par double-click karo. Pehli baar Mac permission maange to right-click → Open karo.
   - Isse server chalu ho jaata hai aur browser khul jaata hai.
6. **Doosra tareeka:** VS Code me **Live Server** extension install karo (VS Code ise khud suggest karega). Phir neeche "Go Live" dabao, page port 3000 par khulega.

## Step 3: Badlav karna
- **Text ya section** badalna ho to `site/index.html` me karo.
- **Colours, button, font, spacing ya motion** badalna ho to `site/css/style.css` me karo. Colours sabse upar `:root { ... }` me hain.
- File save karke browser refresh karo (Ctrl+R / Cmd+R), badlav turant dikhega.
- **Motion ke liye Chrome ya Edge** use karo. Safari/Firefox me page dikhega, par scroll animations nahi chalenge.

## Rules (inhe mat todna)
1. Naya text Vishal se pooche bina mat jodna. Original text word for word rahe.
2. **FAQ section (14) locked hai**, word for word.
3. Saara text page load par HTML me rahe (SEO + AI search).
4. Placeholders [brackets] me hi rahenge jab tak asli info na mile. Koi nakli number, client ya review nahi.
5. Har badlav pehle screenshot me dikhao, approval ke baad hi file badlo.

## Abhi baaki kaam
1. Placeholders bharna: [Name], [City], [X]%, phone, email, address, partner badges.
2. Real client logos aur real team photos lagana.
3. Page par dikh rahe 2 internal notes hatana: "Note for launch…" (Free tools ke neeche) aur "[Delete any certification…]" (Team ke neeche).
4. Clash Grotesk font ko live site par self-host karna.
5. Meta description likhna (text Vishal dega).
6. Baad me har service ka alag page banana.
