import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()

        const blog = {
            title,
            body,
            author
        }

        setIsPending(true)

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added')
            setIsPending(false)
            navigate('/')
        })
    }

    return (
        <div className="create">
            <h2>Create new blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input 
                    type="text"
                    value={title}
                    required
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Body:</label>
                <textarea
                    value={body}
                    required
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <select
                    value={author}
                    required
                    onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>Add new blog</button>}
                { isPending && <button>Adding new blog...</button>}
            </form>
            <p>{ title }</p>
            <p>{ body }</p>
            <p>{ author }</p>
        </div>
    )
}
export default Create;