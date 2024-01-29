import React , {Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';



class Contact extends Component{
    render(){
        return(
            <AUX>
                <section className="pt-1" id="contact" style={{ background: '#A9A9A9', paddingTop: '10px', paddingBottom: '50px' }}>
                    <div className="container">
                        <div className="row justify-content-center pt-5">
                            <div className="col-md-8">
                                <div className="text-center">
                                    <h3 className="section-title text-white pt-5">Contacto</h3>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="row mt-5">
                                    <div className="col-lg-4">
                                        <div className="single-contact text-center text-white"> 
                                            <i className="mdi mdi-cellphone"></i>
                                            <h4>Teléfono:</h4>
                                            <p>771 330 64 07</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="single-contact text-center text-white"> 
                                            <i className="mdi mdi-map-marker"></i>
                                            <h4>Dirección:</h4>
                                            <p>Pachuca de Soto, Hidalgo.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="single-contact text-center text-white"> 
                                            <i className="mdi mdi-email-outline"></i>
                                            <h4>Correo Electrónico:</h4>
                                            <p>contacto@datalpine.mx</p>
                                        </div>
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

export default Contact; 