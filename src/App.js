import React, { Component } from 'react';
import './App.css';
import Info from './Componentes/Inform/Info';
import DestinoCidades from './Componentes/Destinos/DestinoCidades';
import DestinoPaises from './Componentes/Destinos/DestinoPaises';
import styleDestino from './Componentes/Destinos/styleDestino.css';
import './styleBotao.css';


  class App extends Component{   

    state={
          cidades:[],
          paises:[],
    }

    async componentDidMount(){
      const responseCidades = await DestinoCidades.get('');
      const responsePaises = await DestinoPaises.get('');
      console.log(responseCidades.data)
      console.log(responsePaises.data)

      this.setState({cidades: responseCidades.data});    
      this.setState({paises: responsePaises.data});   
    }

    render(){

      const { cidades } = this.state;
      const { paises } = this.state;
      
      return(
      
        <div>
          <Info></Info> 

            <div className="destino">
                <h1 className='titulo'>Destino de Interesse</h1>
            
                    {console.log(paises)}

              <select className='pais' name='pais' >
                      {paises.map(pais => (
                        <option value=''>{pais.name_ptbr}</option>
                      ))}
              </select>
          
                      {console.log(cidades)}
              <select className='cidade' name='cidade' >
                      {cidades.map(cidade => (
                        <option value=''>{cidade.name_ptbr}</option>
                      ))}
              </select> 
                                   
            </div>

              <div>
                <form>    
                  <input type="submit" value="Enviar Formulário" class="enviar" />
                </form>
              </div> 

        </div>     
            
            
        
      )
    } 

} 

export default App;
