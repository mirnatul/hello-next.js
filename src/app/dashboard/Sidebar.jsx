import NavLink from '@/components/NavLink';
import Link from 'next/link';
import React from 'react';


const navLinks = [
    {
        path: '/dashboard',
        title: 'Dashboard'
    },
    {
        path: '/dashboard/add-product',
        title: 'Add product'
    },
    {
        path: '/dashboard/manage-product',
        title: 'Manage Product'
    },
    {
        path: '/',
        title: 'Home'
    }
]

const Sidebar = () => {
    return (
        <aside className='mr-10'>
            <h1 className='text-3xl font-semibold'>Dashboard</h1>
            <ul>
                {
                    navLinks.map(({ path, title }) => <li
                        key={path}
                        className='my-2'
                    >
                        <NavLink exact activeClassName="bg-green-500 text-white" href={path}>{title}</NavLink>
                    </li>)
                }
            </ul>
        </aside>
    );
};

export default Sidebar;