import './tarefas.css';
import Formulario from './Form/form';

async function getTarefas() {
  let response = await fetch('http://localhost:3000/api/tarefas.json')
  let data = await response.json()
  return data;
}

// const Tarefas = () => {
//   const [tarefas, setTarefas] = useState([ ])

//   useEffect(() => {
//       getTarefas().then(data => {
//           setTarefas(data['tarefas'])
//   })
// }, [])}


function Tarefas() {

  // const addTarefa = (nova_tarefa) => {
  //   setTarefas([...tarefas, new_tarefa])
  // }
  
  return (
    <section className='barraTarefas'>

    {/* <Formulario addTarefa={addTarefa}/>

    {tarefas.map((tarefa, index) =>
      <Tarefa
          id={tarefa.id}
          name={tarefa.name}
          key={index}
      />
    )} 
 */}

      <div className='tarefas'>
        <div>
            <p>Tarefas criadas</p>
        </div>

        <div className='contador'>
            <p>03</p>
        </div>
      </div>

      <div className='tarefas'>
        <div>
            <p>Concluídas</p>
        </div>

        <div className='contador'>
            <p>03</p>
        </div>
      </div>
    </section>
  );
}

export default Tarefas;