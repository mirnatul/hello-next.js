import loadSingleBlogData from '@/utils/loadSingleBlogData';
import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';

const SingleBlog = async ({ params }) => {

    // console.log(params.segments);
    // const [year, id] = params.segments || [];

    // const params2 = useParams();
    // const searchParams2 = useSearchParams();

    // console.log(params2.segments);
    // console.log(searchParams2.get('title'));

    const blog = await loadSingleBlogData(params.id)

    // or
    // const {id, title, body} = await loadSingleBlogData(params.id)

    return (
        <div className='border border-blue-500 my-6 p-8'>
            <h2 className='text-2xl'>{blog.id}. {blog.title}</h2>
            <p>{blog.body}</p>
        </div>
    );
};

export default SingleBlog;