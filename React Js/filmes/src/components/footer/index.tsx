import React from 'react';
import '../../assets/style/global.css'
import './style.css'
import imgfooter from '../../assets/images/logonegativo.png'

function Footer(){
    return(
        <div className="corpo-fim">
            <footer className="corpo-fim">
                <div className="corpo-fim-elementos">
                    <img src={imgfooter}/>
                    <hr/>
                    <div className="info">
                        <p>Company Inc., 8901 Marmora Road, Glasgow, D04 89GR</p>
                        <p>Call us now toll free: (800)2345-6789</p>
                        <p>Customer support: support@demolink.org</p>
                        <p>Skype: sample-username</p>
                    </div>
                </div>    
            </footer>
        </div>
    );
}

export default Footer;