import { cn } from '@/lib/utils';
import { Gochi_Hand } from 'next/font/google';
const gochiHand = Gochi_Hand({ weight: '400', subsets: ['latin'] });

export default function FeedCard() {
    return (
        <div className='border shadow-md bg-white p-4 flex flex-col gap-2'>
            <p className='text-purple-600'>{`How do you define success, and do you feel like you've achieved it in your life?`}</p>
            <div className={cn('flex items-center gap-4 text-sm text-gray-500')}>
                <p>@mother_of_dragons</p>
                <p>5 days Left</p>
            </div>
            <div className='border-[1px] relative p-3 mt-4'>
                <div className='absolute left-3 top-0 -translate-y-1/2 bg-white px-2 text-purple-500 text-sm'>
                    256 Votes
                </div>
                <div className='flex flex-col gap-3 mt-2'>
                    <div className='border p-4 text-sm text-gray-500 cursor-pointer'>
                        <p>
                            Success is achieving financial stability and recognition in my career.
                        </p>
                    </div>
                    <div className='border p-4 text-sm text-gray-500 cursor-pointer'>
                        <p>
                            Success means finding fulfillment and happiness in both personal and
                            professional aspects of life.
                        </p>
                    </div>
                    <div className='border p-4 text-sm text-white bg-purple-500 cursor-pointer'>
                        <p>Success is making a positive impact on others and leaving a legacy.</p>
                    </div>
                    <div className='border p-4 text-sm text-gray-500 cursor-pointer'>
                        <p>
                            Success is continuously striving for improvement and growth, regardless
                            of external achievements.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
