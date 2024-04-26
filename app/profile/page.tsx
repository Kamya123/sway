'use client';
import { cn } from '@/lib/utils';
import { Calendar, Cuboid, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import SettingsTab from './_components/SettingsTab';

export default function Profile() {
    const tabs = ['Surveys', 'Engagement', 'Analytics', 'Settings'];

    const [activeTab, setActiveTab] = useState<string>(tabs[0]);

    return (
        <div className='relative min-h-screen'>
            <div className='h-[150px] relative'>
                <div className='absolute top-0 left-0 h-full w-full'>
                    <Image
                        src={
                            'https://images.unsplash.com/photo-1639815188546-c43c240ff4df?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        }
                        alt='banner'
                        className='h-full w-full object-cover'
                        width={900}
                        height={900}
                    />
                </div>
                <div className='absolute top-full left-[10%] h-[120px] w-[120px] rounded-full overflow-hidden -translate-x-1/2 -translate-y-1/2 border-white z-10 border-2 bg-white shadow'>
                    <Image
                        src={
                            'https://images.unsplash.com/photo-1553835973-dec43bfddbeb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                        }
                        alt='org-logo'
                        className='h-full w-full object-cover'
                        width={900}
                        height={900}
                    />
                </div>
            </div>
            <div className='gap-8 flex min-h-[50vh]'>
                <div className='w-1/4 h-full py-[80px] ps-[5%] flex flex-col'>
                    <div>
                        <p className='text-purple-900 font-medium text-lg'>Mc Dowalds & Co.</p>
                        <p className='text-sm text-gray-500 mt-2'>
                            McDowalds & Co. is a bustling family-owned restaurant that has been
                            serving up delicious meals and warm hospitality for over two decades.
                        </p>

                        <div className='mt-8 flex gap-8'>
                            <div className='flex flex-col'>
                                <h3 className='text-4xl font-bold text-purple-500'>5326</h3>
                                <p className='text-sm text-gray-500'>Followers</p>
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='text-4xl font-bold text-purple-500'>255</h3>
                                <p className='text-sm text-gray-500'>Followings</p>
                            </div>
                        </div>
                    </div>

                    <div className='mt-10 text-sm text-gray-500 flex flex-col gap-2'>
                        <div className='flex items-center gap-1'>
                            <Calendar className='h-4 w-4' />
                            <p>Joined on 25th April, 2024</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <MapPin className='h-4 w-4' />
                            <p>Kolkata, West Bengal, India</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Cuboid className='h-5 w-5' />
                            <p className='line-clamp-1'>
                                0xBd0Dbd3A162beC1374Bf0D4B384875c350275Abe
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex-1 text-gray-500 pe-10'>
                    {/* Tabs */}
                    <div className=' flex items-center gap-6 border-b-[1.5px] mt-2'>
                        {tabs.map((tab) => (
                            <button
                                key={tab}
                                className={cn(
                                    'py-2 font-medium',
                                    activeTab === tab && 'text-black',
                                )}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className='py-4 h-[90vh] overflow-y-scroll'>
                        <SettingsTab />
                    </div>
                </div>
            </div>
        </div>
    );
}
