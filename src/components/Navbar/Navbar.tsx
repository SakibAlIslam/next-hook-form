// 'use client';  // This makes the component client-side only
'use client';

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../../public/logo.png';
import Button from '../Button/Button';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

type NavbarProps = {
    className?: string; // Custom class names for further styling
};

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
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
                <ul className="flex items-center justify-evenly gap-4">
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
                    variant="secondary"
                    size="small"
                    isLoading={false}
                    isDisabled={false}
                >
                    Contact Us
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;
