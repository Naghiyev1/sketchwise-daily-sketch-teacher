# SketchWise v1.3 — Asset-Based References

This version fixes the core issue with earlier builds.

Earlier versions tried to generate all drawing references inside JavaScript/SVG functions. That made some images look weird.

v1.3 changes the system:
- Real SVG asset files in `/assets/sketches/`
- Each prompt has a final reference image
- Each prompt has a construction guide image
- Smaller curated library for quality
- Easier to replace or improve drawings later

## Upload

Upload all files and folders:

- index.html
- app-v1-3.js
- style-v1-3.css
- app.js
- style.css
- icon.svg
- manifest.json
- service-worker.js
- README.md
- assets/sketches/

## Important

The app is now designed so image quality can improve without rewriting app logic.
