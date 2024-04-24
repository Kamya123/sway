import PrimaryButton from '@/components/Buttons/PrimaryButton';
import SecondaryButton from '@/components/Buttons/SecondaryButton';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className=' flex-1 flex flex-col gap-8 items-center justify-center relative'>
            <div className='absolute inset-0 h-full w-full bg-purple-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-[-10]'></div>
            <div className='w-[90%] md:w-[65%]'>
                <h1 className='text-4xl text-center font-bold leading-[1.4em]'>
                    Empower Your Voice - Secure,{' '}
                    <span className='text-purple-500 border-b-4 border-gray-300'>Anonymous</span>{' '}
                    Polling with{' '}
                    <span className='text-purple-500 border-b-4 border-gray-300'>Sway</span> !
                </h1>
                <p className='mt-4 text-center text-gray-500'>
                    Sway is a social media platform designed to facilitate anonymous polling using
                    blockchain technology. Users can create polls, and others can vote on them while
                    ensuring the privacy and integrity of the voting process.
                </p>
            </div>
            <div className='flex items-center gap-2'>
                <Link href={'/signup'}>
                    <PrimaryButton label='Get Started' />
                </Link>
                <Link href={'#about'}>
                    <SecondaryButton label='Read More' />
                </Link>
            </div>
        </section>
    );
}
