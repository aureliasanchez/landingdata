import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Features extends Component{
    
    render(){
        return(
            <AUX>
            <section className="section" id="features">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            
                            <h3 className="section-title pt-5">¿Qué es DatAlpine?</h3>

                        </div>
                    </div>
                    <div className="row vertical-content">
                        <div className="col-md-6 pt-4">
                            <img src="images/flat.jpg" alt="" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-6">
                            <div className="features-box">
                                
                                <div className="features-desc">
                                    <h5>La evolución del análisis inmobiliario en México</h5>
                                    <p className="pt-2">Una plataforma digital líder respaldada por modelos de datos econométricos avanzados. Descubre un nuevo nivel de claridad y precisión en la información inmobiliaria.</p>
                                    <Link to="#" className="text-custom features-more">Mas información <i className="mdi mdi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AUX>
        );
    }
}

export default Features;   