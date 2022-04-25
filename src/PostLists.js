import { Link } from 'react-router-dom'

const PostLists = ({data, title}) => {
    return ( 
        <div className="post-list">
            <h1 className="my-5">{title}</h1>

            {data && data.map((post) => (
                <div className="col-md-6 blogShort mb-3" key={post.id}>
                <h3>{post.title}</h3>
                <div>written by <span style={{color: "red"}}>{post.author}</span></div>
                    {/* <article><p>
                    {post.body}   
                    </p></article> */}
                <Link to={`/post/${post.id}`} className="btn btn-info pull-right marginBottom10">READ MORE</Link> 
            </div> 
            ))}
            
        </div>
     );
}
 
export default PostLists;