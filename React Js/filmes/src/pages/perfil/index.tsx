import React from 'react';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import Input from '../../components/inputs/index'
import Button from '../../components/button/index'

function Perfil(){
    return (
        <div>
            <Header description="Seja bem vindo, fulano!"/>
            <div style={{display:"flex", justifyContent:"center", 
            height:"400px", width:"100%", flexDirection:"column", alignItems:"center"}}>


            <h3>Perfil</h3>


            <Input name="nome" valor="lucas simplicio" tamanho="30px" largura="200px" color="black" label="Nome" type="text" />
            <Input name="email" valor="lucass@email.com" tamanho="30px" largura="200px" color="black" label="E-Mail" type="email" />                
            <Input name="senha" valor="MinhaSenha" tamanho="30px" largura="200px" color="black" label="Senha" type="text" /> 

                <div style={{display:"flex"}}>
                    <Button name="Editar" tamanho="40px" largura="150px"/>
                    <Button name="Salvar" tamanho="40px" largura="150px"/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Perfil