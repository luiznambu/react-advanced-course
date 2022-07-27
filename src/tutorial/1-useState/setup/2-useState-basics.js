import React, { useState } from 'react';

const UseStateBasics = () => {
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler);
  const [text,setText] = useState('random title') // "text" é o estado original e "setText" a funcao que irá mudar o texto dentro do useState
  const handleClick = () => {
    if(text === 'random title'){  //condicao para mudar cada vez que apertar o botao
      setText('Hello World!');
    } else {
      setText("random title");
    }
    
  }
  return (  // botao que ativa o "handleClick" que eh a funcao que ativa o "setText"
    <React.Fragment>
      <h1> {text} </h1>
      <button className="btn" onClick={handleClick}>Change Title</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
