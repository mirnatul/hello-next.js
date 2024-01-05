import Link from 'next/link';
import React from 'react';

const SingleProduct = ({ product }) => {
    return (
        <Link className='block' href={`/products/${product.id}`}>
            {product.email}
        </Link>
    );
};

export default SingleProduct;