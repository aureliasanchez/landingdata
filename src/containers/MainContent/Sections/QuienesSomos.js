import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class QuienesSomos extends Component {

    render() {
        return (
            <AUX>
                <section className="section" id="quienessomos" style={{ paddingTop: '200px', paddingBottom: '200px' }}>

                    <div className="container" style={{ paddingBottom: '200px' }}>
                        <div className="row vertical-content">
                            <div className="col-md-6">
                                <div className="features-box">
                                    <div className="features-desc">
                                        <h3 className='title-quines-somos'>¿Quiénes Somos?</h3>
                                        <p className="pt-2 txt-quines-somos text-left">DatAlpine es un producto de TESEO DATA LAB, un equipo global de científicos de datos. Con más de 18 proyectos en bienes raíces y una trayectoria en México, Japón, EE. UU., Canadá, Suiza y Alemania. Expertos comprometidos en transformar datos en estrategias efectivas.</p>
                                        <p className="pt-2 txt-quines-somos text-left">Como desarrolladores de software y expertos en análisis de datos e inteligencia artificial en la industria estamos comprometidos con proporcionar soluciones precisas y efectivas que generen resultados concretos para nuestros clientes.</p>

                                    </div>
                                    <div className="features-desc" style={{ paddingTop: '10px', }}>
                                        <a href="https://teseodata.com/" className="btn-quines-somos2">Conoce nuestro sitio web</a>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6 pt-4">
                                <img src="images/workteam.jpg" alt="" className="img-fluid rounded" />
                            </div>
                        </div>
                    </div>

                    <div className='container-quines-somos' style={{boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)'}}>
                        <img className='container-img' src="images/Logo.png" style={{paddingBottom: '10px'}}/>
                        <p className='container-txt'>Tu socio en decisiones inmobiliarias</p>
                        <a href="#contact" className='btn-quines-somos'>Contáctanos</a>
                    </div>

                </section>
            </AUX>
        );
    }
}
export default QuienesSomos; 
