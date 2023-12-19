"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const navLinks = [
    {
        path: '/',
        title: 'Home',
    },
    {
        path: '/about',
        title: 'About',
    },
    {
        path: '/profile',
        title: 'Profile',
    },
    {
        path: '/blogs',
        title: 'Blogs',
    },
    {
        path: '/dashboard',
        title: 'Dashboard',
    },
]
const Navbar = () => {

    const pathname = usePathname();
    console.log(pathname);


    return (
        <nav className='flex items-center justify-between container mx-auto'>
            <h1 className='text-3xl font-semibold'>Hello Next.js</h1>
            <ul className='flex items-center justify-center'>
                {
                    navLinks.map((link) => {
                        // const isActive = pathname.startsWith(link.path);
                        const isActive = pathname === link.path
                        return (
                            <Link
                                href={link.path}
                                key={link.path}
                                className={isActive ? 'text-blue-600 mx-4 bg-yellow-200' : 'text-slate-400 mx-4'}
                            >
                                {link.title}
                            </Link>
                        )
                    })
                }
            </ul>
        </nav>
    );
};

export default Navbar;