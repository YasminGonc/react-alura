import React, { useState } from 'react';
import Cronometro from '../components/cronometro';
import Formulario from '../components/formulario'; //import do componente formulário
import Lista from '../components/lista'; //import do componente lista
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss'; //fazendo o import do css como módulo

export default function App() {
  const [tarefas, setTarefas] = useState<ITarefa[] | [] >([]);

  return (
    <div className={style.AppStyle}/*Importa a classe do CSS como módulo, assim não vou ter problema de sobreposição */>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

