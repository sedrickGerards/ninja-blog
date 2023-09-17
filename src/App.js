import "./App.css";

function App() {
const title = "Welcome to this REact Ninja-Blog"
const likes = 50;
const googleLink = "http://www.google.com";
const myArray = [1, 2, 3, 4, 5];
  return (
    <div className="App">
      <div className="content">
        <h1> { title }</h1>
        <p>{ likes } times</p>

        <p> { "Hello folks"}</p>
        <p> { [myArray]}</p>
        <p> {[5,4,3,2,1]}</p>

        <a href={googleLink}>  google site </a>
      </div>
    </div>
  );
}

export default App;
