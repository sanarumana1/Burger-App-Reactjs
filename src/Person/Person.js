import React from 'react';
import styled from 'styled-components';
//import Radium from 'radium';

//import './Person.css';
// Using ES6 syntax

/*By static Values */
// const person = () => {
//     return <h4>I am a learning ReactJs !</h4>
// }

const StyleDiv = styled.div`
width: 60%;
margin: 16px auto;
border: 1px solid #bfb2b2;
box-shadow: 0 2px 3px #bdb3b3;
padding: 16px;
text-align: center;

@media (min-width: 500px)  {
width: 450px;  
} `;

/*Dynamic values can be added*/
const personAge = (props) => {
  const style = {
    '@media (min-width: 500px)' : {
      width: '450px'
    }
  };
  return (
//<div className="personClass" style={style}>

<StyleDiv>
<h3 onClick={props.click}>My Name is {props.name} and my age is {props.age} years old.</h3>
<h4> {props.children} </h4>
<input type="text" onChange={props.changed} value={props.name}/>
</StyleDiv>
)
};
// export default person;
//export default Radium(personAge);
export default personAge;
