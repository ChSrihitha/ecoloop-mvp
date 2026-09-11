export function cn(...v:(string|false|null|undefined)[]){return v.filter(Boolean).join(' ')}
export function uid(prefix='id'){return `${prefix}_${Math.random().toString(36).slice(2,9)}`}
