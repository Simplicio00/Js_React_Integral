import React, {InputHTMLAttributes} from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string,
    name: string,
    color: string,
    tamanho: string,
    largura: string,
    valor?: string
}

const Input: React.FC<InputProps> = ({label, name, color, tamanho, largura, valor, ...rest}) =>{
    return(
        <div>
            <label htmlFor={name} style={{color:color}}>{label}</label>
            <input value={valor} style={{margin:"10px", padding:"3px", height:tamanho, width:largura}} type="text" id={name}{...rest} />
        </div>
    )
}

export default Input