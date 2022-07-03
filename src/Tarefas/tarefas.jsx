import './tarefas.css';
import logo from '../images/logo_b.png'
import icon from '../images/lista_branca.png'

function Tarefas() {
  return (
    <section>
      <div className='tarefas'>
        <div>
            <p>Tarefas criadas</p>
        </div>

        <div className='contador'>
            <p>03</p>
        </div>
      </div>
    </section>
  );
}

export default Tarefas;