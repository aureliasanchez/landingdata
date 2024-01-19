import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
// Puedes cambiar  por el ícono que desees
import { FaLightbulb, FaSyncAlt, FaChartBar, FaRocket, FaDatabase, FaSearch } from 'react-icons/fa';
//import Slider from 'react-slick';


class Faq extends Component{
    
    render() {
        // Configuración del carrusel
        {/* const sliderSettings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        }; */} 
        return(
            <AUX>
                <section className="section bg-light" id="faq" style={{paddingTop: '30px', paddingBottom: '100px'}}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-sm-8 col-lg-8">
                                <div className="text-center">
                                    
                                    <h3 className="section-title pt-5">Características del software</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-5 price-box p-5 bg-white text-center mt-1" style={{height:650, boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)'}}>
                            <div className="col-lg-6 faq-side"> 
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">
                                        <FaLightbulb className="icono-titulo mr-2" /> Recomendaciones Estratégicas
                                    </p>
                                    <div className="faq-ans">
                                        <p className="faq-sub-title text-muted pt-2">Diseñadas a medida que se adaptan para satisfacer tus objetivos y necesidades específicas . Con un enfoque personalizado, te ofrecemos recomendaciones estratégicas que impulsarán tu éxito y te posicionarán de manera única en el sector.</p>
                                    </div>
                                </div>
                                      {/* <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1 mb-1">Acompañamiento Continuo</p>
                                    <div className="faq-ans">
                                        <p className="faq-sub-title text-muted pt-2">Soporte y capacitación constante.</p>
                                    </div>
                                    </div> */}
                                
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">
                                        <FaSyncAlt className="icono-titulo mr-2" /> Actualizaciones Regulares
                                    </p>
                                    <div className="faq-ans">
                                        <p className="faq-sub-title text-muted pt-2">Mantenemos la información siempre relevante con análisis precisos y actualizaciones constantes, proporcionándo una visión en tiempo real del dinámico panorama inmobiliario.</p>
                                    </div>
                                </div>
                                    {/* <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">Personalización Total</p>
                                    <div className="faq-ans">
                                        <p className="faq-sub-title text-muted pt-2">Se ajusta a tus necesidades específicas.</p>
                                    </div>
                                    </div>*/}
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">
                                        <FaChartBar className="icono-titulo mr-2" /> Enfoque Analítico
                                    </p>
                                    <div className="faq-ans">
                                        <p className="faq-sub-title text-muted pt-2">Proporcionamos análisis específicos por región y tipo de propiedad, brindándote una visión detallada y completa para una toma de decisiones informadas.</p>
                                    </div>
                                </div>    
                                
                            </div>
                            <div className="col-md-6 col-sm-6 col-lg-6 faq-side ">  
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">
                                        <FaRocket className="mr-2" /> Tecnologías Avanzadas
                                    </p>
                                    <div className="faq-ans">
                                        <p className="faq-sub-title text-muted pt-2">Integrando inteligencia artificial y Big Data, aprovechamos las tecnologías más avanzadas para ofrecerte insights profundos y precisos en el mercado inmobiliario.</p>
                                    </div>
                                </div>
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">
                                        <FaDatabase className="icono-titulo mr-2" /> Modelos Dataencométricos
                                    </p>
                                    <div className="faq-ans">
                                        <p className="faq-sub-title text-muted pt-2">Exploramos variables específicas, como precios, ubicaciones y características de propiedades, utilizando modelos de datos avanzados que identifican tendencias ocultas y patrones emergentes para respaldar estrategias informadas.</p>
                                    </div>
                                </div>
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">
                                        <FaSearch className="icono-titulo mr-2" /> Algoritmos de Prospectación
                                    </p>
                                    <div className="faq-ans">
                                        <p className="faq-sub-title text-muted pt-2">Adoptamos un enfoque avanzado mediante algoritmos de prospección que, basados en datos históricos y actuales, identifican oportunidades futuras en el mercado inmobiliario, brindándote una ventaja estratégica.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Carrusel de imágenes */}
                {/* <section className="section">
                    <div className="carrusel-container">
                <Slider>
                    <div>
                    <img src="imagen1.jpg" alt="Imagen 1" />
                    </div>
                    <div>
                    <img src="imagen2.jpg" alt="Imagen 2" />
                    </div>
                    <div>
                    <img src="imagen3.jpg" alt="Imagen 3" />
                    </div>
                </Slider>
                </div>
                </section> */}      
           </AUX>
        );
    }
}

export default Faq;   