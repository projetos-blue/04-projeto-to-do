import './App.css';
import Header from './header/header';
import Tarefas from './Tarefas/tarefas.jsx';



function App() {
  return (
    <section>
      <div className='header_layout'>
        <Header/>
      </div>
      <div className='tarefas'>
      <Tarefas/>
      </div>
    </section>
    
  );
}

export default App;
