import React, { useState } from 'react';

import './App.css';
import backgroundImage from './assets/background.jpg'

import Header from './Components/Header';

// <>: fragmento para envolver mais componentes mas não atrapalha o efeito visual do dom

 /**
  * * Componente <Header />
  * * Propriedades <Header title="Homepage" />
  * * Estado e Imutabilidade (Conceito utlizado para garantir performace mesmo em aplicações com muitos dados)
  */

  // useState retorna um array com 2 posíções
  //
  // 1. Variável com o seu valor inicial
  // 2. Função para atualizarmos esse valor

function App() {
  const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);

  function handleAddProject() {
    // projects.push(`Novo projeto ${Date.now()}`) * Altera o project 

    // ...: está copiando todos os projects para dentro desse novo array
    setProjects([...projects, `Novo projeto ${Date.now()}`]); // Imutabilidade
  }

  return (
    <> 
    <Header title="Projects" />

    <img width={300} src={backgroundImage} />

    <ul>
      {projects.map(project => <li key={project}>{project}</li>)}
    </ul>

    <button type='button' onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;