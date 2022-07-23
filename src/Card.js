import { useState, useEffect } from "react";

function Card() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("taj");

  // useEffect -> hook which takes two arguments, 1. function (mandatory) 2. array (optional)
  // uses / advantages -

  // useEffect(function, arr(optional))

  // 1. Function without array -> function will run during intial load, and whenever any state updates
  // useEffect(function() {
  //   console.log("hello")
  // })

  // useEffect(() => {
  //   console.log("hello");
  // });

  // 2. Function with empty array -> function will run only during the initial load
  // useEffect(() => {
  //   console.log("effect with empty array");
  // }, []);

  // 3. Function with array of values -> function will run during the initial load and whenever the array value changes

  useEffect(() => {
    console.log("count changed");
  }, [name, count]);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const updateName = () => {
    setName("Tajammul");
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <h2>{name}</h2>
      <button onClick={updateName}>Update Name</button>
    </div>
  );
}

export default Card;

// SPA vs SSR

// SSR - Server Side Rendering
// 1. Home.html 2.Contact.html 3. some.html
// <a href="home.html">home</a>

// SPA - Single Page APplication
// 1. bundle.js index.html
// react-router-dom
