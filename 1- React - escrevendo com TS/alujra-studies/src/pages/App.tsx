import React from 'react';
import Formulario from '../components/formulario'; //import do componente formulário
import Lista from '../components/lista'; //import do componente lista
import style from './App.module.scss'; //fazendo o import do css como módulo

function App() {
  return (
    <div className={style.AppStyle}/*Importa a classe do CSS como módulo, assim não vou ter problema de sobreposição */> 
      <Formulario />
      <Lista />
    </div>
  );
}

export default App;
