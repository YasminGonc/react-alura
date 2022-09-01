import Item from './Item';
import style from './Lista.module.scss';

export default function Lista() {
    const tarefas = [{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    }, {
        tarefa: 'TypeScript',
        tempo: '03:00:00'
    }];

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
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
