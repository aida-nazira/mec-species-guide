# MEC Species Guide 🌊🐸

A mobile-first static website for QR-code species information at the Marine Education Center.

## The important idea

Use **one QR code per exhibit**, not one QR code per animal.

Suggested QR destinations:

- `?exhibit=big-center` → Bamboo Shark + Chocochip Sea Star + Horseshoe Crab
- `?exhibit=kresiel` → Moon Jellyfish
- `?exhibit=desert` → Leopard Gecko
- `?exhibit=forest-decomposers` → Amber Ducky Isopod + Strawberry Candy Pill Millipede
- `?exhibit=paludarium` → Amber Tetra + paludarium explanation
- `?exhibit=forest-amphibians` → White's Tree Frog + Crocodile Skink

## Add your real-life photos

Put your photos into `assets/` using these exact filenames:

- bamboo-shark.jpg
- chocochip-seastar.jpg
- horseshoe-crab.jpg
- moon-jellyfish.jpg
- leopard-gecko.jpg
- amber-ducky-isopod.jpg
- strawberry-candy-pill-millipede.jpg
- amber-tetra.jpg
- white-tree-frog.jpg
- crocodile-skink.jpg

If a photo is missing, the website automatically shows a friendly placeholder.

## Deploy with GitHub Pages

1. Create a new GitHub repository, e.g. `mec-species-guide`.
2. Upload `index.html`, `style.css`, `species.js`, `app.js`, and the `assets` folder.
3. In GitHub: **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`.
6. Save and wait for the GitHub Pages URL.
7. Open the URL on your phone and test every exhibit query.

Your QR codes should point to the final GitHub Pages URL, for example:

`https://YOUR-USERNAME.github.io/mec-species-guide/?exhibit=big-center`

## Before printing QR codes

Test the final links on:
- iPhone
- Android
- normal mobile data (not only hotel Wi-Fi)
- Wi-Fi
- different browsers

Do not print the QR codes until the final repository URL is confirmed.

## Editing content

All animal information is in `species.js`.

Each animal has:
- common name
- scientific name
- why the name was given
- quick facts
- WOW fact
- characteristics
- behaviour
- ecological importance
- feeding
- mating/reproduction
- life cycle
- tags

## Scientific-name caution

Several trade/common names used in animal-keeping communities do not necessarily establish a formal species identification. In particular, confirm the exact IDs for the Amber Ducky Isopod, Strawberry Candy Pill Millipede and Amber Tetra with your supplier/curator before presenting a species-level scientific name as fact.

## Next upgrade ideas

- Add an official MEC logo.
- Add your own real photos.
- Add an “I spotted one!” interaction.
- Add a simple sound toggle for optional animal/environment sounds.
- Add a Malay-language toggle.
- Add a “Did you know?” surprise card.
- Add accessibility controls and high-contrast mode.
