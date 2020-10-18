import React, { useEffect, useState } from 'react'
import Header from '../../components/header/index'
import Button from '../../components/button/index'
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

    return (
        <div>
            <Header />
            <div className="centro" style={{padding:"10px"}}>
                <div className='titulo'>
                    {/* <h1>Liste seus filmes  <img src={imageFilme} alt="Filme" /></h1> */}
                    <div className="table">
                        {/* <Button value="Listar Filmes"></Button> */}

                    <table>
                        <thead style={{marginBottom:"10px"}}>
                            <tr>
                                <th>Filmes</th>
                            </tr>
                        </thead>
                        <tbody style={{textAlign:"center"}}>
                            {filmes.map((item:any) => {

                                return (
                                    <tr key={item.idFilme}>
                                        <td>{item.titulo}</td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default ListaDeFilmes