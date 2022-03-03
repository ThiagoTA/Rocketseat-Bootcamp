import React from 'react';

import Header from './Components/Header';

// <>: fragmento para envolver mais componentes mas não atrapalha o efeito visual do dom

function App() {
  return (
    <> 
    <Header />
    <Header />
    <Header />
    </>
  );
}

export default App;