import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Pricing extends Component{
    
    render(){
        return(
            <AUX>
                <section className="section bg-light" id="pricing" style={{paddingTop: '20px', paddingBottom: '80px'}}>
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
                            
                            <div className="price-box px-4 pt-4 bg-white mt-4 price-box-container" style={{ boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', width: 'auto', height: '800px'}}>
                                <div className="plan-name mt-4" style={{paddingBottom: '42px' }}>
                                        <h6 style={{paddingBottom: '25px', fontSize: '35px' }}>Plan Panorama</h6>
                                        <p style={{ marginBottom: '0' }}>Muestra un resumen histórico de precios, comprende la distribución y tendencias por segmento, y accede a análisis demográficos, comparativas regionales y más.</p>                                        
                                    </div>
                                    <div className="plan-name mt-4" style={{paddingBottom: '42px' }}>
                                        <span style={{ fontWeight: 'bold', fontSize: '40px', color: '#6774DF' }}>Gratuito</span>
                                    </div>

                                    <ul style={{ paddingLeft: '18px', lineHeight: '2em'}}>
                                        <li>Resumen general del mercado</li>
                                        <li>Distribución de Propiedades por Segmento</li>
                                        <li>Tendencias de Precios por Segmento</li>
                                        <li>Comparativa Regional</li>
                                        <li>Estacionalidad</li>                                        
                                        <li>Tendencias de Precios por Segmento</li>
                                    </ul> 
                                    
                                    
                                    <div className="mt-5 mb-20 d-flex justify-content-center align-items-center" style={{ marginBottom: '50px' }}>
                                    <Link to="registro" className="btn btn-custom btn-rounded" style={{ marginTop: '8px', marginBottom: '10px' }}>Regístrate ahora</Link>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="price-box px-4 pt-4 bg-white mt-4 price-box-container" style={{ boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', width: 'auto', height: '800px'}}>                                    
                                    <div className="plan-name mt-4">
                                        <h6 style={{paddingBottom: '20px', fontSize: '35px' }}>Plan Horizonte</h6>
                                        <p style={{ marginBottom: '0',  }}>Brinda un conjunto de herramientas aún más completo, respaldadas por datos verificados para tomar decisiones informadas en el mercado inmobiliario.</p>                                       
                                        
                                    </div>
                                    <div className="plan-name mt-4">    
                                        <p style={{ marginBottom: '0', fontWeight: 'bold' }}>Ideal para:</p>                                        
                                        <p style={{ marginBottom: '0' }}>Agente Inmobiliario o Inmobiliaria</p>
                                    </div>
                                    <div className="plan-name mt-4">    
                                    <p style={{ marginBottom: '0', fontWeight: 'bold' }}>Desde:</p>
                                        <div style={{paddingBottom: '20px' }}>
                                            <span style={{ fontWeight: 'bold', fontSize: '40px', color: '#6774DF' }}>$899</span>
                                            <span style={{ fontSize: '20px' }}>al mes</span>
                                        </div>
                                    </div>
                                    <ul style={{ paddingLeft: '18px', lineHeight: '2em' }}>
                                        <li>Todo del Plan Panorama</li>
                                        <li><strong style={{ color: '#6774DF' }}>1 sesión</strong> de consultoría</li>
                                        <li>Distribución de créditos</li>
                                        <li>Análisis detallado del mercado</li>
                                        <li>Demanda y salario</li>
                                        <li>Profesiones y Oficios</li>
                                        <li>Suscripcion a 3 meses</li>
                                    </ul>
                                    <div className="mt-5 mb-20 d-flex justify-content-center align-items-center" style={{ marginBottom: '50px' }}>
                                        <a href="https://teseodata.recurly.com/subscribe/planhorizonte2023?currency=MXN" className='btn btn-custom btn-rounded' style={{ marginTop: '5px', marginBottom: '10px' }}>Compra ahora</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                            <div className="price-box px-4 pt-4 bg-white mt-4 price-box-container" style={{ boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', width: 'auto', height: '800px'}}>                                    
                                    <div className="plan-name mt-4">
                                        <h6 style={{paddingBottom: '20px', fontSize: '35px'}}>Plan Vision</h6>
                                    
                                        <p style={{ marginBottom: '0' }}>Proporciona una versión mucho más descriptiva, analítica y personalizada, proporcionando acceso a funcionalidades avanzadas.</p>                                       
                                        
                                    </div>
                                    <div className="plan-name mt-4">    
                                        <p style={{ marginBottom: '0', fontWeight: 'bold' }}>Ideal para:</p>                                        
                                        <p style={{ marginBottom: '0' }}>Constructor / Desarrollador</p>
                                    </div>
                                    <div className="plan-name mt-4">    
                                    <p style={{ marginBottom: '0', fontWeight: 'bold' }}>Desde:</p>
                                        <div style={{paddingBottom: '20px' }}>
                                            <span style={{ fontWeight: 'bold', fontSize: '40px', color: '#6774DF' }}>$1,199</span>
                                            <span style={{ fontSize: '20px' }}>   al mes</span>
                                        </div>
                                    </div>
                                    <ul style={{ paddingLeft: '18px', lineHeight: '2em' }}>
                                        <li>Todo del Plan Horizonte</li>
                                        <li>Optimización de Espacios</li>
                                        <li>Personalización total</li>
                                        <li>Incluye <strong style={{ color: '#6774DF' }}>1 sesión</strong> de consultoría mensual <strong style={{ color: '#6774DF' }}> +1 informe </strong> inmobiliario</li>
                                        <li>Acceso a toda la plataforma</li>
                                        <li>Suscripcion a 3 meses</li>
                                    </ul>
                                    <div className="mt-5 mb-20 d-flex justify-content-center align-items-center" style={{ marginBottom: '50px' }}>
                                    <a href="https://teseodata.recurly.com/subscribe/planvision2023?currency=MXN" className='btn btn-custom btn-rounded' style={{ marginTop: '0px', marginBottom: '10px' }}>Compra ahora</a>
                                    </div>
                                 </div>
                            </div>

                            {/* Separador visual */}
                            <div className="col-lg-12 text-center mt-4">
                            <hr style={{ border: '1px solid #ddd' }} />
                            <h2 className="section-title pt-5">Servicios Data Premium</h2>
                            </div>

                            <div className="col-md-6">
                            <div className="price-box px-4 pt-4 pb-2 bg-white text-left mt-4 price-box-container" style={{ boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', height: '400px' }}>
                                <div className="plan-name mt-4">
                                <h6 style={{paddingBottom: '10px', lineHeight:'1.2em'  }}>Factibilidad Financiera para el mercado inmobiliario</h6>
                                </div>
                                <p style={{ marginBottom: '0', fontWeight: 'bold' }}>Te ofrecemos un análisis robusto y fácil de usar que evalúa la viabilidad económica de tus proyectos inmobiliarios.</p>                                     
                                <ul style={{ paddingLeft: '18px' }}>
                                <li className='pb-2'>Evaluación detallada de costos y beneficios.</li>
                                <li className='pb-2'>Análisis de riesgos financiero para una planificación estratégica</li>
                                <li className='pb-2'>Proyecciones de rendimiento a largo plazo.</li>
                                <li className='pb-2'>Informes personalizables para presentaciones efectivas.</li>
                                </ul>
                                {/* <div className="mt-2">
                                <Link to="#" className="text-info underline-left">Más Información</Link>
                                </div> */}
                                <div className="mt-2 mb-10 d-flex justify-content-center align-items-center" style={{ marginBottom: '20px' }}>
                                <Link to="contacto_ventas" className="btn btn-custom btn-rounded" style={{ marginTop: '8px', marginBottom: '10px' }}>Contacto con ventas</Link>
                                </div>
                            </div>
                            </div>


                            <div className="col-md-6">
                            <div className="price-box px-4 pt-4 pb-2 bg-white text-left mt-4 price-box-container" style={{ boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', height: '400px' }}>
                            <div className="plan-name mt-4">
                                <h6 style={{paddingBottom: '10px', lineHeight:'1.2em' }}>Optimización del Producto para el mercado inmobiliario</h6>
                                </div>
                                <p style={{ marginBottom: '0', fontWeight: 'bold' }}>Te ofrecemos un análisis para mejorar la eficiencia operativa y la rentabilidad de tus proyectos.</p>                                     
                                <ul style={{ paddingLeft: '18px' }}>
                                <li className='pb-2'>Análisis detallado de la eficiencia espacial.</li>
                                <li className='pb-2'>Recomendaciones para la selección de materiales y acabados</li>
                                <li className='pb-2'>Estrategias de optimización de costos.</li>
                                <li className='pb-2'>Personalización según las tendencias del mercado.</li>
                                </ul>
                                {/* <div className="mt-2">
                                <Link to="#" className="text-info underline-left">Más Información</Link>
                                </div> */}
                                <div className="mt-2 mb-10 d-flex justify-content-center align-items-center" style={{ marginBottom: '20px' }}>
                                <Link to="contacto_ventas" className="btn btn-custom btn-rounded" style={{ marginTop: '8px', marginBottom: '10px' }}>Contacto con ventas</Link>
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