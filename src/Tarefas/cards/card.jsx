import React from 'react';
import './card.css';
import estudo from '../../images/cards/card-estudo.png'
import edit from '../../images/edit.png'
import lixeira from '../../images/lixeira.png'

function Card() {
  return (
    <section className='cardTarefas'>
        <div className='cardLeft'>
            <div className='imagem'>
                <img className='imagemCard' src={estudo} alt="e" />
            </div>
            <div className='tituloLista'>
                <div className='tarefa'>
                    <h4>MERCADO</h4>
                </div>
            </div>
        </div>
        <div className='cardRight'>
            <div botao-edit>
                <button className='buttonEdit'>Editar<img className='iconeButton' src={edit}/></button>
            </div>
            <div botao-delete>
                <button className='buttonDelete'>Deletar<img className='iconeButton' src={lixeira}/></button>
            </div>
            <div>
                <form className='check'>
                    <input type="radio" id="html" name="fav_language" value="HTML"></input>
                </form>
            </div>

        </div>
    </section>
  );
}

export default Card;