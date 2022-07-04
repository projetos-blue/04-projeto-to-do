import './App.css';
import Header from './header/header';
import Card from './Tarefas/cards/card';
import Tarefas from './Tarefas/tarefas.jsx';
import Form from './Tarefas/Form/form';



function App() {
  return (

    <section>
      <div className='header_layout'>
        <Header/>
      </div>
      <div className='tarefas'>
        <Tarefas/>
      </div>
      <div>
        <Form />
      </div>
      <div className='cards'>
        <Card />
      </div>
    </section>
  );
}

export default App;
