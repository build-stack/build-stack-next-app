export default function Button({ children }: { children: React.ReactNode }) {
    return <button className="bg-slate-900 text-white px-4 py-1 rounded-md">{children}</button>
}