import SecondaryButton from '@/components/Buttons/SecondaryButton';
import useUser from '@/hooks/useUser';
import { cn } from '@/lib/utils';
import { Gochi_Hand } from 'next/font/google';

const gochiHand = Gochi_Hand({ weight: '400', subsets: ['latin'] });

export default function IndividualUserSignupForm() {
    const { connectToMetaMaskAccount } = useUser();

    return (
        <div className='w-full py-6 flex flex-col gap-4 items-center'>
            <p className={cn(gochiHand.className, 'text-gray-500 text-xl text-center')}>
                bruhh, we are genz and we believe in anonymity. so nothing to fill that old bad
                looking forms and share your idendity. just click on the connect wallet button and
                enjoy this coool stuff 🌿 bruhhh.
            </p>

            <SecondaryButton
                onClick={connectToMetaMaskAccount}
                label='Connect Wallet'
                className={cn(gochiHand.className, 'text-xl px-10 mt-12 py-2')}
            />
        </div>
    );
}
