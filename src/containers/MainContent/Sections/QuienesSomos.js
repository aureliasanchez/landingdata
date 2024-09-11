import React, { Component } from 'react';
import AUX from '../../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { FaFlag } from 'react-icons/fa'; // Importar el icono de la bandera de México
import { IoIosMedal } from 'react-icons/io';





class QuienesSomos extends Component {

    render() {
        return (
            <AUX>
                <section className="section" id="quienessomos" style={{ paddingTop: '20px', paddingBottom: '0px' }}>

                    <div className="container" style={{ paddingBottom: '50px' }}>
                        <div className="row vertical-content">
                            <div className="col-md-6 col-sm-6 col-lg-6">
                                <div className="features-box">
                                    <div className="features-desc" >
                                        <h3 className='title-quines-somos' >Who are we?</h3>
                                        <p className="pt-2 txt-quines-somos text-left">DatAlpine is a product of TESEO DATA LAB, a global team of data scientists. With more than 18 real estate projects and a track record in Mexico, Japan, USA, Canada, Switzerland and Germany. Experts committed to transforming data into effective strategies.</p>
                                        <p className="pt-2 txt-quines-somos text-left">As software developers and experts in data analytics and artificial intelligence in the industry, we are committed to providing accurate and effective solutions that generate concrete results for our clients.</p>
                                        
                                        <IoIosMedal style={{ marginRight: '10px' }} /> Certifications:
                                        <p >CIRA Canadá Certificate <br /> Alberta Business Certificate</p>
                                        <FaFlag style={{ marginRight: '10px' }} /> With a presence in the following countries:
                                        <div>
                                        <p>México, Colombia y Canadá</p>
                                        </div>
                                    </div>
                                    <div className="features-desc" style={{ paddingTop: '10px', }}>
                                        <a href="https://teseodata.com/" className="btn-quines-somos2">Get to know our website</a>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-lg-6 pt-4">
                                <img src="images/workteam.jpg" alt="" className="img-fluid rounded" />
                            </div>
                        </div>
                    </div>
                    {/*
                    <div className='container-quines-somos' style={{boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)'}}>
                        <img className='container-img' src="images/Logo.png" style={{paddingBottom: '5px'}}/>
                        <p className='container-txt'>Tu socio en decisiones inmobiliarias</p>
                        <a href="#contact" className='btn-quines-somos'>Contáctanos</a>
                    </div>
                     */}
                </section>
            </AUX>
        );
    }
}
export default QuienesSomos; 
