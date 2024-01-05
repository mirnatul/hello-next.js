import getAllProducts from '@/utils/getAllProducts';
import React from 'react';
import SingleProduct from './SingleProduct';

const Products = async ({ searchParams }) => {
    const products = await getAllProducts(searchParams.postId);
    // console.log(products);
    return (
        <div>
            {
                products.map((product) => <SingleProduct product={product} key={product.id}></SingleProduct>)
            }
        </div>
    );
};

export default Products;