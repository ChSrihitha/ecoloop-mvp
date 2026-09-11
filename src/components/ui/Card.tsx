import type {HTMLAttributes} from 'react'; import {cn} from '../../lib/utils';
export function Card({className='',...p}:HTMLAttributes<HTMLDivElement>){return <div className={cn('rounded-2xl border border-line bg-white shadow-soft',className)} {...p}/>} export function CardContent({className='',...p}:HTMLAttributes<HTMLDivElement>){return <div className={cn('p-5',className)} {...p}/>} 
