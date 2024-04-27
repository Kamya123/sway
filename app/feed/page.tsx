import React from 'react';
import CreatePostCard from './_components/CreatePostCard';
import FeedCard from './_components/FeedCard';

export default function Feed() {
    return (
        <div className='flex flex-col w-full gap-6 my-4'>
            <CreatePostCard />
            <div className='flex items-center gap-4'>
                <div className='border-[1px] flex-1' />
                <p>Recent Posts</p>
                <div className='border-[1px] flex-1' />
            </div>
            <div className='flex flex-col gap-3'>
                <FeedCard />
                <FeedCard />
                <FeedCard />
                <FeedCard />
            </div>
        </div>
    );
}
