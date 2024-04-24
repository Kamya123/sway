'use client';
import { cn } from '@/lib/utils';
import { UserType } from '@/types/userType.type';
import { Gochi_Hand } from 'next/font/google';
import { useState } from 'react';
import IndividualUserSignupForm from './_components/IndividualUserSignupForm';
import OrganizationSignupForm from './_components/OrganizationSignupForm';

const gochiHand = Gochi_Hand({ weight: '400', subsets: ['latin'] });

export default function Signup() {
    const [useType, setUserType] = useState<UserType>('INDIVIDUAL');

    return (
        <div className='py-10 px-6 relative min-h-screen'>
            <div className='absolute inset-0 h-full w-full bg-purple-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-[-10]'></div>

            <div className='m-auto w-full md:w-1/2 flex flex-col gap-10 items-center'>
                <div className='flex flex-col items-center'>
                    <p className={cn(gochiHand.className, 'text-purple-500 text-2xl')}>
                        just sway it
                    </p>
                    <h1 className='text-4xl font-bold text-center'>sign up for an account</h1>
                </div>

                <div className='w-full'>
                    <div className='flex items-center w-full'>
                        <UserTypeSwitch
                            label='Individual'
                            isActive={useType === 'INDIVIDUAL'}
                            onClick={() => {
                                setUserType('INDIVIDUAL');
                            }}
                        />
                        <UserTypeSwitch
                            label='Organization'
                            isActive={useType === 'ORGANIZATION'}
                            onClick={() => {
                                setUserType('ORGANIZATION');
                            }}
                        />
                    </div>

                    <div className='w-full mt-4'>
                        {useType === 'INDIVIDUAL' ? (
                            <IndividualUserSignupForm />
                        ) : (
                            <OrganizationSignupForm />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

interface UserTypeSwitchProps {
    label: string;
    onClick: () => void;
    isActive?: boolean;
}

function UserTypeSwitch({ label, onClick, isActive }: UserTypeSwitchProps) {
    return (
        <button
            onClick={onClick}
            className={cn(
                isActive ? 'bg-purple-500 text-white' : 'text-black',
                'border-2 border-purple-500 py-2 px-6 w-[250px] text-sm flex-1',
            )}
        >
            {label}
        </button>
    );
}
