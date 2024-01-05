import getSingleProduct from '@/utils/getSingleProduct';
import React from 'react';

const SingleProduct = async ({ params }) => {
    // console.log(params);
    const product = await getSingleProduct(params.id);
    // console.log(product);
    return (
        <div>
            {product.name}
        </div>
    );
};

export default SingleProduct;