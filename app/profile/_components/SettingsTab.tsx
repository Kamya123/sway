import useUser from '@/hooks/useUser';
import { CircleArrowOutUpRight } from 'lucide-react';
import { Gochi_Hand } from 'next/font/google';
import Link from 'next/link';

const gochiHand = Gochi_Hand({ weight: '400', subsets: ['latin'] });

export default function SettingsTab() {
    return (
        <div className='flex flex-col gap-5'>
            <UpgradeToProPlan />
        </div>
    );
}

function UpgradeToProPlan() {
    const { user } = useUser();

    const isSubscribed = user?.data?.isSubscribed;
    if (isSubscribed) {
        return (
            <div className='bg-white border shadow-md px-6 py-6 flex flex-col gap-6'>
                <h1 className='text-3xl font-bold text-purple-500'>
                    Your Pro Plan has been activated ✨
                </h1>
                <p className='text-sm flex flex-col gap-1'>
                    Your Pro Plan is now activated, unlocking a world of premium features and
                    exclusive benefits designed to supercharge your experience! 🚀
                </p>
            </div>
        );
    }
    return (
        <div className='bg-white border shadow-md px-6 py-6 flex flex-col gap-6'>
            <h1 className='text-3xl font-bold text-purple-500'>Upgrade to Sway Pro ✨</h1>
            <div className='text-sm flex flex-col gap-1'>
                <p>
                    {`Take your organization's polling to the next level with our premium plan.  Create unlimited polls, gain valuable user insights, and stand out with clear organization identification. This plan empowers data-driven decision making and ensures your voice carries extra weight – all for a competitive monthly price. Upgrade now and unlock the full potential of polling for your organization!`}
                </p>
            </div>
            <div className='flex justify-between items-end gap-8 mt-3'>
                <p className='text-3xl font-bold'>
                    <span className='text-purple-500 text-4xl'>49&#36;</span>/month
                </p>
                <Link href={'https://buy.stripe.com/test_9AQdRyfBB4NK5rOaEE'}>
                    <button className='text-sm hover:underline flex items-start gap-1'>
                        <p>Checkout Now</p>
                        <CircleArrowOutUpRight className='h-4 w-4' />
                    </button>
                </Link>
            </div>
        </div>
    );
}
