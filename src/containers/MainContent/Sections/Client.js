import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';

class Client extends Component{
    
    render(){
        return(
            <AUX>
                <section className="section bg-gray" id="client">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="text-center">
                                    
                                    <h3 className="section-title pt-5">Testimonios y comentarios</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="testimonial-box">
                                    <div className="testimonial-desc bg-light p-4">
                                        <p className="text-center text-muted"><span>"</span>DatAlpine ha transformado la forma en que evaluamos y desarrollamos proyectos. Con sus análisis detallados, hemos identificado oportunidades que antes no tomaba en cuenta. ¡Una herramienta esencial para cualquier constructor!<span>"</span></p>
                                        <p className="text-center mb-0 quote-icon text-custom"><i className="mdi mdi-format-quote-open"></i></p>
                                        <p className="text-center text-muted nombre"><span></span>Luis G.<span></span></p>
                                    </div>
                                    

                                    <div className="mt-4 testi-img">
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="testimonial-box">
                                    <div className="testimonial-desc bg-light p-4">
                                        <p className="text-center text-muted"><span>"</span>Como inversor, siempre busco tomar decisiones respaldadas por datos sólidos. Los informes me ha proporcionado insights valiosos sobre tendencias de mercado y de esta manera reconocer oportunidades de inversión.<span>"</span></p>
                                        <p className="text-center mb-0 quote-icon text-custom"><i className="mdi mdi-format-quote-open"></i></p>
                                        <p className="text-center text-muted nombre"><span></span>Joel F.<span></span></p>

                                    </div>
                                    
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="testimonial-box">
                                    <div className="testimonial-desc bg-light p-4">
                                        <p className="text-center text-muted"><span>"</span>La clave para destacar en el mercado inmobiliario es comprender a fondo las necesidades de los clientes y el entorno. DatAlpine simplifica este proceso, brindándonos información precisa y actualizada.<span>"</span></p>
                                        <p className="text-center mb-0 quote-icon text-custom"><i className="mdi mdi-format-quote-open"></i></p>
                                        <p className="text-center text-muted nombre"><span></span>Maria S.<span></span></p>
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

export default Client;   