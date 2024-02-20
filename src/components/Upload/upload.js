import { useState } from "react";
import { useHistory } from "react-router-dom";
import './upload.css';

const Upload = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('Alaa');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:8000/api/blog', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      history.push('/');
    });
    alert("Data has been sent");
  };

  return (
    <div id="upload">
      <h2 className="formTitle">Add a New Recipe</h2>
      <form className='uploadForm' onSubmit={handleSubmit}>
        <input 
          type="text" 
          className="Recipe-title" 
          placeholder="Recipe Title" 
          required 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <textarea 
          required 
          className="Description" 
          placeholder="Description" 
          value={body} 
          onChange={(e) => setBody(e.target.value)} 
        ></textarea>
        <select 
          className="Blog-author" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
        >
          <option value="Alaa">Alaa</option>
          <option value="Aseela">Aseela</option>
        </select>
        <button className="uploadBtn">Upload Recipe</button>
      </form>
    </div>
  );
};
 
export default Upload;
