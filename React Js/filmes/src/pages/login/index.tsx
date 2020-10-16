import React, { useState } from 'react'
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import Input from '../../components/inputs/index'
import Button from '../../components/button/index'
import  '../../assets/style/global.css'
import { useHistory } from 'react-router-dom'

function Login(){  
  
  let history = useHistory()


  const [email,setEmail]= useState('')  
  const [senha,setSenha]= useState('')  

  const login = () =>{
    const login  = {
      email:email,
      senha:senha
    }
  
  
  fetch('http://localhost:5000/api/conta/login', {
    method: 'post',
    body: JSON.stringify(login),
    headers:{
      'content-type':'application/json'
    } 
  })
  
  .then(resp => resp.json())
  .then(dados => {

    if(dados.token != undefined){
      localStorage.setItem('token-filmes', dados.token)
      history.push('/')
    }else{
      if(dados.mensagem != undefined){
        alert(dados.mensagem)
      }
    }


  })  
  .catch(erro => console.error(erro))

}


  return (
    <div>
        <Header description="Faça login para continuar!"/>

      <div className="centro">

        <form onSubmit={eve => {
          eve.preventDefault()
          login()
        }}>
          <div className="centro-conteudo">
            <Input onChange={eve => setEmail(eve.target.value)} name="email" tamanho="30px" largura="200px" color="black" label="E-Mail" type="email"/>
            <Input onChange={eve => setSenha(eve.target.value)} name="password" tamanho="30px" largura="200px" color="black" label="Senha" type="password"/>
            <Button name="Entrar" tamanho="40px" largura="150px" />
          </div>
        </form>

        
      </div>

        <Footer/>
    </div>
  );
}

export default Login