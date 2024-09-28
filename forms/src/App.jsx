import React, { useState } from 'react';
import "./index.css";

const App = () => {
  let [fullName,setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
    contact: "",
  } );
  const inputEvent = (event) => {
        console.log(event.target.value);
        console.log(event.target.name);

        // const value = event.target.value;
        // const name = event.target.name;

        const {value,name} = event.target;

        setFullName((preValue) => {
          console.log(preValue);

          return{
            ...preValue,
            [name]: value,
          };
          });
  };
    
  const onsubmit = (event) => {
    event.preventDefault();
    alert("Form submitted")
    
  }
  return (
    <>
    <div className='container'>
    <div className="card">
    <form onSubmit={onsubmit}>
       <h2>Hello {fullName.fname} {fullName.lname}</h2>
       <h4>email: {fullName.email}</h4>
       <h4>contactNo: {fullName.contact}</h4>

       <input type="text" 
       placeholder='Enter your name' 
       name='fname'
       onChange={inputEvent} 
       value={fullName.fname} />

       <input type="text"
       placeholder='Enter your last name' 
       name='lname'
       onChange={inputEvent} 
       value={fullName.lname} />

       <input type="text"
       placeholder='Enter your mail address' 
       name='email'
       onChange={inputEvent} 
       value={fullName.email} />
       
       <input type="text"
       placeholder='Enter your contact Number' 
       name='contact'
       onChange={inputEvent} 
       value={fullName.contact} />

       <button type='submit'>Click Me 👍</button>
      </form>
      </div>
      </div>
    </>
  )
}
export default App;


