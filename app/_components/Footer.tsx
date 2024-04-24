import Logo from '@/components/Logo';
import { cn } from '@/lib/utils';
import { Gochi_Hand } from 'next/font/google';

const gochiHand = Gochi_Hand({ weight: '400', subsets: ['latin'] });

export default function Footer() {
    return (
        <footer
            id='footer'
            className='px-6 py-10 bg-black flex flex-col md:flex-row justify-between  text-gray-500'
        >
            <div className='flex flex-col w-full md:w-1/3'>
                <div className='flex flex-col gap-2'>
                    <Logo />
                    <p className='text-sm'>
                        An initiative driven project started and finished under the guidance of{' '}
                        <a className='underline text-purple-500'>Dr. Suchismita Maiti</a> &{' '}
                        <a className='underline text-purple-500'> Dr. Neepa Biswas</a>
                    </p>
                </div>
            </div>
            <div className='text-sm text-start md:text-end flex flex-col gap-2 mt-10 md:mt-0'>
                <p>
                    For more informations contact us at{' '}
                    <a href='mailto:contact@sway.in' className='underline text-purple-500'>
                        contact@sway.in
                    </a>
                </p>
                <p className='flex flex-col gap-1 mt-10 md:mt-0'>
                    Dont think much,{' '}
                    <span className={cn('text-purple-500 text-2xl', gochiHand.className)}>
                        just sway it baby!
                    </span>
                </p>
            </div>
        </footer>
    );
}
