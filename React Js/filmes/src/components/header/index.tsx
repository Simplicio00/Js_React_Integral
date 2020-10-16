import React from 'react';
import logo from '../../assets/images/logo.png'
import '../../assets/style/global.css'
import './style.css'
import {Link, useHistory} from 'react-router-dom'

 interface HeaderProps{
   description?: string
 }  

const Header:React.FC<HeaderProps> = (props) => {

  let history = useHistory()

  const logout = () => {
    localStorage.removeItem('token-filmes')
    history.push('/')
  }

  const menu = () => {
    const token = localStorage.getItem('token-filmes')
    if(token === undefined || token === null ){
      return(
        <ul id="ul-header" style={{display:"flex", padding:"10px"}}>
          <li><Link className="link" style={{textDecoration:"none", color:"black"}} to="/">Home</Link></li>
          <li><Link className="link" style={{textDecoration:"none", color:"black"}} to="/login">Login</Link></li>
          <li><Link to="/cadastro" style={{textDecoration:"none", color:"black"}} className="link">Cadastro</Link></li> 
          <li>{props.description}</li>
        </ul>
      )
    }else{
      return(
        <ul id="ul-header" style={{display:"flex", padding:"10px"}}>
          <li><Link className="link" style={{textDecoration:"none", color:"black"}} to="/">Home</Link></li>
          <li><Link className="link" style={{textDecoration:"none", color:"black"}} to="/filmes">Filmes</Link></li>
          <li><Link className="link" style={{textDecoration:"none", color:"black"}} to="/perfil">perfil</Link></li>
          <li><Link  to="/perfil" onClick={eve => {
            eve.preventDefault() 
            logout()}} >Logout</Link></li>
        </ul>
      )
    }
  }

  return (
    <div style={{marginBottom:"40px"}} >
      <div className="header">
        
          <nav style={{display:"flex", justifyContent:"space-between", padding:"8px"}} >
            
            <img src={logo} alt="Logotipo da aplicação"/>

           {menu()}

          </nav>

      </div>
    </div>
  );
}

export default Header;
