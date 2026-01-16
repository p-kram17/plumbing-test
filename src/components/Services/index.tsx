'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './index.module.css';

type TServicesProps = {
    className?: string;
}

const SERVICE_ITEMS = [
  { label: 'Emergency Repairs' },
  { label: 'Drain Cleaning' },
  { label: 'Water Heaters' },
  { label: (
      <>
        Leak Detection <br /> &amp; More
      </>),
    alt: 'Leak Detection & More'
  },
];

export function Services({ className = '' }: TServicesProps) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;

    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scrollByAmount = (direction: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;

    const scrollAmount = el.clientWidth;

    el.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    updateScrollState();
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener('scroll', updateScrollState);
    return () => el.removeEventListener('scroll', updateScrollState);
  }, []);

    return (
    <section className={`pt-4 pb-6 ${isHomePage ? styles.bg : ''} ${className}`}>
      <div className="container mx-auto px-0 md:px-4 relative">

        <button
          onClick={() => scrollByAmount('left')}
          disabled={!canScrollLeft}
          className={`
            lg:hidden
            md:hidden
            sm:flex
            absolute left-0 top-1/2 -translate-y-1/2 z-10
            h-10 w-10 items-center justify-center rounded-full
            transition-opacity
            ${isHomePage ? 'text-white' : 'text-[#0f172a]'}
            ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}
          `}
        >
          ←
        </button>

        <button
          onClick={() => scrollByAmount('right')}
          disabled={!canScrollRight}
          className={`
            lg:hidden
            md:hidden
            sm:flex
            absolute right-0 top-1/2 -translate-y-1/2 z-10
            h-10 w-10 items-center justify-center rounded-full
            transition-opacity
            ${isHomePage ? 'text-white' : 'text-[#0f172a]'}
            ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : 'opacity-100'}
          `}
        >
          →
        </button>

        {/* Scroll container */}
        <div
          ref={scrollRef}
          className="
            flex
            flex-row
            lg:flex-nowrap
            items-end
            gap-2
            overflow-x-auto
            sm:overflow-visible
            snap-x snap-mandatory
            scrollbar-hide
            lg:justify-start sm:justify-center
          "
        >
          {SERVICE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className={`
                flex-shrink-0
                w-full
                sm:w-auto
                flex
                flex-col
                items-center
                gap-1
                snap-center
                ${isHomePage ? styles.item : styles.serviceItem}
              `}
            >
              <Image
                src={`/assets/services/s${isHomePage ? '' : 's'}-${idx}.png`}
                alt={
                  item.alt ??
                  (typeof item.label === 'string' ? item.label : '')
                }
                width={idx === SERVICE_ITEMS.length - 1 && isHomePage ? 174 : 194}
                height={idx === SERVICE_ITEMS.length - 1 && isHomePage ? 120 : 96}
              />

              <span className={isHomePage ? '' : styles.serviceItem_wrapper}>
                {item.alt && !isHomePage ? item.alt : item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
