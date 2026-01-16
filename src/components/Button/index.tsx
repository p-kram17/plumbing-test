import Image from 'next/image';
import styles from './index.module.css';

type TButtonProps = {
    content?: string;
    isButtonType?: boolean;
    className?: string;
    onClick?: () => void;
}

export function Button({ isButtonType = false, className = '', content = '', onClick }: TButtonProps) {
  return isButtonType ? (
    <button
        type='button'
        className={`${styles.button} ${className}`}
        onClick={onClick}
    >
        {content}
    </button>
  ) : (
    <a
        href="tel:1234567890"
        className={`${styles.button} ${styles.secondaryBtn} ${className}`}
    >
      <span className="flex items-center pt-1">
        <Image
          src="/assets/phone.png"
          alt="phone"
          width={24}
          height={24}
        />
      </span>
      <span className="flex flex-col">
        <span className="font-normal text-xs text-center fs-4">Call Now</span>
        <span>123-456-7890</span>
      </span>
    </a>
  );
}
