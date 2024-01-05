import React from 'react';

const loadSingleBlogData = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: "no-cache"
    })
    return res.json();
};

export default loadSingleBlogData;