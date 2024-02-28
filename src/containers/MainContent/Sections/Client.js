import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';

class Client extends Component{
    
    render(){
        return(
            <AUX>
                <section className="section bg-gray" id="client" style={{paddingTop: '40px', paddingBottom: '40px'}}>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8">
                                <div className="text-center">
                                    <h2 className="section-title pt-5">Testimonials & Reviews</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-md-4">
                            <div className="testimonial-box">
                            <div className="testimonial-desc bg-light p-4">
                                <p className="text-center text-muted"><span>"</span>DatAlpine has transformed the way we evaluate and develop projects. With their in-depth analysis, we've identified opportunities that you didn't consider before. An essential tool for any builder!<span>"</span></p> 
                                <p className="text-center mb-0 quote-icon text-custom">
                                <img src="images/luisg.jpg" alt="Luis G." className="custom-image" style={{ width: '100px', height: '100px', borderRadius: '50%' }}/>
                                </p>
                                <p className="text-center text-muted nombre"><span></span>Luis G.<span></span></p>
                            </div>
                            <div className="mt-4 testi-img">
                            </div>
                            </div>

                            </div>
                            <div className="col-md-4">
                                <div className="testimonial-box">
                                    <div className="testimonial-desc bg-light p-4">
                                        <p className="text-center text-muted"><span>"</span>As an investor, I'm always looking to make decisions backed by solid data. The reports have provided me with valuable insights into market trends and in this way recognize investment opportunities.<span>"</span></p>
                                        <p className="text-center mb-0 quote-icon text-custom">
                                        <img src="images/joelf.jpg" alt="Luis G." className="custom-image" style={{ width: '100px', height: '100px', borderRadius: '50%' }}/>
                                        </p>
                                        <p className="text-center text-muted nombre"><span></span>Joel F.<span></span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="testimonial-box">
                                    <div className="testimonial-desc bg-light p-4">
                                        <p className="text-center text-muted"><span>"</span>The key to standing out in the real estate market is to thoroughly understand the needs of clients and the environment. DatAlpine simplifies this process, providing us with accurate and up-to-date information.<span>"</span></p>
                                        <p className="text-center mb-0 quote-icon text-custom">
                                        <img src="images/marias.jpg" alt="Luis G." className="custom-image" style={{ width: '100px', height: '100px', borderRadius: '50%' }}/>
                                        </p>
                                        <p className="text-center text-muted nombre"><span></span>Maria S.<span></span></p>
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

export default Client;   