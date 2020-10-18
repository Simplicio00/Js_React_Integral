import React, { useState, useEffect } from 'react'
import Header from '../../components/header/index'
import Footer from '../../components/footer/index'
import Button from '../../components/button/index'
import Input from '../../components/inputs/index'


import imgRefresh from '../../assets/images/refresh.png'
import imgTheater from '../../assets/images/theater.png'
import imgTrash from '../../assets/images/trash.png'


import  '../../assets/style/global.css'


function Generos(){

    const [idGenero, SetIdGenero] = useState(0)
    const [genero, setGenero] = useState('')

    const [generos, setGeneros] = useState([])

    useEffect(() => {
        listar()
    }, [])

    const listar = () => {
        let credentials = localStorage.getItem('token-filmes');
        fetch('http://localhost:5000/api/generos', {
            method:'get',
            headers:{
                Authorization:'Bearer ' + credentials
            }
        })
        .then(resp => resp.json())
        .then(dados => {
            setGeneros(dados)
        })
        .catch(erro => console.log(erro))
    }

    const trash = (id: number) => {
        if(window.confirm('deseja excluir o genero?')){
            fetch('http://localhost:5000/api/generos'+ id, {
                method: 'delete',
                headers:{
                    authorization:'Bearer '+ localStorage.getItem('token-filmes')
                }
            })
            .then(resp => resp.json())
            .then(dados => {
                listar()
            })
            .catch(erro => console.log(erro))
        }
    }


    const refresh = (id:number) => {
        fetch('http://localhost:5000/api/generos/' + id, {
            method:'put',
            headers:{
                authorization:'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
        .then(resp => resp.json())
        .then(dados => {
            SetIdGenero(dados.idGenero)
            setGenero(dados.nome)
        }).catch(a => console.log(a))
    }

    const salvar = () => {
        const form = {
            idGenero: null,
            nome:genero
        }

        // const method = (idGenero === 0 ? 'post' : 'put')
        // const urlRequest = (idGenero === 0 ? 'http://localhost:5000/api/generos' : 'http://localhost:5000/api/generos/'+ idGenero)
        
        fetch('http://localhost:5000/api/generos', {
            method:'post',
            headers: {
                'content-type':'application/json',
                authorization:'Bearer ' + localStorage.getItem('token-filmes')
            },
            body:JSON.stringify(form)
        })
        .then( () => {
            alert('Genero Cadastrado')
            SetIdGenero(0)
            setGenero('')
            listar()
        })
        .catch( erro => console.log(erro))
    }


    return (
    <div>
        <Header />

        <h1 style={{textAlign:"center", marginBottom:"30px"}}>Generos</h1>
        <div className="centro" style={{backgroundColor:"white "}}>
            <div style={{marginTop:"20px",marginBottom:"30px", textAlign:"center",margin: "0 auto", 
            width:"1024px", display:"flex", flexDirection:"column", alignItems:"center" }}>


                { generos.map((item:any) => {
                    return (
                    <div style={{display:"flex", padding:"15px"}}>
                        <h3>{item.nome}</h3>
                        <img src={imgTrash} style={{width:"100px", cursor:"pointer"}} onClick={() => trash(item.idGenero)} />
                        <img src={imgRefresh} style={{width:"100px", cursor:"pointer"}} onClick={() => refresh(item.idGenero)} />
                    </div>
                    )})
                }

                <div style={{marginTop:"40px"}}>

                    <form onSubmit={eve => {
                        eve.preventDefault()
                        salvar()
                    }}>
                        <Input valor={genero} name="Genero" label="nome" tamanho="20px" largura="200px" color="black" type="text" onChange={e => setGenero(e.target.value)} />
                        <Button largura="100px" tamanho="40px" name="Novo genero" />
                    </form>

                </div>


            </div>
        </div>

        <Footer />
    </div>
    )
}

export default Generos