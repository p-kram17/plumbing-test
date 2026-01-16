import Image from 'next/image';

type TLogoProps = {
    isHeader?: boolean;
}

export function Logo({ isHeader = false }: TLogoProps) {
  return (
    <div className='flex items-center gap-2'>
      <Image
          src='/assets/logo.png'
          alt='PLUMBING SERVICES'
          width={32}
          height={32}
        />
      <span className='text-xl font-extrabold tracking-wide'>
        <span
            className={`${
            !isHeader
                ? 'bg-gradient-to-b from-white via-sky-100 to-sky-600 bg-clip-text text-transparent'
                : 'text-white'
            }`}
            style={{ backgroundSize: !isHeader ? '100% 115%' : undefined }}
        >
            PLUMBING
        </span>
        <span className='text-sky-400'> SERVICES</span>
      </span>
    </div>
  );
}
