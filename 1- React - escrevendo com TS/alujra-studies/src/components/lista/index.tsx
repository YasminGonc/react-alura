import { ITarefa } from '../../types/tarefa';
import Item from './Item';
import style from './Lista.module.scss';

interface Props {
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

export default function Lista({ tarefas, selecionaTarefa }: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map(item => (
                    <Item
                        selecionaTarefa = {selecionaTarefa}
                        key = {item.id}
                        {...item} //dessa maneira pego todos os props da função, pode ser ruim se estiver usando dados de uma API, pois pode vir coisas a mais
                         /* Maneira 1
                            tarefa={item.tarefa}
                            tempo={item.tempo}
                        */
                    />
                ))}
            </ul>
        </aside>
    )
}
