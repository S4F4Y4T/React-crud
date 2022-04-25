import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('safayat');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {title, author, body};

        fetch("http://localhost:6900/Post", {
            method : 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body : JSON.stringify(data)
        }).then(() => {
            navigate("/");
        });
        
    }

    return ( 
        <div className="m-5">
            <h2>Create New Post</h2>
            <form className="w-50 d-flex flex-column" onSubmit={handleSubmit}>
                <div className="d-flex flex-column">
                    <label>Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }}></input>
                </div>

                <div className="d-flex flex-column">
                    <label>Body</label>
                    <textarea value={body} onChange={(e) => { setBody(e.target.value) }}></textarea>
                </div>

                <div className="d-flex flex-column">
                    <label>Author</label>
                    <select value={author} onChange={(e) => { setAuthor(e.target.value) }}>
                        <option value="safayat">safayat</option>
                        <option value="fahim">fahim</option>
                    </select>
                </div>

                <button type="submit" className="btn btn-info m-3">Submit</button>
            
            </form>

            title: {title} <br></br>
            author: {author} <br></br>
            body: {body}
        </div>
     );
}
 
export default CreateBlog;