import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';

// Importa las demás imágenes de manera similar

class Counter extends Component {
 
    render() {
        return (
            <AUX>
             <section className="section bg-custom" style={{ marginTop: '-10px' }}>
             <div className="container" >
                <div className="counter" >
                        <p>In a market full of data and solutions, <br /> excel at transforming information into strategy</p>
                    </div>
                </div>
           </section>
           </AUX>
        );
    }
}

export default Counter;