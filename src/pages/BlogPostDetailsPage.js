import React from 'react';
import posts from '../data/posts.json';
import { useParams } from 'react-router-dom';

const BlogPostDetailsPage = () => {
    const { id } = useParams();

    let post = posts.find(e => e.id === id);

    return(
        <>
            <div className="blogItem">
                <h1>{post.title}</h1>
                <p>{post.content}</p>
            </div>
        </>
    )
}

export default BlogPostDetailsPage;