import React, { Component } from 'react'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Home from './pages/home/index'
import Login from './pages/login/index'
import Cadastro from './pages/cadastro/index'
import Perfil from './pages/perfil/index'
import Filmes from './pages/filmes/index'
import Generos from './pages/generos/index'
import { parseJwt } from './service/auth'


function Routers(){

    const RotaPrivadaComum = ({component, ...rest } : any) => (
        <Route  
            render={props => 
                localStorage.getItem('token-filmes') !== null && parseJwt().Role === 'Comum' ? (
                    <Component {...props} />
                ) : (
                    <Redirect   
                        to={{pathname:"/login"}}
                    />
                )
            }
        />
    )


    const RotaPrivadaAdm = ({Component, ...rest } : any) => (
        <Route  
            render={props => 
                localStorage.getItem('token-filmes') !== null && parseJwt().Role === 'Administrador' ? (
                    <Component {...props} />
                ) : (
                    <Redirect   
                        to={{pathname:"/login"}}
                    />
                )
            }
        />
    )

    return( 
        <BrowserRouter>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/cadastro" component={Cadastro} />
            <RotaPrivadaAdm path="/perfil" component={Perfil} />
            <RotaPrivadaAdm path="/filmes" component={Filmes} /> 
            <RotaPrivadaAdm path="/generos" component={Generos} />
        </BrowserRouter>
    );
}

export default Routers  