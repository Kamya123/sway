'use client';
import { createContext, useState, useEffect } from 'react';
import { UserProps } from '@/types/userprops.type';
import { toast } from 'sonner';
import { ConnectWalletStatusType } from '@/types/connectwalletstatus.type';

interface UserContextProps {
    user: UserProps | undefined;
    ifMetamaskIsInstalled: () => Promise<boolean>;
    connectToMetaMaskAccount: () => void;
    connectWalletStatus: ConnectWalletStatusType;
}

export const UserContext = createContext<UserContextProps | undefined>(undefined);

interface UserProviderProps {
    children: React.ReactNode;
}

export default function UserProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<UserProps | undefined>(undefined);
    const [connectWalletStatus, setConnectWalletStatus] = useState<ConnectWalletStatusType>('INIT');

    const ifMetamaskIsInstalled = async (): Promise<boolean> => {
        try {
            //@ts-ignore
            if (typeof window.ethereum === 'undefined') {
                toast('Metamask is not installed. Kindly install it before using the application.');
                return false;
            }
            return true;
        } catch (error) {
            console.log(error);
            toast(
                'Error while detecting Metamask status. Please check the console for better information',
            );
            return false;
        }
    };

    const connectToMetaMaskAccount = async () => {
        setConnectWalletStatus('PENDING');
        try {
            const isMetamaskInstalled = await ifMetamaskIsInstalled();
            if (isMetamaskInstalled) {
                // @ts-ignore
                const response = await window?.ethereum?.request({
                    method: 'eth_requestAccounts',
                });

                if (response.length) {
                    const firstAddress = response[0];
                    setUser((prev) => {
                        return { ...prev, address: firstAddress };
                    });
                    setConnectWalletStatus('SUCCESS');

                    return true;
                } else {
                    toast('User has declined the connection request.');
                    setConnectWalletStatus('FAILED');
                    return false;
                }
            } else {
                setConnectWalletStatus('FAILED');
                return false;
            }
        } catch (error) {
            console.log(error);
            toast('Error while connecting to your Metamask.');
            setConnectWalletStatus('FAILED');
            return false;
        }
    };

    const detectMetamaskAccount = async () => {};

    const value: UserContextProps = {
        user,
        ifMetamaskIsInstalled,
        connectToMetaMaskAccount,
        connectWalletStatus,
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
