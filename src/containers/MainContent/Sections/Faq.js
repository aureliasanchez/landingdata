import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';

class Faq extends Component{
    
    render(){
        return(
            <AUX>
                <section className="section bg-light" id="faq">
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="text-center">
                                    
                                    <h3 className="section-title pt-5">Lo que nos hace diferentes</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-5 price-box p-5 bg-white text-center mt-1">
                            <div className="col-lg-6 faq-side"> 
                                <div className="faq pt-5"> 
                                    <p className="text-uppercase user-title mb-1">Recomendaciones Estratégicas</p>
                                    <div className="faq-ans">
                                        <p className="faq-sub-title text-muted pt-2">Adaptadas a tus necesidades.</p>
                                    </div>
                                </div> 
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1 mb-1">Acompañamiento Continuo</p>
                                    <div className="faq-ans">
                                        <p className="faq-sub-title text-muted pt-2">Soporte y capacitación constante.</p>
                                    </div>
                                </div>
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">Actualizaciones Regulares</p>
                                    <div className="faq-ans">
                                        <p className="faq-sub-title text-muted pt-2">Análisis precisos en tiempo real.</p>
                                    </div>
                                </div>

                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">Personalización Total</p>
                                    <div className="faq-ans">
                                        <p className="faq-sub-title text-muted pt-2">Se ajusta a tus necesidades específicas.</p>
                                    </div>
                                </div>
                                
                            </div>

                            <div className="col-lg-6 faq-side "> 
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">Tecnologías Avanzadas</p>
                                    <div className="faq-ans">
                                        <p className="faq-sub-title text-muted pt-2">Utilizamos IA y Big Data.</p>
                                    </div>
                                </div> 
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">Enfoque Analítico</p>
                                    <div className="faq-ans">
                                        <p className="faq-sub-title text-muted pt-2">Ofrecemos detalles por región y tipo de propiedad.</p>
                                    </div>
                                </div>
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">for advertiser</p>
                                    <div className="faq-ans">
                                        <p className="faq-sub-title text-muted pt-2">Mediante algoritmos avanzados.</p>
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

export default Faq;   