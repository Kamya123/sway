import SecondaryButton from '@/components/Buttons/SecondaryButton';
import Input from '@/components/Input';
import { cn } from '@/lib/utils';
import { Gochi_Hand } from 'next/font/google';
import { useState } from 'react';
import { toast } from 'sonner';
import VerifyEmailForm from './VerifyEmailForm';

const gochiHand = Gochi_Hand({ weight: '400', subsets: ['latin'] });

export default function OrganizationSignupForm() {
    const [mailSent, setEmailSent] = useState<boolean>(false);

    const handleSendOtp = async () => {
        try {
            setEmailSent(true);
        } catch (error) {
            toast('Error while sending the otp on your email. Please try again later.');
        }
    };

    if (mailSent) return <VerifyEmailForm />;
    return (
        <div className='w-full py-4 flex flex-col gap-4 items-center'>
            <p className={cn(gochiHand.className, 'text-gray-500 text-xl text-center')}>
                ohh, nyc to have you onboard boss 🫡. we would love to understand your buisness /
                company. just fill data asked below and you are all set.
            </p>

            <div className='flex flex-col gap-6 w-full mt-5'>
                <Input label='Company Name' placeholder='sway.in' />
                <div className='flex flex-col md:flex-row items-center gap-6 md:gap-3'>
                    <Input label='Company Size' placeholder='5 - 10' />
                    <Input label='Location' placeholder='Kolkata, West Bengal, IN' />
                </div>
                <Input label='Company Email' placeholder='awesome.people@sway.in' />
            </div>

            <p className={cn(gochiHand.className, 'text-gray-500 text-xl text-center mt-10')}>
                note that, organizational account it not free in tier, although for better
                experience and to try our platform we give 100 free credits to each new oranization.
                once the credits are over you need to upgrade you plan to avoid any kind of
                interruption
            </p>

            <SecondaryButton
                label='Send otp'
                onClick={handleSendOtp}
                className={cn(gochiHand.className, 'text-xl px-10 py-2')}
            />
        </div>
    );
}
