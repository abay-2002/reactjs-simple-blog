import { Link } from "react-router-dom";

const BlogList = ({blogs, title, handleDelete}) => {
    return(
        <div className="blog-list">
            <h2>{ title }</h2>
            {blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blog/${blog.id}`}>
                        <h2>{blog.author}</h2>
                        <p>{blog.title}</p>
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default BlogList;