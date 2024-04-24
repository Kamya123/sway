'use client';
import { cn } from '@/lib/utils';
import { buttonprops } from '@/types/buttonprops.type';

export default function SecondaryButton({
    label,
    className = '',
    onClick = () => {},
}: buttonprops) {
    return (
        <button
            onClick={onClick}
            className={cn(
                'text-sm text-purple-500 py-2 px-4 bg-transparent border-2 border-purple-500',
                className,
            )}
        >
            {label}
        </button>
    );
}
