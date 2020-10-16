import React from 'react';
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'


function Filmes(){
    return (
        <div>
            <Header description="Seja bem vindo, fulano!"/>
         <h1>Listagem de filmes</h1>
            <Footer/>
        </div>
    )
}

export default Filmes