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
                                    <h3 className="section-title pt-5">Ideal plans for you</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-lg-4">
                            
                            <div className="price-box px-4 pt-4 bg-white mt-4 price-box-container" style={{ boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', width: 'auto', height: '800px'}}>
                                <div className="plan-name mt-4" style={{paddingBottom: '42px' }}>
                                        <h6 style={{paddingBottom: '25px', fontSize: '35px' }}>Plan Panorama</h6>
                                        <p style={{ marginBottom: '0' }}>Display a historical price overview, understand distribution and trends by segment, and access demographic analysis, regional comparisons, and more.</p>                                        
                                    </div>
                                    <div className="plan-name mt-4" style={{paddingBottom: '42px' }}>
                                        <span style={{ fontWeight: 'bold', fontSize: '40px', color: '#6774DF' }}>Free</span>
                                    </div>

                                    <ul style={{ paddingLeft: '18px', lineHeight: '2em'}}>
                                        <li>Market Overview</li>
                                        <li>Property Distribution by Segment</li>
                                        <li>Price Trends by Segment</li>
                                        <li>Regional Comparison</li>
                                        <li>Seasonality</li>                                        
                                        <li>Price Trends by Segment</li>
                                    </ul> 
                                    
                                    
                                    <div className="mt-5 mb-20 d-flex justify-content-center align-items-center" style={{ marginBottom: '50px' }}>
                                    <Link to="registro" className="btn btn-custom btn-rounded" style={{ marginTop: '8px', marginBottom: '10px' }}>Sign up now</Link>
                                </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="price-box px-4 pt-4 bg-white mt-4 price-box-container" style={{ boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', width: 'auto', height: '800px'}}>                                    
                                    <div className="plan-name mt-4">
                                        <h6 style={{paddingBottom: '20px', fontSize: '35px' }}>Horizon Plan</h6>
                                        <p style={{ marginBottom: '0',  }}>It provides an even more comprehensive set of tools, backed by verified data to make informed decisions in the real estate market.</p>                                       
                                        
                                    </div>
                                    <div className="plan-name mt-4">    
                                        <p style={{ marginBottom: '0', fontWeight: 'bold' }}>Ideal for:</p>                                        
                                        <p style={{ marginBottom: '0' }}>Real Estate Agent</p>
                                    </div>
                                    <div className="plan-name mt-4">    
                                    <p style={{ marginBottom: '0', fontWeight: 'bold' }}>Since:</p>
                                        <div style={{paddingBottom: '20px' }}>
                                            <span style={{ fontWeight: 'bold', fontSize: '40px', color: '#6774DF' }}>$899</span>
                                            <span style={{ fontSize: '20px' }}>per month</span>
                                        </div>
                                    </div>
                                    <ul style={{ paddingLeft: '18px', lineHeight: '2em' }}>
                                        <li>Everything from the Panorama Plan</li>
                                        <li><strong style={{ color: '#6774DF' }}>1 Consulting </strong>Session</li>
                                        <li>Distribution of credits</li>
                                        <li>Detailed Market Analysis</li>
                                        <li>Demand & Salary</li>
                                        <li>Professions and Trades</li>
                                        <li>3-month subscription</li>
                                    </ul>
                                    <div className="mt-5 mb-20 d-flex justify-content-center align-items-center" style={{ marginBottom: '50px' }}>
                                        <a href="https://teseodata.recurly.com/subscribe/planhorizonte2023?currency=MXN" className='btn btn-custom btn-rounded' style={{ marginTop: '5px', marginBottom: '10px' }}>Subscribe Now</a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-lg-4">
                            <div className="price-box px-4 pt-4 bg-white mt-4 price-box-container" style={{ boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', width: 'auto', height: '800px'}}>                                    
                                    <div className="plan-name mt-4">
                                        <h6 style={{paddingBottom: '20px', fontSize: '35px'}}>Plan Vision</h6>
                                    
                                        <p style={{ marginBottom: '0' }}>It provides a much more descriptive, analytical, and personalized version, providing access to advanced functionalities.</p>                                       
                                        
                                    </div>
                                    <div className="plan-name mt-4">    
                                        <p style={{ marginBottom: '0', fontWeight: 'bold' }}>Ideal for:</p>                                        
                                        <p style={{ marginBottom: '0' }}>Builder / Developer</p>
                                    </div>
                                    <div className="plan-name mt-4">    
                                    <p style={{ marginBottom: '0', fontWeight: 'bold' }}>Since:</p>
                                        <div style={{paddingBottom: '20px' }}>
                                            <span style={{ fontWeight: 'bold', fontSize: '40px', color: '#6774DF' }}>$1,199</span>
                                            <span style={{ fontSize: '20px' }}>  per month</span>
                                        </div>
                                    </div>
                                    <ul style={{ paddingLeft: '18px', lineHeight: '2em' }}>
                                        <li>Everything from the Horizon Plan</li>
                                        <li>Space Optimization</li>
                                        <li>Full Customization</li>
                                        <li>Includes <strong style={{ color: '#6774DF' }}>1 monthly consulting session</strong>+1 real estate report</li>
                                        <li>Access to the entire platform</li>
                                        <li>3 month subscription</li>
                                    </ul>
                                    <div className="mt-5 mb-20 d-flex justify-content-center align-items-center" style={{ marginBottom: '50px' }}>
                                    <a href="https://teseodata.recurly.com/subscribe/planvision2023?currency=MXN" className='btn btn-custom btn-rounded' style={{ marginTop: '0px', marginBottom: '10px' }}>Subscribe Now</a>
                                    </div>
                                 </div>
                            </div>

                            {/* Separador visual */}
                            <div className="col-lg-12 text-center mt-4">
                            <hr style={{ border: '1px solid #ddd' }} />
                            <h2 className="section-title pt-5">Data Premium Services</h2>
                            </div>

                            <div className="col-md-4">
                            <div className="price-box px-4 pt-4 pb-2 bg-white text-left mt-4 price-box-container" style={{ boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', height:"608px"}}>
                                <div className="plan-name mt-4">
                                <h6 style={{paddingBottom: '10px', lineHeight:'1.2em'  }}>Financial Feasibility for the Real Estate Market</h6>
                                </div>
                                <p style={{ marginBottom: '0', fontWeight: 'bold' }}>We offer you a robust and easy-to-use analysis that evaluates the economic viability of your real estate projects.</p>                                     
                                <ul style={{ paddingLeft: '18px' }}>
                                <li className='pb-2'>Detailed cost-benefit assessment.</li>
                                <li className='pb-2'>Financial Risk Analysis for Strategic Planning</li>
                                <li className='pb-2'>Long-term performance projections</li>
                                <li className='pb-2'>Customizable Reports for Effective Presentations</li>
                                </ul>
                                {/* <div className="mt-2">
                                <Link to="#" className="text-info underline-left">Más Información</Link>
                                </div> */}
                                <div className="mt-2 mb-10 d-flex justify-content-center align-items-center" style={{ marginBottom: '20px' }}>
                                <Link to="contacto_ventas" className="btn btn-custom btn-rounded" style={{ marginTop: '8px', marginBottom: '10px' }}>Contact Sales</Link>
                                </div>
                            </div>
                            </div>


                            <div className="col-md-4">
                            <div className="price-box px-4 pt-4 pb-2 bg-white text-left mt-4 price-box-container" style={{ boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', height:"608px" }}>
                            <div className="plan-name mt-4">
                                <h6 style={{paddingBottom: '10px', lineHeight:'1.2em' }}>Product Optimization for the Real Estate Market</h6>
                                </div>
                                <p style={{ marginBottom: '0', fontWeight: 'bold' }}>We offer you an analysis to improve the operational efficiency and profitability of your projects.</p>                                     
                                <ul style={{ paddingLeft: '18px' }}>
                                <li className='pb-2'>Detailed analysis of spatial efficiency</li>
                                <li className='pb-2'>Recommendations for the selection of materials and finishes</li>
                                <li className='pb-2'>Cost Optimization Strategies</li>
                                <li className='pb-2'>Customization according to market trends</li>
                                </ul>
                                {/* <div className="mt-2">
                                <Link to="#" className="text-info underline-left">Más Información</Link>
                                </div> */}
                                <div className="mt-2 mb-10 d-flex justify-content-center align-items-center" style={{ marginBottom: '20px' }}>
                                <Link to="contacto_ventas" className="btn btn-custom btn-rounded" style={{ marginTop: '8px', marginBottom: '10px' }}>Contact Sales</Link>
                                </div>
                            </div>
                            </div>

                            <div className="col-md-4">
                            <div className="price-box px-4 pt-4 pb-2 bg-white text-left mt-4 price-box-container" style={{ boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', height:"auto" }}>
                            <div className="plan-name mt-4">
                                <h6 style={{paddingBottom: '10px', lineHeight:'1.2em' }}>Property Explorer</h6>
                                </div>
                                <p style={{ marginBottom: '0', fontWeight: 'bold' }}>We offer a detailed analysis by area or property, to understand the dynamics of the real estate market in this specific area and support your investment decisions.</p>                                     
                                <ul style={{ paddingLeft: '18px' }}>
                                <li className='pb-2'>Comprehensive assessment of the characteristics of the property</li>
                                <li className='pb-2'>Comprehensive comparison with similar properties on the market for a competitive view</li>
                                <li className='pb-2'>Detailed record of current market trends</li>
                                <li className='pb-2'>Strategic Real Estate Market Analysis and Risk Assessment</li>
                                </ul>
                                {/* <div className="mt-2">
                                <Link to="#" className="text-info underline-left">Más Información</Link>
                                </div> */}
                                <div className="mt-2 mb-10 d-flex justify-content-center align-items-center" style={{ marginBottom: '20px' }}>
                                <Link to="contacto_ventas" className="btn btn-custom btn-rounded" style={{ marginTop: '8px', marginBottom: '10px' }}>Contact Sales</Link>
                                </div>
                            </div>
                            </div>
                            {/* Separador visual */}
                            <div className="col-lg-12 text-center mt-4">
                            <hr style={{ border: '1px solid #ddd' }} />
                            <h2 className="section-title pt-5"></h2>
                            </div>
                            <div className="" style={{height:"100%", width:"100%"}}>
                            <div className="price-box px-4 pt-4 pb-2 bg-white text-left mt-4 price-box-container" style={{ boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)', borderRadius: '12px', height:"100%", width:"100%"}}>
                            <div className="plan-name mt-4">
                                <h6 style={{paddingBottom: '10px', lineHeight:'1.2em' }}>DEMO</h6>
                                </div>
                                <p style={{ marginBottom: '0', fontWeight: 'bold' }}>Explore DatAlpine, Your Free Demo for Strategic Real Estate Decisions</p>                                     
                                
                                {/* <div className="mt-2">
                                <Link to="#" className="text-info underline-left">Más Información</Link>
                                </div> */}
                                <div className="mt-2 mb-10 d-flex justify-content-center align-items-center" style={{ marginBottom: '20px' }}>
                                <Link to="demo" className="btn btn-custom btn-rounded" style={{ marginTop: '8px', marginBottom: '10px' }}>Start Free Demo</Link>
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