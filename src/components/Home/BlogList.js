import { Link } from 'react-router-dom';
import './BlogList.css'; // Import CSS file for BlogList styling

const BlogList = ({ blogs }) => {
  return (
    <div className='blog'>
    <div className="blog-list">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
          </Link>
        </div>
        
      ))}
      </div>
    </div>
  );
}
 
export default BlogList;
