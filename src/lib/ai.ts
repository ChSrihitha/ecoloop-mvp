import type {Analysis} from './types'; import {fallbackAnalysis} from './demoData';
export async function analyzeEwaste(input:{itemType:string;condition:string;battery:string;imageContext?:string}):Promise<Analysis>{
 try{const r=await fetch('/api/analyze',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(input)});if(r.ok)return await r.json()}catch{}
 return fallbackAnalysis(input.itemType,input.condition,input.battery)
}
