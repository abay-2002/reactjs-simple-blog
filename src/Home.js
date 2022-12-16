import BlogList from "./BlogList";
import useFetch  from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
    const title = 'Blogs';

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && 'Loading...'}
            {blogs && <BlogList blogs={blogs} title={title} />}
        </div>
    );
}

export default Home;