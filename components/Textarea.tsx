import { cn } from '@/lib/utils';
import { TextareaProps } from '@/types/textareaprops.type';

export default function Textarea({
    label = '',
    placeholder = '',
    value = '',
    className = '',
    name = '',
    onChange = () => {},
}: TextareaProps) {
    return (
        <div className='flex flex-col gap-1 w-full'>
            <p className='text-sm text-gray-500'>{label}</p>
            <textarea
                className={cn(
                    'w-full min-h-[300px] p-2 border-2 bg-transparent border-purple-500 caret-purple-500 focus:border-purple-700 outline-none text-sm text-gray-500',
                    className,
                )}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                name={name}
            />
        </div>
    );
}
