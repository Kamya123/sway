import { cn } from '@/lib/utils';
import { Gochi_Hand } from 'next/font/google';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from '@/components/ui/input-otp';
import SecondaryButton from '@/components/Buttons/SecondaryButton';

const gochiHand = Gochi_Hand({ weight: '400', subsets: ['latin'] });

export default function VerifyEmailForm() {
    const handleVerifyEmail = () => {};

    return (
        <div className='w-full py-6 flex flex-col gap-10 items-center'>
            <p className={cn(gochiHand.className, 'text-gray-500 text-xl text-center')}>
                enter the otp sent on your mail at{' '}
                <span className='text-purple-500 border-b-2 border-gray-300'>
                    {'avinashgupta.works@gmail.com'}
                </span>
            </p>
            <div className='outline-none'>
                <InputOTP maxLength={6}>
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

            <SecondaryButton
                label='Verify otp'
                onClick={handleVerifyEmail}
                className={cn(gochiHand.className, 'text-xl px-10 py-2')}
            />
        </div>
    );
}
