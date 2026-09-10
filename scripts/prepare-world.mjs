import fs from 'node:fs';
import ts from 'typescript';
let source=fs.readFileSync('lib/threeui/orbitalSphereRenderer.source.txt','utf8').replace('import * as THREE from "three128";','const THREE = window.THREE;').replace('0xa78bfa','0xd9e5b5').replace('0x701a75','0x356e58').replace('0x8b5cf6','0xa8c492').replace('0xd946ef','0xecedc6').replace('0xc084fc','0xc4d8a4');
source=source.replace('networkGroup.position.set(2.5, 0, -2)','networkGroup.position.set(1.6, 0, -2)').replace('camera.position.z = 5.5','camera.position.z = 6.2');
fs.writeFileSync('public/threeui/orbital-scene.js',ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2020,module:ts.ModuleKind.ES2020}}).outputText);
const shaders=fs.readFileSync('lib/threeui/emeraldHorizonShaders.ts','utf8');
fs.writeFileSync('public/threeui/emerald-shaders.js',ts.transpileModule(shaders,{compilerOptions:{target:ts.ScriptTarget.ES2020,module:ts.ModuleKind.ES2020}}).outputText);

