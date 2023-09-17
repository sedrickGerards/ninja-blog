import "./App.css";

function App() {
const title = "Welcome to this REact Ninja-Blog"
const likes = 50;

  return (
    <div className="App">
      <div className="content">
        <h1> { title }</h1>
        <p>{ likes } times</p>
      </div>
    </div>
  );
}

export default App;
