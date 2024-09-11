import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { FaMapMarkerAlt } from 'react-icons/fa';

class Ciudades extends Component {
    
    render() {
        return(
            <AUX>
                <section className="section bg-light" id="ciudad" style={{paddingTop: '10px', paddingBottom: '100px'}}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-lg-8">
                                <div className="text-center">
                                    <h3 className="section-title pt-5">Ciudades Disponibles</h3>
                                </div>
                            </div>
                        </div>
                        
                        {/* Grid row for listing cities and the map */}
                        <div className="row justify-content-center align-items-center mt-5 bg-white text-center" style={{ boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)'}}>
                            {/* Column for cities listing */}
                            <div className="col-md-6 text-center">
                                {/* Repeat your city listings here */}
                                <div className="faq pt-5 text-center" style={{ paddingTop: '5px' }}>
                                    <p className="text-uppercase user-title mb-1">
                                        <FaMapMarkerAlt className="mr-2 text-center" /> Hidalgo
                                    </p>
                                    <div className="faq-ans">
                                        <ul className="faq-sub-title text-muted pt-2">
                                            <li>Pachuca</li>
                                            <li>Tulancingo</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="faq pt-5" style={{ paddingTop: '5px' }}>
                                    <p className="text-uppercase user-title mb-1">
                                        <FaMapMarkerAlt className="mr-2" /> Querétaro
                                    </p>
                                    <div className="faq-ans">
                                        <ul className="faq-sub-title text-muted pt-2">
                                            <li>Santiago de Querétaro</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="faq pt-5" style={{ paddingTop: '5px' }}>
                                    <p className="text-uppercase user-title mb-1">
                                        <FaMapMarkerAlt className="mr-2" /> Jalisco
                                    </p>
                                    <div className="faq-ans">
                                        <ul className="faq-sub-title text-muted pt-2">
                                            <li>Puerto Vallarta</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="faq pt-5" style={{ paddingTop: '5px' }}>
                                    <p className="text-uppercase user-title mb-1">
                                        <FaMapMarkerAlt className="mr-2" /> Puebla
                                    </p>
                                    <div className="faq-ans">
                                        <ul className="faq-sub-title text-muted pt-2">
                                            <li>Puebla</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="faq pt-5" style={{ paddingTop: '5px' }}>
                                    <p className="text-uppercase user-title mb-1">
                                        <FaMapMarkerAlt className="mr-2" /> Tlaxcala
                                    </p>
                                    <div className="faq-ans">
                                        <ul className="faq-sub-title text-muted pt-2">
                                            <li>Tlaxcala</li>
                                        </ul>
                                    </div>
                                </div>
                                {/* ... other cities ... */}
                            </div>
                            
                            {/* Column for the map */}
                            <div className="col-md-6">
                                <iframe 
                                    src="/mapa_ciudades.html"
                                    style={{ width: '100%', height: '500px', border: 'none' }}
                                    title="Mapa de Ciudades"
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </AUX>
        );
    }
}

export default Ciudades;
