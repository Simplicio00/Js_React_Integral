import './index.css'
import React from 'react';
import '../../assets/style/global.css'
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import Input from '../../components/inputs/index'
import Button from '../../components/button/index'

function cadastro(){
    return (
        <div>
            <Header description="Cadastre-se e veja as novidades" />
            <div className="centro">
                <div className="centro-conteudo">
                    <h3>Cadastro</h3>
                    <Input name="nome" tamanho="30px" largura="200px" color="black" label="Nome" type="text" />
                    <Input name="email" tamanho="30px" largura="200px" color="black" label="E-Mail" type="email" />                
                    <Input name="senha" tamanho="30px" largura="200px" color="black" label="Senha" type="password" />  
                    <Button name="Cadastrar-se" tamanho="40px" largura="150px" />              
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default cadastro