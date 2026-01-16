import { Button, Logo, Services } from '@/components';

export default function ServicesPage() {
  return (
    <section className='bg-white py-36'>
      <div className='container mx-auto mb-6 flex justify-center items-center w-[fit-content] lg:scale-150'>
        <Logo />
      </div>
      <Services />
      <div className="flex justify-center py-6">
        <Button isButtonType content={'Request Service'} />
        <Button />
      </div>
      <Services />
    </section>
  );
}
