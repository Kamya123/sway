import { cn } from '@/lib/utils';
import { Gochi_Hand } from 'next/font/google';
const gochiHand = Gochi_Hand({ weight: '400', subsets: ['latin'] });

export default function CreatePostCard() {
    return (
        <div className='shadow-md border bg-white'>
            <div className='flex divide-x-[1px] border-b'>
                <div className='flex-1 text-center text-sm text-gray-500 py-4'>
                    <h3 className='text-4xl text-purple-500 font-bold'>23</h3>
                    <p className='mt-2 md:mt-0'>Total Posts Created</p>
                </div>
                <div className='flex-1 text-center text-sm text-gray-500 py-4'>
                    <h3 className='text-4xl text-purple-500 font-bold'>529</h3>
                    <p className='mt-2 md:mt-0'>Votes on Last Post</p>
                </div>
                <div className='flex-1 text-center text-sm text-gray-500 py-4'>
                    <h3 className='text-4xl text-purple-500 font-bold'>45</h3>
                    <p className='mt-2 md:mt-0'>Comments on Last Post</p>
                </div>
            </div>
            <div className='p-4'>
                <p className={cn(gochiHand.className, 'text-center text-xl cursor-pointer')}>
                    Start a new Survey
                </p>
            </div>
        </div>
    );
}
