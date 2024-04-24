import { UserContext } from '@/providers/UserProvider';
import { useContext } from 'react';

export default function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser can only be used inside UserProvider Context');
    }
    return context;
}
