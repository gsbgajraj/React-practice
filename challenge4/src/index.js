import React from 'react';
import ReactDOM from 'react-dom';
import youtuber, {favprog, myName,myName2} from './App';

ReactDOM.render(
    <>
        <ol>
            <li>thapa</li>
            <li>{youtuber}</li>
            <li>{favprog}</li>
            <li>{myName()}</li>
            <li>{myName2()}</li>
        </ol>
    </>,document.getElementById("root")
);