'use client';
import { createContext, useState, useCallback } from 'react';
import { UserProps } from '@/types/userprops.type';
import { toast } from 'sonner';
import { ConnectWalletStatusType } from '@/types/connectwalletstatus.type';
import axiosInstance from '@/configs/node-service.config';

interface UserContextProps {
    user: UserProps | undefined;
    ifMetamaskIsInstalled: () => Promise<boolean>;
    connectToMetaMaskAccount: () => void;
    connectWalletStatus: ConnectWalletStatusType;
    fetchUserDetails: () => void;
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

    const fetchUserDetails = async () => {
        const _userAddress = window.localStorage.getItem('address');
        if (!_userAddress) return null;

        try {
            const response = await axiosInstance.post('/user/load-profile', {
                userId: _userAddress,
            });

            if (response.status === 200) {
                setUser(() => {
                    return {
                        address: _userAddress,
                        data: response.data?.data,
                    };
                });
            }
        } catch (error) {
            console.log('User not found, creating a fresh individual account ...');

            const signupResponse = await axiosInstance.post('/auth/signup', {
                userId: _userAddress,
            });

            if (signupResponse.status === 200) {
                console.log('Individual account has been created');

                setUser(() => {
                    return {
                        address: _userAddress,
                        data: signupResponse.data?.data,
                    };
                });
            }
        }
    };

    const connectToMetaMaskAccount = useCallback(async () => {
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
                    setUser(() => {
                        return { address: firstAddress, data: {} };
                    });
                    window.localStorage.setItem('address', firstAddress);
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
    }, []);

    const value: UserContextProps = {
        user,
        ifMetamaskIsInstalled,
        connectToMetaMaskAccount,
        connectWalletStatus,
        fetchUserDetails,
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
