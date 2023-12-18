import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Pricing extends Component{
    
    render(){
        return(
            <AUX>
                <section className="section bg-light" id="pricing">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="text-center">
                                    <h3 className="section-title pt-5">Planes ideales para ti</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-4">
                            
                            <div className="price-box p-5 bg-white mt-4 price-box-container" style={{ boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)' }}>
                                    
                                    <div className="plan-name mt-4">
                                        <h6>Plan Panorama</h6>
                                    </div>

                                    <ul>
                                        <li>Resumen general del mercado</li>
                                        <li>Modelo gratuito</li>
                                        <li>Análisis demográfico</li>
                                    </ul> 
                                    
                                    <div className="mt-3">
                                        <Link to="#" className="text-info underline-left">Más Información</Link>
                                    </div>
                                    <div className="mt-5 mb-20 d-flex justify-content-center align-items-center" style={{ marginBottom: '50px' }}>
                                    <Link to="https://datalpine.mx/signup.php" className="btn btn-custom btn-rounded" style={{ marginTop: '200px', marginBottom: '20px' }}>Regístrate Gratis</Link>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="price-box p-5 bg-white text-left mt-4 price-box-container " style={{ boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)' }}>
                                    
                                    <div className="plan-name mt-4">
                                        <h6>Plan Horizonte</h6>
                                        <p>Desde:</p>
                                        <p>
                                            <span style={{ fontWeight: 'bold', fontSize: '40px' }}>$899</span>
                                            <span style={{ fontSize: '20px' }}>   al mes</span>
                                        </p>
                                    </div>

                                    <ul>
                                        <li>Incluye <strong>1 sesion</strong> de consultoría</li>
                                        <li>Distribución de créditos</li>
                                    </ul>
                                    
                                    <div className="mt-3">
                                        <Link to="#" className="text-info underline-left">Más Información</Link>
                                    </div>
                                    <div className="mt-5 mb-20 d-flex justify-content-center align-items-center" style={{ marginBottom: '50px' }}>
                                        <a href="https://teseodata.recurly.com/subscribe/planhorizonte2023?currency=MXN" className='btn btn-custom btn-rounded' style={{ marginTop: '110px', marginBottom: '10px' }}>Compra ahora</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="price-box p-5 bg-white  mt-4 price-box-container" style={{ boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)' }}>
                                    <div className="plan-name mt-4">
                                        <h6>Plan Vision</h6>
                                        <p>Desde:</p>
                                        <p>
                                            <span style={{ fontWeight: 'bold', fontSize: '40px' }}>$1,999</span>
                                            <span style={{ fontSize: '20px' }}>   al mes</span>
                                        </p>
                                    </div>
                                    <ul>
                                        <li>Personalización total</li>
                                        <li>Incluye <strong>1 sesion</strong> de consultoría mensual + 1 informe inmobiliario</li>
                                        
                                    </ul>
                                    <div className="mt-3">
                                        <Link to="#" className="text-info underline-left">Más Información</Link>
                                    </div>
                                    <div className="mt-5 mb-20 d-flex justify-content-center align-items-center" style={{ marginBottom: '50px' }}>
                                    <a href="https://teseodata.recurly.com/subscribe/planvision2023?currency=MXN" className='btn btn-custom btn-rounded' style={{ marginTop: '90px', marginBottom: '10px' }}>Compra ahora</a>
                                    </div>
                                 </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="price-box p-5 bg-white text-left mt-4 " style={{height:600, boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)'}}>
                                    
                                    <div className="plan-name mt-4">
                                        <h6>Factibilidad Financiera</h6>
                                        
                                    </div>

                                    <ul>
                                        <li>Evaluación detallada de costos y beneficios.</li>
                                        <li>Análisis de riesgos financiero para una planificación estratégica.</li>
                                        <li>Proyecciones de rendimiento a largo plazo.</li>
                                        <li>Informes personalizables para presentaciones efectivas.</li>
                                    </ul>
                                    
                                    <div className="mt-3">
                                        <Link to="#" className="text-info underline-left">Más Información</Link>
                                    </div>
                                    <div className="mt-5 mb-20 d-flex justify-content-center align-items-center" style={{ marginBottom: '50px' }}>
                                        <Link to="contacto@datalpine.mx" className="btn btn-custom btn-rounded" style={{ marginTop: '20px', marginBottom: '20px' }}>Contacto con ventas</Link>
                            
                                    </div>
                                </div>

                            </div>

                            <div className="col-lg-4">
                                <div className="price-box p-5 bg-white text-justify mt-4 " style={{height:600, boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)'}}>
                                    
                                    <div className="plan-name mt-4" >
                                        <h6>Optimización del Producto</h6>
                                        
                                    </div>
                                    <ul>
                                        
                                        <li>Análisis detallado de la eficiencia espacial.</li>
                                        <li>Recomendaciones para la selección de materiales y acabados</li>
                                        <li>Estrategias de optimización de costos.</li>
                                        <li>Personalización según las tendencias del mercado.</li>


                                    </ul>
                                    
                                    <div className="mt-3">
                                        <Link to="#" className="text-info underline-left">Más Información</Link>
                                        
                                    </div>
                                    

                                    <div className="mt-5 mb-20 d-flex justify-content-center align-items-center" style={{ marginBottom: '50px' }}>
                                    
                                        <Link to="contacto@datalpine.mx" className="btn btn-custom btn-rounded" style={{ marginTop: '40px', marginBottom: '20px' }}>Contacto con ventas</Link>
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

export default Pricing;   