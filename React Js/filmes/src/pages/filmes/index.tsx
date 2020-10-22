import React, { useEffect, useState } from 'react'
import Header from '../../components/header/index'
import Button from '../../components/button/index'
import Input from '../../components/inputs/index'

import './style.css'
import imageFilme from '../../assets/images/cinema.png'
import Footer from '../../components/footer'

function ListaDeFilmes() {

    const [filme, setFilme] = useState('')
    const [filmes, setFilmes] = useState([])

    useEffect(() => {
        listar()
    }, [])

    const listar = () => {
        fetch('http://localhost:5000/api/filmes', {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('token-filmes')
            }
        })
            .then(response => response.json())
            .then(dados => {
                setFilmes(dados);
            })
            .catch(erro => console.error(erro))
    }

    const salvar = () => {
        const form = {
            idGenero: 0,
            titulo:filme
        }

        fetch('http://localhost:5000/api/filmes', {
            method:'post',
            headers: {
                'content-type':'application/json',
                authorization:'Bearer ' + localStorage.getItem('token-filmes')
            },
            body:JSON.stringify(form)
        })
        .then( () => {
            setFilme('')
            alert('filme cadastrado')
            listar()
        })
        .catch( erro => console.log(erro))
    }


    return (
        <div>
            <Header />
            <img src={imageFilme} style={{width:"100px", cursor:"pointer"}} />

            <div className="centro" style={{padding:"10px"}}>
                
                <div className='titulo'>
                    {/* <h1>Liste seus filmes  <img src={imageFilme} alt="Filme" /></h1> */}
                    <div className="table">
                        {/* <Button value="Listar Filmes"></Button> */}

                    


                    <table style={{padding:"15px"}}>
                        
                        <thead style={{color:"white",}}>
                            <tr>
                                <th><h2> Filmes</h2></th>
                            </tr>
                        </thead>
                        <tbody style={{textAlign:"center"}}>
                            {filmes.map((item:any) => {

                                return (
                                    <tr key={item.idFilme}>
                                        <td style={{color:"ButtonFace"}} >{item.titulo}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
                </div>
                <form onSubmit={eve => {
                        eve.preventDefault()
                        salvar()
                    }}>
                    <div style={{marginTop:"10px",width:"100%", height:"100px", alignItems:"center", display:"flex", flexDirection:"column",justifyContent:"center", paddingTop:"10px"}} >
                        
                            <Input value={filme} onChange={e => setFilme(e.target.value)} valor={filme} name="Filme" label="Nome" tamanho="20px" largura="200px" color="black" type="text"  />
                            <Button name="Cadastrar" largura="80px" tamanho="40px" />
                    </div>
                </form>

            </div>
            <Footer />
        </div>
    )
}
export default ListaDeFilmes