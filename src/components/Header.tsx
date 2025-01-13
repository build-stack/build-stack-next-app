import Link from "next/link";
import SubscribeForm from "./SubscribeForm";

const Header = ({ navOnly = false }) => {
    
    return (
        <header className="bg-gray-50 mb-12">
            <nav className="p-4 bg-gray-200">
                <ul className="flex gap-4 max-w-7xl mx-auto">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                </ul>
            </nav>
            {!navOnly && (
                <div className="border-b border-gray-200 min-h-[1px] max-w-7xl mx-auto p-4 text-center py-12">
                    <h1 className="text-2xl font-black">
                        { 'Master the art of computer science' }
                    </h1>
                    <p className="text-sm text-gray-500 mt-4">
                        { 'Discover the skills and strategies to level up from junior to senior' }<br />
                        { 'even without a computer science degree' }
                    </p>

                    <SubscribeForm />
                    
                    <div className="flex flex-row justify-between items-center mt-12">
                        <div className="flex flex-col justify-start items-start">
                            <p className="text-sm text-gray-900">
                                { 'Written with ❤️ by' }
                            </p>
                            <p className="text-sm text-gray-900">
                                { 'Corneliu Iancu' }
                            </p>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <Link href="https://twitter.com/corneliuiancu">Twitter</Link>
                            <Link href="https://www.linkedin.com/in/corneliu-iancu">LinkedIn</Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;