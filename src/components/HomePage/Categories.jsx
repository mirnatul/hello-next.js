import getAllCategories from '@/utils/getAllCategories';
// import getAllComments from '@/utils/getAllCategories';
import React from 'react';
import SingleCategory from './SingleCategory';
// import SingleComment from './SingleCategory';

const Categories = async () => {
    const categories = await getAllCategories();
    // console.log(comments.length); ok
    // <SingleComment comment={comment} key={comment.id}></SingleComment>
    return (
        <div>
            <h1>Comments</h1>
            <div className='container mx-auto'>
                {
                    // comments.map((comment) => console.log(comment.id))
                    categories.map((category) => <SingleCategory category={category} key={category.id}></SingleCategory>)
                }
            </div>
        </div>
    );
};

export default Categories;