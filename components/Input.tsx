'use client';
import { cn } from '@/lib/utils';
import { InputProps } from '@/types/inputprops.type';

export default function Input({
    label = '',
    placeholder = '',
    value = '',
    className = '',
    onChange = () => {},
}: InputProps) {
    return (
        <div className='flex flex-col gap-1 w-full'>
            <p className='text-sm text-gray-500'>{label}</p>
            <input
                className={cn(
                    'w-full p-2 border-2 bg-transparent border-purple-500 caret-purple-500 focus:border-purple-700 outline-none text-sm text-gray-500',
                    className,
                )}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
}
