import type {Certificate,EwasteItem,Pickup} from './types';
const guestId='guest';
const sharedKey='ecoloop-all-records';
export interface Store{items:EwasteItem[];pickups:Pickup[];certificates:Certificate[]}
export type Role='user'|'recycler';
export interface UserProfile{id:string;name:string;email:string;mobile?:string;role:Role}
const empty:Store={items:[],pickups:[],certificates:[]};
function scope(userId?:string){return (userId||guestId).trim().toLowerCase().replace(/[^a-z0-9_-]/g,'_')||guestId}
function storeKey(userId?:string){return `ecoloop-store-${scope(userId)}`}
function profileKey(userId:string){return `ecoloop-profile-${scope(userId)}`}
export function loadStore(userId?:string):Store{try{return {...empty,...JSON.parse(localStorage.getItem(storeKey(userId))||'{}')}}catch{return empty}}
export function saveStore(s:Store,userId?:string){localStorage.setItem(storeKey(userId),JSON.stringify(s));window.dispatchEvent(new Event('ecoloop-store'))}
export function loadSharedStore():Store{const stores:Store[]=[];try{const shared=JSON.parse(localStorage.getItem(sharedKey)||'null');if(shared)stores.push(shared);for(let index=0;index<localStorage.length;index++){const key=localStorage.key(index);if(!key?.startsWith('ecoloop-store-'))continue;const value=JSON.parse(localStorage.getItem(key)||'{}') as Store;const owner=key.slice('ecoloop-store-'.length);value.pickups=(value.pickups||[]).map(p=>p.userId? p:{...p,userId:owner});stores.push(value)}}catch{return empty}const result:Store={items:[],pickups:[],certificates:[]};for(const store of stores){for(const item of store.items||[])if(!result.items.some(existing=>existing.id===item.id))result.items.push(item);for(const pickup of store.pickups||[])if(!result.pickups.some(existing=>existing.id===pickup.id))result.pickups.push(pickup);for(const certificate of store.certificates||[])if(!result.certificates.some(existing=>existing.id===certificate.id))result.certificates.push(certificate)}return result}
export function saveSharedStore(s:Store){localStorage.setItem(sharedKey,JSON.stringify(s));window.dispatchEvent(new Event('ecoloop-store'))}
export function resetStore(userId?:string){saveStore(empty,userId)}
export function loadProfile(userId:string):UserProfile|undefined{try{const value=localStorage.getItem(profileKey(userId));return value?JSON.parse(value):undefined}catch{return undefined}}
export function saveProfile(profile:UserProfile){localStorage.setItem(profileKey(profile.id),JSON.stringify(profile));window.dispatchEvent(new Event('ecoloop-profile'))}