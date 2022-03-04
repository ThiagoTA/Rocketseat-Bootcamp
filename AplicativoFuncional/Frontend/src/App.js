import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './Components/Header';

// * <>: fragmento para envolver mais componentes mas não atrapalha o efeito visual do dom

 /**
  * * Componente <Header />
  * * Propriedades <Header title="Homepage" />
  * * Estado e Imutabilidade (Conceito utlizado para garantir performace mesmo em aplicações com muitos dados)
  */

  // * useState retorna um array com 2 posíções
  //
  // * 1. Variável com o seu valor inicial
  // * 2. Função para atualizarmos esse valor

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    });
  }, []); // Vai executar essa função somente quando o componente for exibido em tela.

  function handleAddProject() {
    // projects.push(`Novo projeto ${Date.now()}`) * Altera o project e não é recomendado

    // ...: está copiando todos os projects para dentro desse novo array
    setProjects([...projects, `Novo projeto ${Date.now()}`]); // Imutabilidade
  }

  return (
    <> 
    <Header title="Projects" />

    <ul>
      {projects.map(project => <li key={project.id}>{project.title}</li>)}
    </ul>

    <button type='button' onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;