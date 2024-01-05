import React from 'react';

const getSingleProduct = async (id) => {
    const res = await fetch(`http://localhost:5000/comments/${id}`, {
        cache: "no-cache"
    });
    return res.json();
};

export default getSingleProduct;