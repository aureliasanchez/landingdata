import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class QuienesSomos extends Component{
    
    render(){
        return(
            <AUX>
            <section className="section" id="features">
                <div className="container">
                    
                    <div className="row vertical-content">
                        <div className="col-md-6">
                            <div className="features-box">
                                    <div className="features-desc">
                                    <h3 className='title-quines-somos'>¿Quiénes Somos?</h3>
                                        <p className="pt-2 txt-quines-somos text-left">DatAlpine es un producto de TESEO DATA LAB, un equipo global de científicos de datos. Con más de 18 proyectos en bienes raíces y una trayectoria en México, Japón, EE. UU., Canadá, Suiza y Alemania. Expertos comprometidos en transformar datos en estrategias efectivas.</p>
                                    </div>
                            </div>
                        </div>
                        <div className="col-md-6 pt-4">
                            <img src="images/workteam.jpg" alt="" className="img-fluid rounded" />
                        </div>
                    </div>  
                </div>
                
                

            </section>
        </AUX>
        );
    }
}
export default QuienesSomos; 
