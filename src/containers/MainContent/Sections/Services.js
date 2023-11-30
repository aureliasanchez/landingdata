import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';

class Services extends Component{
    
    render(){
        return(
            <AUX>
                <section className="section" id="services">
                    <div className="container">
                        <div className="row justify-content-center pt-5">
                            <div className="col-md-8">
                                <div className="text-center">
                                    <h3 className="section-title pt-5">Caracteristicas clave</h3>
                                    <p className="section-subtitle pt-3 text-muted">Tu ventana al mercado inmobiliario mexicano.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-cube-outline text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4 price-box-container-service" >
                                        <h5>Predicciones Basadas en Algoritmos Avanzados</h5>
                                        <ul>
                                            <li>Precio Promedio</li>
                                            <li>M2 construcción y terreno</li>
                                            <li>Cantidad de unidades disponibles</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-headset text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4 price-box-container-service ">
                                        <h5>Análisis Detallado de Precios y Superficies</h5>
                                        <ul>
                                            <li>Precio por M2</li>
                                            <li>Toma de decisiones informadas </li>
                                        </ul>
                                   </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-monitor text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4 price-box-container-service ">
                                        <h5>Histórico y Tendencias</h5>
                                        <ul>
                                            <li>Comprensión del mercado </li>
                                            <li>Promedio de habitaciones<br />(Baños, Recámaras y Estacionamientos) </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-cloud-outline text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4 price-box-container-service ">
                                        <h5>Predicciones Basadas en Algoritmos Avanzados</h5>
                                    <ul>
                                        <li>Precio medio en los últimos<br />3 años Tiempo en el mercado </li>
                                        <li>Crecimiento del precio promedio en el<br />último año</li>
                                    </ul>                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon">
                                        <i className="mdi mdi-cellphone-android text-custom"></i>
                                    </div>
                                    <div className="service-desc pt-4 price-box-container-service ">
                                        <h5>Segmentación de Mercado:</h5>
                                        <ul>
                                            <li>Analiza la distribución basada en M2</li>
                                            <li>Características específicas para cada segmento</li>
                                        </ul>                                    
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

export default Services;   