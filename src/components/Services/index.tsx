'use client';

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

  return (
    <section className={`pt-4 pb-6 ${isHomePage ? styles.bg : ''} ${className}`}>
      <div className="container mx-auto px-4 flex justify-center">
        <div className={`flex flex-row gap-${isHomePage ? 2 : 0} flex-wrap items-end`}>
          {SERVICE_ITEMS.map((item, idx) => (
              <div key={idx} className={`flex flex-col items-center gap-1 ${isHomePage ? styles.item : styles.serviceItem}`}>
                <Image
                    src={`/assets/services/s${isHomePage ? '' : 's'}-${idx}.png`}
                    alt={
                        item.alt ??
                        (typeof item.label === 'string'
                        ? item.label
                        : '')
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
