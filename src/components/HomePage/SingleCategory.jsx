import React from 'react';
import Link from 'next/link';

const SingleCategory = ({ category }) => {
    const { id } = category;
    // console.log(id);
    return (
        <Link href={`/products?postId=${id}`}>
            <h1>{id}</h1>
        </Link>
    );
};

export default SingleCategory;