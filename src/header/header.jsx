import './header.css';
import logo from '../images/logo_b.png'
import icon from '../images/lista_branca.png'

function Header() {
  return (
    <section>
      <div className='header'>
        <img className='logo' src={logo} alt="e" />
      </div>
      <div className='title'>
        <h2>Minha Lista de Compras <img className='iconeTitulo' src={icon}/></h2>
      </div>
    </section>
  );
}

export default Header;