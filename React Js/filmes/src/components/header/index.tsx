import React from 'react';
import logo from '../../assets/images/logo.png'
import '../../assets/style/global.css'
import './style.css'
import {Link} from 'react-router-dom'

 interface HeaderProps{
   description?: string
 }  

const Header:React.FC<HeaderProps> = (props) => {
  return (
    <div style={{marginBottom:"40px"}} >
      <div className="header">
        
          <nav style={{display:"flex", justifyContent:"space-between", padding:"8px"}} >
            
            <img src={logo} alt="Logotipo da aplicação"/>

            <ul id="ul-header" style={{display:"flex", padding:"10px"}}>
              <li><Link className="link" style={{textDecoration:"none", color:"black"}} to="/">Home</Link></li>
              <li><Link className="link" style={{textDecoration:"none", color:"black"}} to="/login">Login</Link></li>
              <li><Link to="/cadastro" style={{textDecoration:"none", color:"black"}} className="link">Cadastro</Link></li> 
              <li>{props.description}</li>
            </ul>

          </nav>

      </div>
    </div>
  );
}

export default Header;
