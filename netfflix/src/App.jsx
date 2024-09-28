import React from 'react';
import Netflix from './Netflix';
import Amazon from './Amazon';

const FavSeries="Netflix";
const App=()=>(
  <>
  <h1 className="heading_style">List of top 5 Netflix series</h1>
  { (FavSeries === "Netflix")? <Netflix/>:<Amazon/>}
  </>
)
export default App;