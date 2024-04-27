import Navbar from './_components/Navbar';

export default function FeedLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className='bg-slate-50'>
            <div className='w-[90%] md:w-[65%] m-auto flex flex-col h-screen overflow-hidden divide-y-[1px]'>
                <Navbar />
                <div className='flex-1 overflow-y-scroll'>{children}</div>
            </div>
        </div>
    );
}
