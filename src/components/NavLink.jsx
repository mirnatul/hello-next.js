"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from '@/utils/classNames';

const NavLink = ({ children, href, exact = false, activeClassName, ...props }) => {

    const path = usePathname();
    const active = exact ? path === href : path.startsWith(href);
    // if active is true then give the value and if it is false then it will be filtered by the classNames.js file
    const classes = classNames(props.className, active && activeClassName);
    if (classes) {
        props.className = classes;
    }

    return (
        <Link href={href} {...props}>
            {children}
        </Link>
    );
};

export default NavLink;