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
                                    <h3 className="section-title pt-5"> Key Elements</h3>
                                    <p className="section-subtitle pt-3 text-muted">Get a comprehensive view of Mexico's real estate market with DatAlpine with accurate market insights, such as: </p>
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-md-4">
                                <div className="service-box text-center p-4 mt-3">
                                    <div className="service-icon text-left">
                                        <i className="mdi mdi-trending-up text-center"></i>
                                    </div>
                                    <div className="service-desc pt-4 price-box-container-service text-left" style={{ height: '260px' }}>
                                        <h5>Algorithm-based predictions</h5>
                                        <ul>
                                            <li>Average Property Price</li>
                                            <li>M2 construction and land</li>
                                            <li>Number of units available</li>
                                            <li>Estimated appropriations granted, disaggregated by gender</li>
                                            <li>In-Stock Risk Calculation</li>
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
                                        <h5>Detailed Analysis of Prices and Areas</h5>
                                        <ul>
                                            <li>Price per M2 of construction and land</li>
                                            <li>Price (maximum, minimum, average) of properties</li>
                                            <li>M2 (maximum, minimum, average) of land and built</li>
                                            <li>Detailed information on average salaries per person and couple</li>
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
                                        <h5>Property Characteristics</h5>
                                        <ul>
                                            <li>Understanding the market </li>
                                            <li>Number of bathrooms, bedrooms and parking</li>
                                            <li>Property Location</li>
                                            <li>Estimated Time of Sale</li>
                                            <li>Segment Range</li>
                                            <li>M2 construction and land</li>
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
                                        <h5>Historical & Trends</h5>
                                    <ul>
                                        <li>Average Property Price (Last 3 Years) </li>
                                        <li>Average price growth in the last year</li>
                                        <li>Time on the market</li>
                                        <li>Demand Projection for Houses / Apartments</li>
                                        <li>Projected Credits Distributed (Amount/Value)</li>
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
                                        <h5>Market Segmentation:</h5>
                                        <ul>
                                            <li>Analyze the distribution based on M2</li>
                                            <li>Segment-specific features (bedrooms, bathrooms, parking)</li>
                                            <li>Heat maps by colonies highlighting key areas</li>
                                            <li>Segment-specific features (bedrooms, bathrooms, parking)</li>
                                            <li>Months of Age of Properties by Segment</li>
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
                                        <h5>Future Growth Projections</h5>
                                        <ul>
                                            <li>Growth Projections and Market Evolution</li>
                                            <li>Trend Assessment for Long-Term Strategic Decisions</li>
                                            <li>Estimating the average time needed to sell properties in different areas.</li>
                                            <li>Population growth</li>
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