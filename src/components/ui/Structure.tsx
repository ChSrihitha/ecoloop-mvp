import type {ReactNode} from 'react';
import {cn} from '../../lib/utils';
import {Badge} from './Badge';
import {Card,CardContent} from './Card';

export function PageHeader({eyebrow,title,subtitle,actions}:{eyebrow?:string;title:string;subtitle?:string;actions?:ReactNode}){return <div className="flex flex-wrap items-end justify-between gap-4"><div>{eyebrow&&<p className="text-xs font-bold uppercase tracking-[.16em] text-leaf">{eyebrow}</p>}<h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>{subtitle&&<p className="mt-2 max-w-2xl text-slate-500">{subtitle}</p>}</div>{actions}</div>}
export function StatusBadge({status}:{status:string}){return <Badge>{status}</Badge>}
export function StatCard({label,value,icon:Icon}:{label:string;value:ReactNode;icon?:React.ElementType}){return <Card><CardContent>{Icon&&<div className="grid h-9 w-9 place-items-center rounded-xl bg-mint text-leaf"><Icon size={18}/></div>}<p className="mt-5 text-sm text-slate-500">{label}</p><p className="mt-1 text-3xl font-semibold tracking-tight">{value}</p></CardContent></Card>}
export function StepIndicator({current,steps}:{current:number;steps:string[]}){return <div className="grid gap-2 sm:grid-cols-4">{steps.map((step,index)=><div key={step} className={cn('border-t-2 pt-2 text-xs font-semibold transition-colors',index<=current?'border-ink text-ink':'border-line text-slate-400')}><span className="mr-1 text-leaf">{String(index+1).padStart(2,'0')}</span>{step}</div>)}</div>}
export function EmptyState({title,description,action}:{title:string;description?:string;action?:ReactNode}){return <Card><CardContent className="py-12 text-center"><h2 className="font-semibold">{title}</h2>{description&&<p className="mt-2 text-sm text-slate-500">{description}</p>}{action&&<div className="mt-5">{action}</div>}</CardContent></Card>}
export function LoadingState({label='Loading...'}:{label?:string}){return <div className="py-16 text-center text-sm text-slate-500"><div className="mx-auto mb-3 h-7 w-7 animate-spin rounded-full border-4 border-line border-t-ink"/>{label}</div>}
