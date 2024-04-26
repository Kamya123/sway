import SecondaryButton from '@/components/Buttons/SecondaryButton';
import useUser from '@/hooks/useUser';
import { cn } from '@/lib/utils';
import { Gochi_Hand } from 'next/font/google';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const gochiHand = Gochi_Hand({ weight: '400', subsets: ['latin'] });

export default function IndividualUserSignupForm() {
    const router = useRouter();
    const { connectToMetaMaskAccount, connectWalletStatus } = useUser();
    const buttonLabel =
        connectWalletStatus === 'INIT'
            ? 'Connect Wallet'
            : connectWalletStatus === 'PENDING'
            ? 'Connecting ...'
            : connectWalletStatus === 'SUCCESS'
            ? 'Connected'
            : 'Try Again';

    const [redirectionTimer, setRedirectionTimer] = useState<number>(5); // In Seconds

    useEffect(() => {
        if (connectWalletStatus !== 'SUCCESS') return;

        let interval: NodeJS.Timeout = setInterval(() => {
            if (redirectionTimer >= 1) setRedirectionTimer((prev) => prev - 1);
            else {
                router.push('/profile');
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [redirectionTimer, connectWalletStatus, router]);

    return (
        <div className='w-full py-6 flex flex-col gap-4 items-center'>
            <p className={cn(gochiHand.className, 'text-gray-500 text-xl text-center')}>
                bruhh, we are genz and we believe in anonymity. so nothing to fill that old bad
                looking forms and share your idendity. just click on the connect wallet button and
                enjoy this coool stuff 🌿 bruhhh.
            </p>

            <p
                className={cn(
                    gochiHand.className,
                    'text-center',
                    connectWalletStatus === 'FAILED' ? 'text-red-400' : 'text-purple-500',
                )}
            >
                {connectWalletStatus === 'SUCCESS'
                    ? `Hurrah, your account has been verified successfully. You are getting redirected to your accounts page in ${redirectionTimer} seconds.`
                    : connectWalletStatus === 'FAILED'
                    ? 'oops, your account verification has been failed. Please try again.'
                    : ''}
            </p>

            <SecondaryButton
                onClick={connectToMetaMaskAccount}
                label={buttonLabel}
                className={cn(gochiHand.className, 'text-xl px-10 mt-12 py-2')}
            />
        </div>
    );
}
