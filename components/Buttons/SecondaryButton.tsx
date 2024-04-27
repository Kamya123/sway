'use client';
import { cn } from '@/lib/utils';
import { buttonprops } from '@/types/buttonprops.type';

export default function SecondaryButton({
    label,
    className = '',
    onClick = () => {},
    disabled = false,
}: buttonprops) {
    return (
        <button
            onClick={disabled ? () => {} : onClick}
            className={cn(
                'text-sm text-black py-2 px-4 bg-transparent border-2 border-black mb-1',
                className,
                disabled && 'cursor-not-allowed border-gray-500 text-gray-500',
            )}
            style={{
                boxShadow: '5px 5px',
            }}
        >
            {label}
        </button>
    );
}
