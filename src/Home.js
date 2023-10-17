// imprting the useState hooke from react library
import { useState, useEffect } from "react";
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

  const [text, setText] = useState("sedrick");

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blogs) => blogs.id !== id);
    setBlogs(newBlogs);
  };

  // making text a useEffect depen
  useEffect(() => {
    console.log("use effect ran");
  }, [text]);

  const [name, setName] = useState("sedrick in lowercase");
  const handleClick = () => {
    setName("SEDRICK IN UPPERCASE");
  };

  return (
    <div className="home">
      <p>{name}</p>
      <button onClick={handleClick}>change text</button>

      {/* bblog is the props name created  */}
      <BlogList bblogs={blogs} title="All Blogs!" handleDelete={handleDelete} />

      <BlogList
        bblogs={blogs.filter((blogs) => blogs.author === "sedrick")}
        title="Sedrick's blogs🙂"
      />
      <p>{text}</p>
      <button onClick={() => setText("Gerard")}>Change text</button>
    </div>
  );
};

export default Home;
