import React from 'react';
import title,{add,sub,div,mult} from './Calc';

function App() {
 return(
  <>
    <h1>{title}</h1>
    <ul>
      <li>Sum of two no is: {add(10, 2)}</li>
      <li>sub of two no is: {sub(10, 2)}</li>
      <li>div of two no is: {div(10, 2)}</li>
      <li>mult of two no is: {mult(10, 2)}</li>
    </ul>
  </>
 )
}
export default App;