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
                                <div className="price-box p-5 bg-white  mt-4 price-box-container">
                                    
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
                                    <div className="mt-5 mb-20">
                                        <Link to="#" className="btn btn-custom btn-rounded">Regístrate Gratis</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="price-box p-5 bg-white text-left mt-4 price-box-container">
                                    
                                    <div className="plan-name mt-4">
                                        <h6>Plan Horizonte</h6>
                                        <p>Desde:</p>
                                        <p>
                                            <span style={{ fontWeight: 'bold', fontSize: '40px' }}>$899</span>
                                            <span style={{ fontSize: '20px' }}>   al mes</span>
                                        </p>
                                    </div>

                                    <ul>
                                        <li>Incluye <strong>3 sesiones</strong> de consultoría</li>
                                        <li>Distribución de créditos</li>
                                    </ul>
                                    
                                    <div className="mt-3">
                                        <Link to="#" className="text-info underline-left">Más Información</Link>
                                    </div>
                                    <div className="mt-5">
                                        <Link to="#" className="btn btn-custom btn-rounded">Regístrate</Link>
                                    </div>

                                    <div className="mt-5 price-box-container-extra text-center">
                                        <p>Ideal para:</p>
                                        <p>Agente Inmobiliario o Inmobiliaria</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                                <div className="price-box p-5 bg-white  mt-4 price-box-container">
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
                                        <li>Incluye <strong>1 sesion</strong> de consultoría mensual</li>
                                        
                                    </ul>
                                    <div className="mt-3">
                                        <Link to="#" className="text-info underline-left">Más Información</Link>
                                    </div>
                                    <div className="mt-5">
                                        <Link to="#" className="btn btn-custom btn-rounded">Regístrate</Link>
                                    </div>

                                    <div className="mt-5 price-box-container-extra text-center">
                                        <p>Ideal para:</p>
                                        <p>Constructor / Desarrollador</p>
                                    </div>                               
                                 </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="price-box p-5 bg-white text-left mt-4 ">
                                    
                                    <div className="plan-name mt-4">
                                        <h6>Factibilidad Financiera</h6>
                                        <p>Promocion:</p>
                                        <p>
                                            <span className='nombre-pricing' style={{ fontWeight: 'bold', fontSize: '35px' }}>$24,999.00</span> <span style={{ fontSize: '20px' }}>   al mes</span>
                                        </p>
                                        <p>Precio Regular:</p>
                                        <p>
                                        <span style={{ position: 'relative', fontSize: '40px' }}>
                                        <span style={{ fontWeight: 'bold' }}>$49,999</span>
                                        <span style={{ position: 'absolute', top: '26px', left: 0, width: '100%', borderBottom: '2px solid black' }}></span>
                                        </span>
                                        <span style={{ fontSize: '20px' }}> al mes</span>
                                        </p>
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
                                    <div className="mt-5">
                                        <Link to="#" className="btn btn-custom btn-rounded">Regístrate</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="price-box p-5 bg-white text-justify mt-4 ">
                                    
                                    <div className="plan-name mt-4">
                                        <h6>Optimización del Producto</h6>
                                        <p>Promocion:</p>
                                        <p>
                                            <span className='nombre-pricing' style={{ fontWeight: 'bold', fontSize: '35px' }}>$24,999.00</span><span style={{ fontSize: '20px' }}>   al mes</span>
                                        </p>
                                        <p>Precio Regular:</p>
                                        <p>
                                        <span style={{ position: 'relative', fontSize: '40px' }}>
                                        <span style={{ fontWeight: 'bold' }}>$49,999</span>
                                        <span style={{ position: 'absolute', top: '26px', left: 0, width: '100%', borderBottom: '2px solid black' }}></span>
                                        </span>
                                        <span style={{ fontSize: '20px' }}> al mes</span>
                                        </p>

                                        
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
                                    <div className="mt-5">
                                        <Link to="#" className="btn btn-custom btn-rounded">Regístrate</Link>
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