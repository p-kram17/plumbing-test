'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, Logo } from '@/components';
import styles from './index.module.css';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Pricing', href: '/pricing' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className={styles.header}>
        <div className="container mx-auto px-4 h-full flex items-center justify-between font-semibold">
          <Logo isHeader />

          {/* Desktop nav */}
          <nav className="hidden ml-auto mr-8 lg:flex items-center gap-8 text-white">
            {NAV_ITEMS.map(item => {
              const isActive =
                item.href === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`${styles.navLink} ${
                    isActive ? styles.active : ''
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Phone + CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="w-8 h-8 p-2 bg-[#194470] rounded-[50%]">
              <Image
                src="/assets/phone.png"
                alt="phone"
                width={32}
                height={32}
              />
            </div>
            <div className="mr-4 text-white text-sm leading-tight">
              <div>
                24/7 Emergency Call
              </div>
              <a
                href="tel:1234567890"
                className={`text-lg font-bold ${styles.tel}`}
              >
                123-456-7890
              </a>
            </div>
            <Button isButtonType content={'Get a quote'} className={styles.button} />
          </div>

          {/* Mobile menu */}
          <button
            className="lg:hidden text-white"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>
      </header>
      
      {/* Mobile slide menu */}
      <div className={`${styles.mobileMenu} ${open ? styles.open : ''}`}>
        <button
          className={styles.close}
          onClick={() => setOpen(false)}
        >
          ✕
        </button>

        {NAV_ITEMS.map(item => {
          const isActive =
            item.href === '/'
              ? pathname === '/'
              : pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`w-[fit-content] ${styles.navLink} ${
                isActive ? styles.active : ''
              }`}
            >
              {item.label}
            </Link>
          );
        })}

        <a href="tel:1234567890" className="flex gap-2 text-white font-bold mt-6">
          <span className="flex items-center">
            <Image
              src="/assets/phone.png"
              alt="phone"
              width={16}
              height={16}
            />
          </span>
          <span>123-456-7890</span>
        </a>

        <button className={`${styles.cta} mt-6`}>
          GET A QUOTE
        </button>
      </div>
    </>
  );
}
