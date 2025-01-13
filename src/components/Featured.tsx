import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCalendarDay } from "react-icons/fa6";


// Featured Post.
export default function Featured({ title, slug }: { title: string, slug: string }) {
    return <Link style={{ display: 'block', width: '100%' }} href={`/p/${slug}`}>
        <div className="w-full mb-4 border-slate-200 dark:border-slate-800 ">
            <div className="">
                {/* card preview */}
                <div className="w-full h-32 bg-slate-200 dark:bg-slate-800 rounded-lg rounded-b-none"></div>
            </div>
            <div className="p-4 border-b border-l border-r rounded-b-lg border-slate-200 dark:border-slate-800">
                <div className="flex flex-row items-center mb-2">
                    <FaCalendarDay className="text-slate-500 dark:text-slate-400 mr-2" />
                    <p className="text-sm text-slate-500 dark:text-slate-400"> {'24.01.2025'}</p>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <h2 className="text-lg font-normal">{title}</h2>
                    <FaArrowRightLong />
                </div>
                {/* <p className="text-sm text-slate-500 dark:text-slate-400">{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}</p> */}
            </div>
        </div>
    </Link>
}