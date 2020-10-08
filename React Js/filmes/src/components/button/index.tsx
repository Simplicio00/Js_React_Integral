import React from 'react'

interface ButtonProps{
    name:string
    tamanho:string
    largura:string
}

const Button:React.FC<ButtonProps> = (props) => {
    return (
        <div>
            <button style={{
                width:props.largura, 
                height:props.tamanho,
                backgroundColor:"#F6511D",
                color:"white",
                cursor:"pointer"
                }}>{props.name}</button>
        </div>
    );
}

export default Button