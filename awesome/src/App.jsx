import React, { useState } from 'react';
import "./index.css";

export const App = () => {

  let Greet="Hello";
  let [Name,setName] = useState(Greet);
  let [FullName,setFullName]=useState();

  const myfunc = (event) => {
     setName(event.target.value);
  }

  const onsubmit = () => {
    setFullName(Name);
  }

  return (
    <>
     <div className='parent'>
       <h1>Hello {FullName}</h1>
       <input type="text"
       placeholder='Enter your name' 
       onChange={myfunc} 
       value={Name} />
       <button onClick={onsubmit}>Click Me 👍</button>
      </div>
    </>
  )
}
export default App;


