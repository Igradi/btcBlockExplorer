import React, { useState } from 'react';
import logo from '../images/bitcoin-btc-logo.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');

    const handleSearch = async (event) => {
        event.preventDefault();
        let urls = [
            { url: `http://localhost:4000/block-by-height/${search}`, route: `/blockDetails/${search}` },
            { url: `http://localhost:4000/block/${search}`, route: `/blockDetails/${search}` },
            { url: `http://localhost:4000/transaction/${search}`, route: `/transactionDetails/${search}` }
        ];
        for (let item of urls) {
            const response = await fetch(item.url);
            if (response.ok) {
                navigate(item.route);
                break;
            }
        }
    };

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <Link to="/">
                                <img className="h-8 w-8" src={logo} alt="Logo" />
                            </Link>
                        </div>
                        <a href="/" className="text-white px-3 py-2 rounded-md text-sm font-bold text-[16px]">BlockExplorer</a>
                        <div className="hidden md:flex">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
                                <a href="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex">
                        <div className="ml-4 flex items-center md:ml-6">
                            <form onSubmit={handleSearch}>
                                <input type="text" placeholder="Search transactions, blocks, block hashes..." className="rounded-md p-2 w-52" value={search} onChange={(e) => setSearch(e.target.value)} />
                            </form>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
                </div>
                <div className="pt-4 pb-3 border-t border-gray-700">
                    <div className="flex items-center px-5">
                        <div className="flex-shrink-0">
                            <form onSubmit={handleSearch}>
                                <input type="text" placeholder="Search transactions, blocks, block hashes..." className="rounded-md p-2" value={search} onChange={(e) => setSearch(e.target.value)} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
