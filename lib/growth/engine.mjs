export function financing(total,debt,equity,valuation,cashAvailable){
 const annualPayment=debt*.07/(1-Math.pow(1.07,-5));
 return {total,debt,equity,gap:total-debt-equity,annualPayment,dscr:cashAvailable/(annualPayment+100000),downsideDscr:cashAvailable*.7692307692/(annualPayment+100000),ownership:100*equity/(valuation+equity)};
}
export function releaseAllowed(gates,gap){return gates.length===3&&gates.every(Boolean)&&gap===0;}
export function scoreMatch(scores,eligible){return eligible?Math.round(scores.reduce((sum,s,i)=>sum+s*[20,15,20,10,10,15,10][i]/100,0)):null;}
export function matchEligibility(company,investor,equity){const ownership=equity/(company.valuation+equity)*100;return investor.id!=='adrian'&&equity>=investor.min&&equity<=investor.max&&ownership>=10&&ownership<=20;}
export function matchFactors(company,investor,equity){return company.factors.map((v,index)=>index===1&&investor.sector!==company.sector?40:index===0&&(equity<investor.min||equity>investor.max)?0:v);}
