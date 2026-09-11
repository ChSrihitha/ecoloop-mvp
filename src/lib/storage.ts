import type {Certificate,EwasteItem,Pickup} from './types';
const key='ecoloop-demo-v1';
export interface Store{items:EwasteItem[];pickups:Pickup[];certificates:Certificate[]}
const empty:Store={items:[],pickups:[],certificates:[]};
export function loadStore():Store{try{return {...empty,...JSON.parse(localStorage.getItem(key)||'{}')}}catch{return empty}}
export function saveStore(s:Store){localStorage.setItem(key,JSON.stringify(s));window.dispatchEvent(new Event('ecoloop-store'))}
export function resetStore(){saveStore(empty)}
