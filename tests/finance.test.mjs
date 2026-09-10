import test from 'node:test';
import assert from 'node:assert/strict';
import { financing, releaseAllowed, scoreMatch, matchEligibility } from '../lib/growth/engine.mjs';
test('funding reduction exposes gap without increasing bank debt', () => {
  const result = financing(2400000,1200000,750000,6800000,650000);
  assert.equal(result.gap,450000);
  assert.equal(result.debt,1200000);
  assert.ok(Math.abs(result.annualPayment-292668.8333)<0.01);
});
test('original scenario gives 15 percent ownership and 1.655 coverage',()=>{
 const r=financing(2400000,1200000,1200000,6800000,650000);
 assert.equal(r.ownership,15);
 assert.ok(Math.abs(r.dscr-1.6553389)<0.0001);
});
test('release requires every gate and zero funding gap',()=>{
 assert.equal(releaseAllowed([true,true,false],0),false);
 assert.equal(releaseAllowed([true,true,true],450000),false);
 assert.equal(releaseAllowed([true,true,true],0),true);
});
test('score arithmetic preserves contributions and excludes hard failures',()=>{
 assert.equal(scoreMatch([100,100,60,100,70,100,70],true),86);
 assert.equal(scoreMatch([100,100,100,100,100,100,100],false),null);
});
test('mandate enforces minimum ticket and ownership bounds',()=>{
 const c={valuation:6800000};const i={id:'evelyn',min:500000,max:1500000};
 assert.equal(matchEligibility(c,i,50000),false);
 assert.equal(matchEligibility(c,i,1200000),true);
 assert.equal(matchEligibility(c,i,0),false);
 assert.equal(matchEligibility(c,{...i,id:'adrian'},1200000),false);
});
