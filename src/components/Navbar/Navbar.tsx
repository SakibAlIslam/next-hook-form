'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../../public/logo.png';
import Button from '../Button/Button';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import NavDrawer from '../NavDrawer/NavDrawer'

type NavbarProps = {
    className?: string;
};

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const pathname = usePathname(); // Get the current pathname
    const baseStyles = `navbar
    bg-background text-foreground px-12 py-4 w-full h-20 flex`;

    const activeMenuStyles = `text-primaryText font-medium cursor-pointer`;
    const inActiveMenuStyles = `text-disableText`;

    // Utility function to check if a link is active
    const isActive = (href: string) => pathname === href;

    return (
        <nav className={`${baseStyles} ${className}`}>
            <div className='nav-container flex items-center justify-between gap-2 w-full max-w-screen-2xl m-auto'>
                <Image src={logo} alt="logo" width={100} height={100} />
                <ul className="items-center justify-evenly gap-4 hidden md:flex">
                    <li className={isActive('/') ? `${styles.activeMenu} ${activeMenuStyles}` : inActiveMenuStyles}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={isActive('/series') ? `${styles.activeMenu} ${activeMenuStyles}` : inActiveMenuStyles}>
                        <Link href="/series">Series</Link>
                    </li>
                    <li className={isActive('/blog') ? `${styles.activeMenu} ${activeMenuStyles}` : inActiveMenuStyles}>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li className={isActive('/videos') ? `${styles.activeMenu} ${activeMenuStyles}` : inActiveMenuStyles}>
                        <Link href="/videos">Videos</Link>
                    </li>
                    <li className={isActive('/ebooks') ? `${styles.activeMenu} ${activeMenuStyles}` : inActiveMenuStyles}>
                        <Link href="/ebooks">e-Books</Link>
                    </li>
                </ul>
                <Button
                    className='hidden md:flex'
                    variant="secondary"
                    size="small"
                    isLoading={false}
                    isDisabled={false}
                >
                    Contact Us
                </Button>
                <HamburgerMenuIcon className='w-5 h-5 lg:hidden cursor-pointer' onClick={() => setDrawerOpen(!drawerOpen)} />
                <NavDrawer open={drawerOpen} setDrawerOpen={setDrawerOpen} />
            </div>
        </nav>
    );
};

export default Navbar;
