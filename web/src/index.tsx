import React from 'react'; //import do react
import ReactDOM from 'react-dom'; //integração do react com a DOM (árvore de elementos do HTML)
import App from './App';

//render recebe algumas tags de html ou componentes do react e coloca dentro do html (no root do index neste caso)
//componentes de react são funções que retornam um .jsx
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
