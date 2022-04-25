import PostLists from "./PostLists";
import useFetch from "./useFetch";

function Home() {

    const {data:posts, isPending, error} = useFetch("http://localhost:6900/Post")
    

    return ( 
        <div className="content">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {posts && <PostLists data={posts} title="Dynamic title" />}
        </div> 
     );
}
 
export default Home;