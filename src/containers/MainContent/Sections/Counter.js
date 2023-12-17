import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';

class Counter extends Component{
    
    render(){
        return(
            <AUX>
             <section className="section bg-custom" style={{ marginTop: '-10px' }}>
             <div className="container" style={{ height: '50px' }}>
                <div className="counter" >
                        <p>En un mercado lleno de datos y soluciones, <br />destacamos por transformar información en estrategia</p>
                    </div>
                </div>
           </section>
           </AUX>
        );
    }
}

export default Counter;   