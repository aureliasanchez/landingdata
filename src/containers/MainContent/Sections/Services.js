import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';

class Services extends Component{
    
    render(){
        return(
            <AUX>
                <section className="section" id="services" style={{paddingTop: '10px', paddingBottom: '80px'}}>
                    <div className="container">
                        <div className="row justify-content-center pt-5">
                            <div className="col-md-8 text-center">
                                    <h3 className="section-title pt-5"> Elementos Clave</h3>
                                    <p className="section-subtitle pt-3 text-muted">Obtén una visión integral del mercado inmobiliario de México con Datalpine con perspectivas exactas del mercado, como: </p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon text-left">
                                        <i className="mdi mdi-trending-up text-center"></i>
                                    </div>
                                    <div className="service-desc pt-4 price-box-container-service text-left" style={{ height: '260px' }}>
                                        <h5>Predicciones Basadas en Algoritmos Avanzados</h5>
                                        <ul>
                                            <li>Precio promedio de propiedades</li>
                                            <li>M2 construcción y terreno</li>
                                            <li>Cantidad de unidades disponibles</li>
                                            <li>Estimación de créditos otorgados, desglosados por género</li>
                                            <li>Calculo de riesgo en stock</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon text-left">
                                        <i className="mdi mdi-chart-areaspline text-center"></i>
                                    </div>
                                    <div className="service-desc pt-4 price-box-container-service text-left" style={{ height: '260px' }}>
                                        <h5>Análisis Detallado de Precios y Superficies</h5>
                                        <ul>
                                            <li>Precio por M2 de construcción y terreno</li>
                                            <li>Precio (máximo, mínimo, medio) de propiedades</li>
                                            <li>M2 (máximo, mínimo, promedio) de terreno y construidos</li>
                                            <li>Información detallada sobre salarios promedio por persona y pareja.</li>
                                        </ul>
                                   </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon text-left">
                                    <i className="mdi mdi-home text-center"></i>
                                    </div>
                                    <div className="service-desc pt-4 price-box-container-service text-left" style={{ height: '260px' }}>
                                        <h5>Características de las Propiedades</h5>
                                        <ul>
                                            <li>Comprensión del mercado </li>
                                            <li>Número de baños, recámaras y estacionamiento</li>
                                            <li>Ubicación de la propiedad</li>
                                            <li>Tiempo estimado de venta</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon text-left">
                                    <i className="mdi mdi-history text-center"></i>
                                    </div>
                                    <div className="service-desc pt-4 price-box-container-service text-left" style={{ height: '310px' }}>
                                        <h5>Histórico y Tendencias</h5>
                                    <ul>
                                        <li>Precio medio de propiedades (Últimos 3 años) </li>
                                        <li>Crecimiento del precio promedio en el último año</li>
                                        <li>Tiempo en el mercado</li>
                                        <li>Proyección de demanda de casas / departamentos</li>
                                        <li>Proyeccion de creditos distribuidos (Cantidad / valor)</li>
                                    </ul>                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon text-left">
                                    <i className="mdi mdi-target text-center"></i>
                                    </div>
                                    <div className="service-desc pt-4 price-box-container-service text-left" style={{ height: '310px' }}>
                                        <h5>Segmentación de Mercado:</h5>
                                        <ul>
                                            <li>Analiza la distribución basada en M2</li>
                                            <li>Características específicas para cada segmento (Recamaras, baños, estacionamiento)</li>
                                            <li>Mapas de calor por colonias resaltando áreas clave</li>
                                            <li>Características específicas para cada segmento (Recamaras, baños, estacionamiento)</li>
                                            <li>Meses de antigüedad de propiedades por segmento.</li>
                                        </ul>                                    
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon text-left">
                                    <i className="mdi mdi-chart-arc text-center"></i>
                                    </div>
                                    <div className="service-desc pt-4 price-box-container-service text-left" style={{ height: '310px' }}>
                                        <h5>Proyecciones de Crecimiento Futuro</h5>
                                        <ul>
                                            <li>Proyecciones de crecimiento y evolución del mercado</li>
                                            <li>Evaluación de tendencias para decisiones estratégicas a largo plazo</li>
                                            <li>Estimación del tiempo promedio necesario para la venta de propiedades en distintas áreas.</li>
                                            <li>Crecimiento demográfico</li>
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