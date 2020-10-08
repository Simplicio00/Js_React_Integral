import './index.css'
import React from 'react';
import '../../assets/style/global.css'  
import Header from '../../components/header/index'
import imgleft from '../../assets/images/cinema.png'
import imgright from '../../assets/images/theater.png'
import Footer from '../../components/footer/index'

function home() {
  return (
    <div>
        <Header description="Conheça a nossa coletânia" />
      <div className="central">
        <h3>Monte a sua coletânia de filmes...</h3>

        <div className="central-conteudo">
          <h3>Introdução</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a 
            type specimen book. </p>
        </div>

        <section className="central-conteudo-divisao">
           
            <div className="central-conteudo-divisao-lateral-esquerda">
              <img src={imgleft} style={{width:"100px"}} />
              <h4>Filmes</h4>
              <p> This book is a treatise on the theory of ethics, 
                very popular during the Renaissance. The first line of Lorem Ipsum, 
                "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
            </div>
            
            <div className="central-conteudo-divisao-lateral-direita">
              <img src={imgright} style={{width:"100px"}} />
              <h4>Categorias</h4>
              <p>There are many variations of passages of Lorem Ipsum available, 
                but the majority have suffered alteration in some form, 
                by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>

        </section>

        <Footer />
      </div>

    </div>
  );
}

export default home;
