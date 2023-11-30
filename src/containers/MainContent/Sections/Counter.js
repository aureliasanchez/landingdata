import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';

class Counter extends Component{
    
    render(){
        return(
            <AUX>
             <section className="section bg-custom">
                <div className="container">
                <div className="counter">
                        <p>En un mercado lleno de datos y soluciones, <br />destacamos por transformar información en estrategia</p>
                    </div>
                </div>
           </section>
           </AUX>
        );
    }
}

export default Counter;   