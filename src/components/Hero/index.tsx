import { Button } from '@/components';
import styles from './index.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        
        <div className="px-2 lg:px-16">
          <h1 className={styles.title}>
            Reliable Plumbing <br /> &nbsp; &nbsp; Services
          </h1>
          <p className={styles.subtitle}>
            Your trusted local plumber
          </p>

          <div className="flex gap-4 mt-8 lg:ml-4">
            <Button isButtonType content={'Request Service'} />
            <Button />
          </div>
        </div>
      </div>
    </section>
  );
}
