import React, { Component } from 'react';
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
                                    
                                    <h3 className="section-title pt-5">Software Features</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-5 price-box p-5 bg-white text-center mt-1" style={{ boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)'}}>
                            <div className="col-lg-6 faq-side"> 
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">
                                        <FaLightbulb className="icono-titulo mr-2" /> Strategic Recommendations
                                    </p>
                                    <div className="faq-ans">
                                        <p className="faq-sub-title text-muted pt-2">Custom-designed to meet your specific goals and needs. With a personalized approach, we offer strategic recommendations that will drive your success and position you uniquely in the industry.</p>
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
                                        <FaSyncAlt className="icono-titulo mr-2" /> Regular Updates
                                    </p>
                                    <div className="faq-ans">
                                        <p className="faq-sub-title text-muted pt-2">We keep information always relevant with accurate analysis and constant updates, providing a real-time view of the dynamic real estate landscape.</p>
                                    </div>
                                </div>
                                    {/* <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">Personalización Total</p>
                                    <div className="faq-ans">
                                        <p className="faq-sub-title text-muted pt-2">We keep information always relevant with accurate analysis and constant updates, providing a real-time view of the dynamic real estate landscape.</p>
                                    </div>
<<<<<<< HEAD
                                </div>

                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">
                                        <FaChartBar className="icono-titulo mr-2" /> Analytical Approach
                                    </p>
                                    <div className="faq-ans">
                                        <p className="faq-sub-title text-muted pt-2">We provide region- and property-type-specific analytics, giving you a detailed and comprehensive view for informed decision-making.</p>
                                    </div>
=======
>>>>>>> 7c03ef609a52bf578ee6b77fcc1add2402abc84d
                                    </div>*/}
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">
                                        <FaChartBar className="icono-titulo mr-2" /> Analytical Approach
                                    </p>
                                    <div className="faq-ans">
                                        <p className="faq-sub-title text-muted pt-2">We provide region- and property-type-specific analytics, giving you a detailed and comprehensive view for informed decision-making.</p>
                                    </div>
                                </div>    
                                
                            </div>
                            <div className="col-md-6 col-sm-6 col-lg-6 faq-side ">  
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">
                                        <FaRocket className="mr-2" /> Advanced Technologies
                                    </p>
                                    <div className="faq-ans">
                                        <p className="faq-sub-title text-muted pt-2">Integrating artificial intelligence and Big Data, we leverage the most advanced technologies to provide you with deep and accurate insights into the real estate market.</p>
                                    </div>
                                </div>

                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">
                                        <FaDatabase className="icono-titulo mr-2" /> Dataencometric Models
                                    </p>
                                    <div className="faq-ans">
                                        <p className="faq-sub-title text-muted pt-2">We explore specific variables, such as prices, locations, and property characteristics, using advanced data models that identify hidden trends and emerging patterns to support informed strategies.</p>
                                    </div>
                                </div>
                                <div className="faq pt-5">
                                    <p className="text-uppercase user-title mb-1">
                                        <FaSearch className="icono-titulo mr-2" /> Prospecting Algorithms
                                    </p>
                                    <div className="faq-ans">
                                        <p className="faq-sub-title text-muted pt-2">We take an advanced approach using prospecting algorithms that, based on historical and current data, identify future opportunities in the real estate market, giving you a strategic advantage.</p>
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
