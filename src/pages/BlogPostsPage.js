import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const BlogPostsPage = (props) => {

    const displayBlogItems = (props) => {
        const {blog_items} = props;

        if(blog_items.length  > 0) {
            return (
                blog_items.map((blog_item) => {
                    console.log(blog_item);
                    let url="/blogitem/" + blog_item.id + "/";
                    return (

                        <div key={uuidv4()} className="blogItem">
                            <h3 className="ProductName">{blog_item.title}</h3>
                            <p className="ProductDescription">{blog_item.content}</p>
                            <a href={url}>Details</a>
                        </div>
                    )
                })

            )
        }
    }
    return(
        <>
            {displayBlogItems(props)}
        </>
    )
}

export default BlogPostsPage;