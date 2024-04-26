import SecondaryButton from '@/components/Buttons/SecondaryButton';
import Input from '@/components/Input';
import { cn } from '@/lib/utils';
import { Gochi_Hand } from 'next/font/google';
import { useState } from 'react';
import { toast } from 'sonner';
import VerifyEmailForm from './VerifyEmailForm';
import { CompanyFormDataType, companySize } from '@/types/companyformdata.type';
import { Checkbox } from '@/components/ui/checkbox';
import { Command, CommandList } from '@/components/ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { CheckIcon, ChevronsUpDown } from 'lucide-react';
import Textarea from '@/components/Textarea';
import axiosInstance from '@/configs/axios.config';
import indianStates from '@/app/store/indianStates';

const gochiHand = Gochi_Hand({ weight: '400', subsets: ['latin'] });

export default function OrganizationSignupForm() {
    const [mailSent, setEmailSent] = useState<boolean>(false);
    const [isCompanySizeComboboxOpened, setIsCompanySizeComboboxOpened] = useState<boolean>(false);
    const [companyFormData, setCompanyFormData] = useState<CompanyFormDataType>({
        companyName: '',
        companyEmail: '',
        location: '',
        termsAndConditionsAccepted: false,
        companySize: '2 - 10',
        companyDescription: '',
    });
    const [otpSent, setOtpSent] = useState<string | undefined>(undefined);
    const [sendingMail, setSendingMail] = useState<boolean>(false);

    const companySizeList: companySize[] = [
        '2 - 10',
        '11 - 50',
        '51 - 200',
        '201 - 500',
        '500 - 1000',
        'More than 1000',
    ];

    const handleFormDataChange = (e: any) => {
        setCompanyFormData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleSendOtp = async () => {
        if (sendingMail) return;
        try {
            setSendingMail(true);
            const response = await axiosInstance.post('/mail/send-otp', {
                to: companyFormData.companyEmail,
            });

            if (response.status === 200) {
                setOtpSent(response.data.otpSent);
                setEmailSent(true);
            }
        } catch (error) {
            toast('Error while sending the otp on your email. Please try again later.');
        } finally {
            setSendingMail(false);
        }
    };

    if (mailSent) return <VerifyEmailForm otp={otpSent} email={companyFormData.companyEmail} />;
    return (
        <div className='w-full py-4 flex flex-col gap-4 items-center'>
            <p className={cn(gochiHand.className, 'text-gray-500 text-xl text-center')}>
                ohh, nyc to have you onboard boss 🫡. we would love to understand your buisness /
                company. just fill data asked below and you are all set.
            </p>

            <div className='flex flex-col gap-6 w-full mt-5'>
                <Input
                    label='Company Name'
                    placeholder='sway.in'
                    name='companyName'
                    onChange={handleFormDataChange}
                    value={companyFormData.companyName}
                />
                <div className='flex flex-col md:flex-row items-center gap-6 md:gap-3'>
                    <div className='flex flex-col gap-1 w-full'>
                        <p className='text-sm text-gray-500'>Company Size</p>
                        <Popover
                            open={isCompanySizeComboboxOpened}
                            onOpenChange={setIsCompanySizeComboboxOpened}
                        >
                            <PopoverTrigger asChild>
                                <Button
                                    variant='outline'
                                    role='combobox'
                                    aria-expanded={isCompanySizeComboboxOpened}
                                    className='w-full justify-between bg-transparent hover:bg-transparent hover:text-purple-500 rounded-none border-2 border-purple-500 text-gray-500'
                                >
                                    {companyFormData.companySize
                                        ? companyFormData.companySize
                                        : 'Select Team Size...'}
                                    <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                                </Button>
                            </PopoverTrigger>

                            <PopoverContent className='w-full p-0 rounded-none'>
                                <Command>
                                    <CommandList className='w-full md:w-[300px] flex flex-col gap-3 p-1'>
                                        {companySizeList.map((size) => (
                                            <div
                                                key={size}
                                                className={cn(
                                                    'text-sm p-2 cursor-pointer hover:bg-purple-100 flex item-center justify-between',
                                                    companyFormData.companySize === size
                                                        ? 'text-purple-500'
                                                        : 'text-gray-500',
                                                )}
                                                onClick={() => {
                                                    setCompanyFormData((prev) => {
                                                        return {
                                                            ...prev,
                                                            companySize: size,
                                                        };
                                                    });
                                                    setIsCompanySizeComboboxOpened(false);
                                                }}
                                            >
                                                <p>{size}</p>
                                                <CheckIcon
                                                    className={cn(
                                                        'h-4 w-4',
                                                        companyFormData.companySize === size
                                                            ? 'opacity-100'
                                                            : 'opacity-0',
                                                    )}
                                                />
                                            </div>
                                        ))}
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className='flex flex-col gap-1 w-full'>
                        <p className='text-sm text-gray-500'>Location</p>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant='outline'
                                    role='combobox'
                                    className='w-full justify-between bg-transparent hover:bg-transparent hover:text-purple-500 rounded-none border-2 border-purple-500 text-gray-500'
                                >
                                    {companyFormData.location ? companyFormData.location : 'Select Location...'}
                                    <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className='w-full p-0 rounded-none max-h-56 overflow-y-auto'>
                                <div className='w-full md:w-[300px] flex flex-col gap-3 p-1'>
                                    {indianStates.map((state, index) => (
                                        <div
                                            key={index}
                                            className={cn(
                                                'text-sm p-2 cursor-pointer hover:bg-purple-100 flex item-center justify-between',
                                                companyFormData.location === state.name ? 'text-purple-500' : 'text-gray-500',
                                            )}
                                            onClick={() => {
                                                setCompanyFormData((prev) => ({
                                                    ...prev,
                                                    location: state.name,
                                                }));
                                            }}
                                        >
                                            <p>{state.name}</p>
                                            <CheckIcon
                                                className={cn(
                                                    'h-4 w-4',
                                                    companyFormData.location === state.name ? 'opacity-100' : 'opacity-0',
                                                )}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <Input
                    label='Company Email'
                    placeholder='awesome.people@sway.in'
                    name='companyEmail'
                    onChange={handleFormDataChange}
                    value={companyFormData.companyEmail}
                />

                <Textarea
                    label='Tell us about yourself ( optional )'
                    placeholder=''
                    name='companyDescription'
                    onChange={handleFormDataChange}
                    value={companyFormData.companyDescription}
                />

                <div
                    className='flex items-center space-x-2'
                    onClick={() => {
                        setCompanyFormData((prev) => {
                            return {
                                ...prev,
                                termsAndConditionsAccepted: !prev.termsAndConditionsAccepted,
                            };
                        });
                    }}
                >
                    <Checkbox id='terms' />
                    <label
                        htmlFor='terms'
                        className='text-sm text-gray-500 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
                    >
                        Accept terms and conditions
                    </label>
                </div>
            </div>

            <p className={cn(gochiHand.className, 'text-gray-500 text-xl text-center mt-10')}>
                note that, organizational account it not free in tier, although for better
                experience and to try our platform we give 100 free credits to each new oranization.
                once the credits are over you need to upgrade you plan to avoid any kind of
                interruption
            </p>

            <SecondaryButton
                label={sendingMail ? 'Sending otp ...' : 'Send otp'}
                onClick={handleSendOtp}
                className={cn(gochiHand.className, 'text-xl px-10 py-2')}
                disabled={
                    companyFormData.companyEmail === '' ||
                        companyFormData.companyName === '' ||
                        !companyFormData.termsAndConditionsAccepted ||
                        sendingMail
                        ? true
                        : false
                }
            />
        </div>
    );
}
