import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { data:blog, error, isPending } = useFetch(`http://localhost:8000/blogs/${id}`)
    const navigate = useNavigate();

    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => {
            navigate("/")
        })
    }

    return (
        <div className="blog-details">
            { error && <div>{error}</div> }
            { isPending && <div>Loading...</div> }
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by: {blog.author}</p>
                    <p>{blog.body}</p>
                    <button onClick={() => handleDelete()}
                        style={{
                            marginTop: '10px'
                        }}
                    >Delete</button>
                </article>
            ) }
        </div>
    );
};

export default BlogDetails;