import React from 'react';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import Input from '../../components/inputs/index'
import Button from '../../components/button/index'
import  '../../assets/style/global.css'

function login() {
  return (
    <div>
        <Header description="Faça login para continuar!"/>

      <div className="centro">
    
        <div className="centro-conteudo">
          <Input name="email" tamanho="30px" largura="200px" color="black" label="E-Mail" type="email"/>
          <Input name="password" tamanho="30px" largura="200px" color="black" label="Senha" type="password"/>
          <Button name="Entrar" tamanho="40px" largura="150px" />
        </div>
        
      </div>

        <Footer/>
    </div>
  );
}

export default login;