import Logo from '@/components/Logo';
import Image from 'next/image';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Box, LogOut, Settings, User } from 'lucide-react';

export default function Navbar() {
    return (
        <div className='py-2 flex items-center justify-between'>
            <Logo />
            <DropdownMenu>
                <DropdownMenuTrigger className='border-none outline-none focus:outline-none focus:border-none'>
                    <div className='h-10 w-10 rounded-full bg-slate-100 overflow-hidden'>
                        <Image
                            src='https://cloudfront-us-east-2.images.arcpublishing.com/reuters/43YAWLITTZJLZIQTCP2JSS4KSM.jpg'
                            alt='profile'
                            width={500}
                            height={500}
                            className='h-full w-full object-cover'
                        />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className='rounded-none text-sm text-gray-500 flex flex-col text-start'>
                    <button className='px-3 py-2 text-start hover:bg-gray-100 flex items-center gap-2'>
                        <User className='h-4 w-4' />
                        <p>Profile</p>
                    </button>
                    <button className='px-3 py-2 text-start hover:bg-gray-100 flex items-center gap-2'>
                        <Settings className='h-4 w-4' />
                        <p>Settings</p>
                    </button>
                    <button className='px-3 py-2 text-start hover:bg-gray-100 flex items-center gap-2'>
                        <Box className='h-4 w-4' />
                        <p>Manage Subscription</p>
                    </button>
                    <DropdownMenuSeparator />
                    <button className='px-3 py-2 text-start hover:bg-red-50 flex items-center gap-2 text-red-500'>
                        <LogOut className='h-4 w-4' />
                        <p>Logout</p>
                    </button>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
