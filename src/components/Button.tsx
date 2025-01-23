'use client'
export default function Button({ children, className, style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) {
    return <button 
        style={style}
        className={`px-4 py-1 select-none bg-slate-100 border-b-4 border-slate-900 border-2 rounded-md active:border-b-2 active:mt-0.5 active:opacity-80 dark:border-slate-100 dark:text-white dark:bg-slate-900 ${className}`}
        onClick={() => {
            console.log('clicked');
        }}
    >{children}</button>
}