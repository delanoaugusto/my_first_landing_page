import React, {Component} from 'react';
import './styles.css';
import xboxs from "./img/xboxs.jpg"
import {Nav, Navbar, NavDropdown, Container, Form, Row, Col,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';





class Landing extends Component {
  
   handleSubmit = (e) => {
    e.preventDefault();
    let username = e.target.elements.nome.value;
    let email = e.target.elements.email.value;
    let data = {
      username,
      email,
    }
    let convertdata = JSON.stringify(data);
    localStorage.setItem('email/nome', convertdata);

    let content = document.getElementById('sect2')

  let carregando = `<p>carregando...</p>`

  let pronto = `<p>pronto</p>`

  content.innerHTML = carregando


  setTimeout(() => {
    content.innerHTML = pronto
  }, 1000)

  };

  render(){
  return (

 
      
    <div id="body">


      <Header/>
      <Card
          className='section'
         
          title='Entre na nova geração de consoles'
          description='Garanta já o seu Xbox Series S por apenas 2000 mil reais! Cadastre-se no formulário abaixo e seja avisado
          quando começar a promoção. Oferta imperdível da nossa loja!'
      />
     


    <div className='background'>
      <div className='contact-container bg-grey'>
          <span className="div-title">Cadastre-se</span>
          <div className='contact-form'>
                  
              <div id='sect2'>
                  <span>
                      Preencha os dados
                  </span>
                <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="Nome" className="input-field" name= "nome" required/>
                  <input type="text" placeholder="Email" className="input-field" name='email' required/>
                  <button type='submit' className="contact-btn">Enviar</button>
                </form>
              </div>
          </div>
      </div>
    </div>

    </div>
    
  );
}
}




const Header = () => {
  return(
    <div>
          
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Gates Store</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Mais Vendidos</Nav.Link>
      <Nav.Link href="#pricing">Em Promoção</Nav.Link>
      <NavDropdown title="Categorias" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Consoles</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Acessórios</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Jogos</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Cartões</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Form>
    <Nav>
    <Row className="g-1">
    <Col xs="auto" className="my-1">
      <Form.Control id="inlineFormInputName" placeholder="Pesquise" />
      </Col>
      <Col xs="auto" className="my-1">
      <Button type="submit">Pesquisar</Button>
      </Col>
      </Row>
    </Nav>
    </Form>
  </Navbar.Collapse>
  </Container>
</Navbar>

      <div className='header'>
        <span className='header-title'>
          Promoção imperdível na Black Friday!
        </span>
        <br/>
        <span className='header-text'>
          Duração enquanto houver estoque, então garanta já o seu!
        </span>
      </div>
    </div>
  );
}

const Card = (props) => {
  return(
    <div className={props.className}>
      <table>
      <tbody>
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
   </tbody>
   </table>
   </div>
  )
}




export default Landing;
