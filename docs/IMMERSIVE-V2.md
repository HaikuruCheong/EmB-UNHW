# Growth Circle — Immersive Edition 02

Version 1 remains available at `/classic` and is preserved by the `growth-circle-v1` source tag. Its original components and stylesheet remain separate.

Version 2 at `/` replaces the dashboard shell with a persistent full-viewport WebGL world, a floating navigation dock, orbital investor profiles, staggered glass relationship cards, a capital visualization and a six-agent constellation. All company, evidence, financing, pitch and approval surfaces share the immersive visual language.

## ThreeUI sources

- Emerald Horizon shaders: https://github.com/MengTo/threeui/blob/main/src/shaders/emerald-horizon/emeraldHorizonShaders.ts
- Orbital Sphere renderer: https://github.com/MengTo/threeui/blob/main/src/shaders/orbital-sphere/orbitalSphereRenderer.ts
- ThreeUI Community MIT license is included at `public/threeui/LICENSE.txt`.
- Original renderer source is retained in `lib/threeui/orbitalSphereRenderer.source.txt`. `scripts/prepare-world.mjs` adapts its palette and framing and emits browser modules.
- The local Three.js runtime and fonts are reused from ThreeUI assets. Font and asset notices remain in `public/fonts` and `public/threeui`.

WebGL pauses when the page is hidden, honors reduced motion, caps pixel ratio and frame rate, disposes GPU resources, and falls back to a static background when unavailable.

Both versions are synthetic prototypes. Agent responses use a source-backed deterministic simulation, not a live language model. Role selection is a demo perspective switch rather than production access control. No external introductions or investment execution occur.
