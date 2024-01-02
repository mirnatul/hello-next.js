'use client'

import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';

const SingleBlog = ({ params, searchParams }) => {

    // console.log(params.segtments);
    const [year, id] = params.segtments || [];

    const params2 = useParams();
    const searchParams2 = useSearchParams();

    console.log(params2.segtments);
    console.log(searchParams2.get('title'));


    return (
        <div>
            single blog {year} for {id}
            <br />
            {
                searchParams.title
            }
        </div>
    );
};

export default SingleBlog;