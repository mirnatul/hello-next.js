"use client"

import React from 'react';
import NavLink from './NavLink';
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
        path: '/aboexp',
        title: 'AboExp',
    },
    {
        path: '/abouwo',
        title: 'About Two',
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

    // another approach
    const pathname = usePathname();
    console.log(pathname);


    return (
        <nav className='flex items-center justify-between container mx-auto'>
            <h1 className='text-3xl font-semibold'>Hello Next.js</h1>
            <ul className='flex items-center justify-center'>
                {/* another approach */}
                {/* {
                    navLinks.map(({ path, title }) => {
                        // handle double lighting on link
                        const exact = pathname === '/';
                        const isActive = exact ? pathname === path : pathname.startsWith(path);

                        // const isActive = pathname.startsWith(link.path);
                        // const isActive = pathname === link.path
                        return (
                            <Link
                                href={path}
                                key={path}
                                className={isActive ? 'text-blue-600 mx-4 bg-yellow-200' : 'text-slate-400 mx-4'}
                            >
                                {title}
                            </Link>
                        )
                    })
                } */}

                {
                    navLinks.map(({ path, title }) => (
                        <li className='mx-4' key={title}>
                            <NavLink exact={path === '/'} className="p-2" activeClassName="bg-blue-500 text-white" href={path}>{title}</NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
};

export default Navbar;