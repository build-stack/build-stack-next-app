import Link from "next/link";
import SubscribeForm from "./SubscribeForm";
import { FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';
import Button from "./Button";
import HamburgerButton from "./hamburget-button/HamburgerButton";

const Header = ({ navOnly = false }) => {
    return (
        <header
            style={{ gridColumn: "m1-end / m2-start", }} // Full width
            className="grid bg-slate-100">
            <ul 
                className="grid"
                style={{ gridTemplateColumns: "auto 1fr", gap: "16px", }}
            >
                <Link href={'/'}>{'Corneliu'} {'Iancu'}</Link>
                <nav className="flex flex-row justify-between items-center hidden md:block">
                    <ul className="grid grid-flow-col gap-4 justify-end items-center">
                        <li>
                            <Link href="/about">{'About'}</Link>
                        </li>
                        <li>
                            <Link href="/guides">{'Guides'}</Link>
                        </li>
                        <li>
                            <Link href="/posts">{'Posts'}</Link>
                        </li>
                        <li>
                            <Link href="/contact">{'Contact me'}</Link>
                        </li>
                    </ul>
                </nav>
                <span className="md:hidden" style={{textAlign: 'right'}}>menu</span>
            </ul>
            {!navOnly && false && ( // disabled for now
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