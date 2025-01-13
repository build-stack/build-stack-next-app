import Link from "next/link";
import SubscribeForm from "./SubscribeForm";
import { FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import Button from "./Button";
import HamburgerButton from "./HamburgetButton/HamburgerButton";

const Header = ({ navOnly = false }) => {
    return (
        <header className="mb-12">
            <nav className="p-4 border-b border-slate-200 dark:border-slate-800">
                <ul className="flex gap-4 max-w-7xl mx-auto justify-between items-center">
                    <Link href="/">
                        <h1 className="text-lg font-light">
                            {'Code with '}
                            <span className="font-black">Corneliu</span>
                        </h1>
                    </Link>
                    <div className="flex flex-row justify-between items-center">
                        <Button className="mr-4">{'Subscribe'}</Button>
                        <HamburgerButton />
                    </div>
                </ul>
            </nav>
            {!navOnly && (
                <div className="min-h-[1px] max-w-7xl mx-auto p-4 text-center py-12">
                    <h1 className="text-4xl font-black">
                        { 'Master the art of computer science' }
                    </h1>
                    <p className="text-slate-600 dark:text-slate-300 mt-4">
                        { 'Discover the skills and strategies to level up from junior to senior even without a computer science degree' }
                    </p>
                    <SubscribeForm />
                    <div className="flex flex-row justify-between items-center mt-12">
                        <div className="flex flex-col justify-start items-start">
                            <p className="text-sm font-extra-light text-slate-600">
                                { 'Written by' }
                            </p>
                            <p className="text-md font-bold text-slate-900 dark:text-slate-100">
                                { 'Corneliu Iancu' }
                            </p>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <Link href="https://twitter.com/corneliuiancu"><FaXTwitter size={24} style={{ marginRight: '12px' }} /></Link>
                            <Link href="https://www.linkedin.com/in/corneliu-iancu"><FaLinkedinIn size={24} /></Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;