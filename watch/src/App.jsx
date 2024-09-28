import React, { useState } from 'react';

const App = () => {
    
    let currtime= new Date().toLocaleTimeString();

    const [ctime,setctime] = useState(currtime);

    const UpdateT = () =>{
        currtime= new Date().toLocaleTimeString();
        setctime(currtime);
    };
   
    setInterval(UpdateT,1000)
    return(
        <>
            <h1>{currtime}</h1>
        </>
    )
}
export default App;