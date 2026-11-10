# RabbitMQ in a Laravel e-commerce app

A short sequential course. Static HTML, no build step.

## Run locally
    python3 -m http.server 8000
then open http://localhost:8000 (a server is needed for the diagrams' module import).

## Deploy to GitHub Pages
Push to GitHub, then Settings > Pages > deploy from branch, root folder. `.nojekyll` is included.

## Add a lesson (patch workflow)
Each patch adds `lessons/000N-slug.html` and flips that lesson's `status` from "planned" to "ready" in `assets/lessons.js`.
    git am 0002-*.patch
Prev/next links and the index list are generated from `assets/lessons.js`, so older lessons never need editing.
