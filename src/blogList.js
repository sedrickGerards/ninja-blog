// import Btn from "./button";

const BlogList = (props) => {

//     // const [name, setName] = useState("Old Text");
//     // const handleClick = () => {
//     //   setName("New text");
//     // };

  const blogs = props.bblogs;
  const title = props.title;
  const handleClick = props.handleDelete;
//   const BlogList = ({blogs, title, handleDelete}) => {
    
  return (
    <div className="blog-list">
        <h2> { title }</h2>


      {/* we use the .map method to circle through through the array and let each so what we want */}
      {blogs.map((blog) => (
        <div className="blog-preview" key={blogs.id}>
          <h2> {blog.title}</h2>
          <p> written by {blog.author}</p>

          <button onClick={ () => handleDelete(blog.id)}> delete blog </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
