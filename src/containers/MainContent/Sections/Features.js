import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Features extends Component{
    
    render(){
        return(
            <AUX>
            <section className="section" id="features" style={{paddingTop: '150px', paddingBottom: '80px'}}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 text-center">
                            
                            <h2 className="section-title pb-5" style={{fontSize: '40px'}}>What is DatAlpine?</h2>

                        </div>
                    </div>
                    <div className="row vertical-content">
                        <div className="col-md-6 pt-4">
                            <img src="images/flat.jpg" alt="" className="img-fluid rounded" />
                        </div>
                        <div className="col-md-6">
                            <div className="features-box">
                                
                                <div className="features-desc">
                                    <h5>The evolution of real estate analysis in Mexico</h5>
                                    <p className="pt-2">DatAlpine, the leading real estate platform that revolutionizes smart decision-making. With an intuitive interface and backed by advanced econometric data models, we stand out for our ability to perform exhaustive market analysis, detailed research, and specific trend projections for various cities in the Mexican Republic. <br /> Whether you're looking for investment opportunities, planning construction projects, or advising real estate clients, our platform gives you a complete and up-to-date view of the real estate landscape, allowing you to anticipate changes, mitigate risks, and make strategic decisions with a high degree of certainty.</p>
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

export default Features;   