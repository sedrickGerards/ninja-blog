// imprting the useState hooke from react library
import { useState } from "react";

const Home = () => {
//   using array destructuring we get the value of our usestate, we set the first para and the secind para is a function that calls or monitors the first
// so you make your useState active/readable by react by setting the function parameter to the new value 
    const [name, setName] = useState("lord gerard");
    const[status, setStatus] = useState(" is a gentle lad");

    const handleClick = () => {

        // console.log( "you clicked me😊");
        setName("LORD GERARD")
        setStatus("IS A GENTLE LAD");
    }
    return ( 
        <div className="home">
            <h2> Homepage</h2>
            <p> {name}  {status}</p>

            <button onClick={handleClick} >Click me</button>
        </div>
     );
}
 
export default Home;