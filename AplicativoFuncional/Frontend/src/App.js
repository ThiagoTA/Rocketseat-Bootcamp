import React from 'react';

import Header from './Components/Header';

// <>: fragmento para envolver mais componentes mas não atrapalha o efeito visual do dom

 /**
  * * Componente <Header />
  * * Propriedades <Header title="Homepage" />
  * Estado 
  */

function App() {
  return (
    <> 
    <Header title="Homepage">
      <ul>
        <li>Homepage</li>
        <li>Projects</li>
      </ul>
    </Header>
    <Header title="Projects">
      <ul>
        <li>Homepage</li>
        <li>Projects</li>
        <li>Login</li>
      </ul>
    </Header>
    </>
  );
}

export default App;