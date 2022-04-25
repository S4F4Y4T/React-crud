import { useParams, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";

const SinglePost = () => {

    const navigate = useNavigate();

    const {id} = useParams();

    const {data:posts, isPending, error} = useFetch("http://localhost:6900/Post/" + id)

    const handleDelete = () => {

        fetch("http://localhost:6900/Post/" + id, {
            method: "DELETE"
        }).then(() => {
            navigate("/");
        });

    }
    

    return ( 
        <div className="content">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {posts && (
                <article>
                    <h2>{posts.title}</h2>
                    <div>written by <span style={{color: "red"}}>{posts.author}</span></div>
                    <article><p>
                    {posts.body}   
                    </p></article>
                <button onClick={handleDelete} className="btn btn-info pull-right marginBottom10">Delete</button> 
                </article>
            )}
        </div> 
     );
}
 
export default SinglePost;