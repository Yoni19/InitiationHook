import React from 'react';
import ReactDOM from 'react-dom';
import Books from './components/Books'
import 'bootstrap/dist/css/bootstrap.css';


const App = () => {
  return (
    <div>
      <h1>Voici tous les livres disponibles !</h1>
      <Books/>
  
    </div>
  );
}

ReactDOM.render(<App />,document.querySelector("#root")
)