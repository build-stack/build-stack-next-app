import Link from "next/link";

export default function RecentGuides() {
    return (
        <div>
            <h2 className="text-4xl font-light mb-16">{'Recent guides'}</h2>
            <Link href="/guides" className="border-2 border-black rounded-3xl px-8 py-3 hover:border-slate-500 hover:text-slate-500">
                {'View all guides'}
            </Link>
        </div>
    )
}

