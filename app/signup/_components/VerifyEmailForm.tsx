import { cn } from '@/lib/utils';
import { Gochi_Hand } from 'next/font/google';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from '@/components/ui/input-otp';
import SecondaryButton from '@/components/Buttons/SecondaryButton';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const gochiHand = Gochi_Hand({ weight: '400', subsets: ['latin'] });

interface VerifyEmailFormProps {
    otp: string | undefined;
    email: string;
}

export default function VerifyEmailForm({ otp, email }: VerifyEmailFormProps) {
    const router = useRouter();
    const [otpEntered, setOtpEntered] = useState<string | undefined>(undefined);
    const [verificationStatus, setVerificationStatus] = useState<
        'SUCCESS' | 'FAILED' | 'UNVERIFIED'
    >('UNVERIFIED');
    const [redirectionTimer, setRedirectionTimer] = useState<number>(5); // In Seconds
    const [timerActivated, setTimerActivated] = useState<boolean>(false);

    const handleVerifyEmail = () => {
        if (otp && otpEntered && otp === otpEntered) {
            setVerificationStatus('SUCCESS');
            setTimerActivated(true);
        } else {
            setVerificationStatus('FAILED');
        }
    };

    useEffect(() => {
        if (!timerActivated) return;

        let interval: NodeJS.Timeout = setInterval(() => {
            if (redirectionTimer >= 1) setRedirectionTimer((prev) => prev - 1);
            else {
                router.push('/profile');
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [redirectionTimer, timerActivated, router]);

    return (
        <div className='w-full py-6 flex flex-col gap-10 items-center'>
            <p className={cn(gochiHand.className, 'text-gray-500 text-xl text-center')}>
                enter the otp sent on your mail at{' '}
                <span className='text-purple-500 border-b-2 border-gray-300'>{email}</span>
            </p>
            <div className='flex flex-col items-center gap-4'>
                <div className='outline-none'>
                    <InputOTP
                        maxLength={6}
                        value={otpEntered}
                        onChange={(e: any) => {
                            setOtpEntered(e);
                        }}
                    >
                        <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                        </InputOTPGroup>
                    </InputOTP>
                </div>

                <p
                    className={cn(
                        gochiHand.className,
                        'text-center',
                        verificationStatus === 'FAILED' ? 'text-red-400' : 'text-purple-500',
                    )}
                >
                    {verificationStatus === 'SUCCESS'
                        ? `Hurrah, your email has been verified successfully. You are getting redirected to your accounts page in ${redirectionTimer} seconds.`
                        : verificationStatus === 'FAILED'
                        ? 'oops, your email verification has been failed. Please try again.'
                        : ''}
                </p>
            </div>
            <SecondaryButton
                label='Verify otp'
                onClick={handleVerifyEmail}
                className={cn(gochiHand.className, 'text-xl px-10 py-2')}
            />
        </div>
    );
}
