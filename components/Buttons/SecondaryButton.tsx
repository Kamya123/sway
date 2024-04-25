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
                'text-sm text-purple-500 py-2 px-4 bg-transparent border-2 border-purple-500',
                className,
                disabled && 'cursor-not-allowed border-gray-500 text-gray-500',
            )}
        >
            {label}
        </button>
    );
}
