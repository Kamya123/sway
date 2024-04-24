import Image from 'next/image';

export default function About() {
    return (
        <div id='about'>
            <section className='flex-col md:flex-row flex items-center gap-4 px-6 py-14'>
                <div className='md:w-[55%]'>
                    <p className='text-5xl font-bold leading-[1.3em]'>
                        get honest{' '}
                        <span className='text-purple-500 border-b-4 border-gray-300'>
                            anonymous surveys
                        </span>{' '}
                        data straight into your oragnization
                    </p>

                    <div className='text-gray-500 mt-8'>
                        <p>
                            Unlock the power of candid feedback with Sway, the premier platform for
                            anonymous surveys. With Sway, you can gather valuable insights from your
                            employees, customers, or any target audience without compromising their
                            privacy.
                        </p>
                    </div>
                </div>
                <div className='w-[45%] relative'>
                    <div className='h-[500px] w-[500px] bg-purple-500 rounded-full shadow-xl grid place-content-center'></div>
                    <div className='absolute top-10 right-0 translate-x-1/2 md:translate-x-0 w-[300px] p-4 rounded-lg shadow-2xl bg-white border text-sm'>
                        <p className='text-gray-500'>
                            Say goodbye to biased responses and hello to actionable insights.
                        </p>
                    </div>
                    <div className='absolute bottom-0 -left-1/2 md:left-0 w-[300px] p-4 rounded-lg shadow-2xl bg-white border text-sm cursor-pointer'>
                        <p className='text-gray-500'>
                            Integrate Sway into your organization today and harness the power of
                            honest anonymous survey data to drive positive change and innovation.
                        </p>
                    </div>
                </div>
            </section>
            <section className='bg-purple-100 py-20 px-6 flex flex-col md:flex-row justify-between'>
                <div className='hidden md:block w-[45%]'>
                    <Image src={'/bitcoin.svg'} alt='bitcoin' width={450} height={450} />
                </div>
                <div className='md:w-[55%] text-end'>
                    <h2 className='text-5xl leading-[1.3em] font-bold'>
                        leverages the power of{' '}
                        <span className='text-purple-500 border-b-4 border-gray-300'>
                            blockchain technology
                        </span>{' '}
                        to enhance the security and transparency
                    </h2>
                    <div className='text-gray-500 mt-8'>
                        <p>
                            Our secure blockchain technology ensures that respondents can share
                            their opinions honestly and without fear of repercussions. By
                            guaranteeing anonymity, Sway encourages participants to provide genuine
                            feedback, enabling you to uncover valuable insights that can drive
                            strategic decision-making within your organization.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
