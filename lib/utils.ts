import crypto from 'crypto';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function generateOTP(length: number = 6): string {
    const digits = '0123456789';
    let OTP = '';

    for (let i = 0; i < length; i++) {
        OTP += digits.charAt(crypto.randomInt(0, digits.length));
    }

    return OTP;
}
