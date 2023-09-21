// imprting the useState hooke from react library
import { useState } from "react";

const Home = () => {
    // creating an array of data
    const [blogs, setBlogs] = useState([
       {title: "My new website", body: "lorem ipsum...", author: "lord", id: 1 },
       {title: "welcome party!🥳", body: "lorem ipsum...", author: "sedrick", id: 2 },
       {title: " React is cool ", body: "lorem ipsum...", author: "gerard", id: 3 }
    ]);
    const [name, setName] = useState('Old Text');
      const handleClick = () => {
         setName( "New text");
      };

       
    return ( 
        <div className="home">

      <p className="btn-text">{ name }</p>
      <button onClick={ handleClick }> Change Text</button>

            {/* we use the .map method to circle through through the array and let each so what we want */}
        {blogs.map((blog) => (
           <div className="blog-preview" key={blogs.id}>
            <h2> {blog.title}</h2>
            <p> written by {blog.author}</p>

           </div>
           ))}

        </div>
     );
}
 
export default Home;