import React from 'react';

const getAllProducts = async (categoryId) => {
    let url = "http://localhost:5000/comments"
    if (categoryId) {
        url += `?postId=${categoryId}`
    }
    const res = await fetch(url, {
        cache: "no-cache"
    })
    return res.json();
};

export default getAllProducts;