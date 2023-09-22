// imprting the useState hooke from react library
import { useState } from "react";
import BlogList from "./blogList";

const Home = () => {
  // creating an array of data
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem ipsum...",
      author: "sedrick",
      id: 1,
    },
    {
      title: "welcome party!🥳",
      body: "lorem ipsum...",
      author: "sedrick",
      id: 2,
    },
    {
      title: " React is cool ",
      body: "lorem ipsum...",
      author: "gerard",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
   const newBlogs = blogs.filter(blogs => blogs.id !== id);
   setBlogs(newBlogs);
  };


  return (
    <div className="home">
      {/* bblog is the props name created  */}

      <BlogList bblogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
      <BlogList
        bblogs={blogs.filter((blogs) => blogs.author === "sedrick")}
        title="Sedrick's blogs🙂"
      />
    </div>
  );
};

export default Home;
