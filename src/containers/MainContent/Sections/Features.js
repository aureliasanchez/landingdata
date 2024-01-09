import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Features extends Component{
    
    render(){
        return(
            <AUX>
            <section className="section" id="features" style={{paddingTop: '150px', paddingBottom: '80px'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            
                            <h2 className="section-title pb-5" style={{fontSize: '40px'}}>¿Qué es DatAlpine?</h2>

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
                                    <p className="pt-2">DatAlpine, la plataforma líder en el sector inmobiliario que revoluciona la toma de decisiones inteligentes para desarrolladores, constructores y asesores inmobiliarios. 
                                    <br /> Con una interfaz intuitiva y respaldada por modelos de datos econométricos avanzados, DatAlpine integra puntos de información valiosa para ofrecer un nuevo nivel de claridad y precisión en el vasto mundo inmobiliario. 
                                    <br /> Destacamos por nuestra capacidad de realizar análisis de mercado exhaustivos, investigaciones detalladas y proyecciones de tendencias específicas para diversas ciudades de la República Mexicana. Ya sea que estés buscando oportunidades de inversión, planeando proyectos de construcción o asesorando a clientes inmobiliarios, nuestra plataforma te brinda una visión completa y actualizada del panorama inmobiliario, permitiéndote anticipar cambios, mitigar riesgos y tomar decisiones estratégicas con un alto grado de certeza.</p>
                                    <p><strong>En Datalpine, transformamos datos en acciones, ofreciéndote un aliado indispensable en el competitivo mundo del sector inmobiliario</strong>.</p>
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