'use client'

import React, { useState } from 'react';
import TransitionText from './transirionText/Transition';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        {
            name:'Project',
            href:'#project'
        },
        {
            name:'About',
            href:'#about'
        },
        {
            name:'Contact',
            href:'#connect'
        }
        ];

    return (
        <>
            <nav className='w-full fixed top-0 left-0 z-50 bg-black  shadow-md'> 
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[80px] flex justify-between items-center'>
                    
                    <div>
                        <TransitionText>
                            <h2 className="text-2xl font-bold ">FarahHeydari</h2>
                        </TransitionText>
                    </div>

                    <ul className='hidden md:flex space-x-8 text-lg font-medium '>
                        {navItems.map((item ,i) => (
                            <TransitionText key={i}>
                                <li className='cursor-pointer hover:text-amber-500 transition duration-150'>
                                    <a href={item.href}>{item.name}</a>
                                </li>
                            </TransitionText>
                        ))}
                    </ul>

                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className='md:hidden p-2 text-gray-600 hover:text-amber-500 transition duration-150 z-50'
                        aria-expanded={isMenuOpen}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

        
            <section 
                className={`
                    fixed top-[80px] left-0 h-full w-full bg-neutral-900 z-40 
                    transform transition-transform duration-300 ease-in-out
                    ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
                    md:hidden 
                `}
                aria-hidden={!isMenuOpen}
            >
                <ul className='flex flex-col space-y-4 p-8 text-xl font-semibold'>
                    {navItems.map((item , i) => (
                        <TransitionText key={i}>
                            <li 
                                className='py-2 text-white hover:text-amber-500 cursor-pointer border-b border-gray-100'
                                onClick={() => setIsMenuOpen(false)}
                            >
                               <a href={item.href}>{item.name}</a>
                            </li>
                        </TransitionText>
                    ))}
                </ul>
            </section>
            
        </>
    )
}
