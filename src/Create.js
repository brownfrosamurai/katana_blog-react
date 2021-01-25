import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [ title, setTitle ] = useState('');
    const [ body, setBody ] = useState('');
    const [ author, setAuthor] = useState('Byakuya Kuchiki');
    const [ isLoading, setIsLoading ] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setIsLoading(true)

        fetch("http://localhost:8000/blogs", {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsLoading(false);
            // history.go(-1);
            history.push('/');
        })

    }

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body:</label>
               <textarea
                required
                rows="7"
                value={body}
                onChange={(e) => setBody(e.target.value)}
               ></textarea>
               <label>Blog author:</label>
               <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
               >
                <option value="Byakuya Kuchiki">Byakuya Kuchiki</option>
                <option value="Zaraki Kenpachi">Zaraki Kenpachi</option>
                <option value="Toshiro Tsuguya">Toshiro Tsuguya</option>
               </select>
               { !isLoading && <button>Add Blog</button> }
               { isLoading && <button disabled >Adding blog ...</button> }
            </form>
        </div>
     );
}
 
export default Create;