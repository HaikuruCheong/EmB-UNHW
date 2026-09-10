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

## Approved palette: Midnight & Champagne

The active V2 palette uses midnight #101C30, slate #22334B, ivory #F3EEE5, champagne #C6AD7C and secondary blue #8298B8. The WebGL horizon blends subdued blue and champagne; orbital particles use the same palette. Financing controls and pitch documents use ivory for breathing room. Bank debt is blue, investor equity champagne. The classic route is unchanged.

### Reserved light-mode direction: Porcelain & Cobalt

Retain this approved alternative for a potential future toggle: porcelain #F2F0EB, white #FFFFFF, ink #19283E, cobalt #345CDE and mist #A7B8D0. No toggle is enabled yet. A future implementation must switch the semantic CSS tokens, explicit surface treatments and iframe WebGL palette together, with readable chart and approval states in both modes. Theme selection should not reset financing, agent or pitch state.
