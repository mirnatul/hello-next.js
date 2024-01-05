import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';

const SingleBlog = ({ params }) => {

    // console.log(params.segments);
    // const [year, id] = params.segments || [];

    // const params2 = useParams();
    // const searchParams2 = useSearchParams();

    // console.log(params2.segments);
    // console.log(searchParams2.get('title'));


    return (
        <div>
            single blog {params.id}
        </div>
    );
};

export default SingleBlog;