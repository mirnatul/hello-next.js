import React from 'react';

const SingleBlog = ({ params }) => {

    console.log(params.segtments);
    const [year, id] = params.segtments || [];
    // {id: 69}
    return (
        <div>
            single blog {year} for {id}
        </div>
    );
};

export default SingleBlog;