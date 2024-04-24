export default function Features() {
    return (
        <section
            id='features'
            className='flex flex-col md:flex-row justify-between gap-10 px-6 py-20 relative'
        >
            <div className='absolute inset-0 h-full w-full bg-purple-50 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-[-10]'></div>
            <FeaturesCard
                header='Anonymous Polls'
                description='Sway enables users to create and vote in polls without revealing their identities, promoting candid expression.'
            />
            <FeaturesCard
                header='Security'
                description='Sway prioritizes data confidentiality, implementing robust security measures to protect user anonymity.'
            />
            <FeaturesCard
                header='User-Friendly Interface'
                description={
                    "Sway's intuitive design offers a seamless user experience, simplifying poll creation and participation."
                }
            />
        </section>
    );
}

interface FeaturesCardProps {
    header: string;
    description: string;
}

function FeaturesCard({ header, description }: FeaturesCardProps) {
    return (
        <div className='w-full md:w-1/3 p-6 flex flex-col shadow-md bg-white'>
            <h2 className='text-lg border-b-4 border-gray-200 w-fit'>{header}</h2>
            <p className='mt-4 text-gray-500'>{description}</p>
        </div>
    );
}
