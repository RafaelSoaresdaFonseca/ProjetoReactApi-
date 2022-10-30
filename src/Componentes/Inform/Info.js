import React, { useState} from 'react';
import InputMask from 'react-input-mask';
import './styleInfo.css';
import * as yup from "yup";



const Info = () => {
        
      return(          
        
        <form className="campoTexto"  >           
             <h1 className='titulo'>Dados Pessoais</h1>  
           
            <p>Nome</p>          
                <input 
                    type="text"                    
                    className="name"                     
                    placeholder='Digite seu nome completo'                                                                        
                />                 

            <p>Email</p>
                <input 
                    className="email"                                                          
                    type="text" 
                    placeholder='Digite seu email'                                           
                />
                

            <p>Telefone</p>
                <InputMask 
                    className="telefone"                                       
                    mask="(99)9999-9999"                    
                    placeholder='Digite seu telefone'                                                             
                />
                

            <p>CPF</p>
                <InputMask 
                    className="cpf"
                    mask="999.999.999-99"                    
                    placeholder='Digite seu CPF'                                       
                />  
                
        </form>       
        
     
        
        );    

}



export default Info;