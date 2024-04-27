'use client';
import { cn } from '@/lib/utils';
import { buttonprops } from '@/types/buttonprops.type';

export default function PrimaryButton({
    label,
    className = '',
    onClick = () => {},
    disabled = false,
}: buttonprops) {
    return (
        <button
            onClick={onClick}
            className={cn(
                'text-sm text-white py-2 px-4 bg-purple-500 border-2 border-purple-500 hover:bg-purple-600 hover:border-purple-600 mb-1',
                className,
                disabled && 'cursor-not-allowed border-gray-500 text-gray-500',
            )}
            style={{
                boxShadow: '5px 5px black',
            }}
        >
            {label}
        </button>
    );
}
