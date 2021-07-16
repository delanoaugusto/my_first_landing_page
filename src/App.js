import React from 'react';
import './styles.css';
import xboxs from "./img/xboxs.jpg"

function App() {
  return (
    <div id="body">
      <Header/>
      <Card
          className='section'
         
          title='Entre na nova geração de consoles'
          description='Garanta já o seu Xbox Series S por apenas 2000 mil reais! Cadastre-se no formulário abaixo e seja avisado
          quando começar a promoção. Oferta imperdível da nossa loja'
      />
      <ContactContainer/>
    </div>
  );
}

const Header = () => {
  return(
      <div className='header'>
        <span className='header-title'>
          Promoção imperdível na Black Friday!
        </span>
        <br/>
        <span className='header-text'>
          Duração enquanto houver estoque, então garanta já o seu!
        </span>
      </div>
  );
}

const Card = (props) => {
  return(
    <div className={props.className}>
      <table>
    <tr>
       <td><img src={xboxs} alt=''/></td>

       <td> 
  
      
     <div className='big-div'>
        <span className='div-title'>
          {props.title}
        </span>
        <br/>
        <span>
          {props.description}
        </span>
      </div>
   

    </td>
   </tr>
   </table>
   </div>
  )
}

const ContactContainer = () => {
  return(
    <div className='background'>
      <div className='contact-container bg-grey'>
          <span className="div-title">Cadastre-se</span>
          <div className='contact-form'>
                  
              <div id='sect2'>
                  <span>
                      Preencha os dados
                  </span>

                  <input type="text" placeholder="Nome" className="input-field"/>
                  <input type="text" placeholder="Email" className="input-field"/>
                  <button className="contact-btn">Enviar</button>
              </div>
          </div>
      </div>
    </div>
  );

}

export default App;
