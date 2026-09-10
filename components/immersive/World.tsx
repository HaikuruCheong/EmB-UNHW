"use client";
import {useEffect,useRef} from 'react';
export function World({view}:{view:string}){
 const ref=useRef<HTMLIFrameElement>(null);
 const update=()=>ref.current?.contentWindow?.postMessage({type:'growth-world',world:view},window.location.origin);
 useEffect(()=>{update()},[view]);
 useEffect(()=>{const stage=(event:Event)=>{const world=(event as CustomEvent<string>).detail;ref.current?.contentWindow?.postMessage({type:'growth-world',world},window.location.origin)};window.addEventListener('growth-stage',stage);return ()=>window.removeEventListener('growth-stage',stage)},[]);
 return <div className="suite-world" aria-hidden="true"><iframe ref={ref} src="/threeui/immersive-world.html" title="Growth Circle WebGL world" tabIndex={-1} onLoad={update} sandbox="allow-scripts allow-same-origin"/><div className="world-vignette"/><div className="world-grain"/></div>;
}
