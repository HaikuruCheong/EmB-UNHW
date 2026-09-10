import fs from 'node:fs';
import ts from 'typescript';
let source=fs.readFileSync('lib/threeui/orbitalSphereRenderer.source.txt','utf8').replace('import * as THREE from "three128";','const THREE = window.THREE;').replace('0xa78bfa','0xc6ad7c').replace('0x701a75','0x22334b').replace('0x8b5cf6','0x8298b8').replace('0xd946ef','0xf3eee5').replace('0xc084fc','0xb3c1d5');
source=source.replace('networkGroup.position.set(2.5, 0, -2)','networkGroup.position.set(1.6, 0, -2)').replace('camera.position.z = 5.5','camera.position.z = 6.2');
fs.writeFileSync('public/threeui/orbital-scene.js',ts.transpileModule(source,{compilerOptions:{target:ts.ScriptTarget.ES2020,module:ts.ModuleKind.ES2020}}).outputText);
const shaders=fs.readFileSync('lib/threeui/emeraldHorizonShaders.ts','utf8').replace('vec3(0.0, 0.02, 0.0)','vec3(0.025, 0.04, 0.07)').replace('vec3(0.05, 0.8, 0.2)','vec3(0.25, 0.39, 0.62)').replace('vec3(0.0, 1.0, 0.5)','vec3(0.60, 0.52, 0.37)');
fs.writeFileSync('public/threeui/emerald-shaders.js',ts.transpileModule(shaders,{compilerOptions:{target:ts.ScriptTarget.ES2020,module:ts.ModuleKind.ES2020}}).outputText);

