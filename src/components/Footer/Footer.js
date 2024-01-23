import React, {Component} from 'react';
import AUX from '../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare, FaTiktok } from 'react-icons/fa';

class Footer extends Component{
    
    render(){
        return(
            <AUX>
              <section className="pt-1 bg-dark" id="contact">
              <div className="row mt-5 pb-2 text-white">
              <div className="col-md-6">
                <div className="pl-4 pr-4 text-center" >
                  {/* Contenido de la segunda columna en la primera fila */}
                  <div id="navigation">
                  <ul>
                  <label htmlFor="" className=""> Secciones:</label>
                  </ul>
                        <ul className="text-white">
                            <li className="mobile-none">
                            <a href="#faq">Servicios</a>
                            </li>
                        </ul>
                        <ul className="navigation-menu menu-right">
                          <li className="mobile-none">
                            <a href="#quienessomos">Quiénes somos</a>
                          </li>
                        </ul>
                        <ul className="navigation-menu menu-right">
                          <li className="mobile-none">
                            <a href="#pricing">Planes</a>
                          </li>
                        </ul>
                        <ul className="navigation-menu menu-right">
                        <li className="mobile-none">
                            <a href="#contact">Contacto</a>
                            </li>
                        </ul>   
                    </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="pl-4 pr-4 text-center">
                  {/* Contenido de la segunda columna en la primera fila */}
                  <div id="navigation">
                  <ul>
                  <label htmlFor="" className=""> A cerca de:</label>
                  </ul>
                        <ul className="navigation-menu menu-right">
                        <li className="mobile-none">
                        <a href="https://teseodata.com/">Teseo Data Lab</a>
                            </li>
                        </ul>
                        <ul className="navigation-menu menu-right">
                        <li className="mobile-none">
                            <a href="https://blog.datalpine.mx/">Blog</a>
                            </li>
                        </ul> 
                    </div>
                </div>
              </div>
              </div>

              <div className="row  pb-2 d-flex align-items-center justify-content-center" >
                    {/* Facebook */}
                    <a href="https://www.facebook.com/profile.php?id=61552173002247" target="_blank" rel="noopener noreferrer" className="ml-2">
                      <FaFacebookSquare size={25} color="white" />
                    </a>

                    {/* Twitter */}
                    <a href="https://twitter.com/DatAlpine" target="_blank" rel="noopener noreferrer" className="ml-2">
                      <FaTwitterSquare size={25} color="white" />
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/company/datalpine/" target="_blank" rel="noopener noreferrer" className="ml-2">
                      <FaLinkedin size={25} color="white" />
                    </a>

                    {/* Instagram */}
                    <a href="https://www.instagram.com/DatAlpine/?fbclid=IwAR0B-HYWqGM5of0fBiCHFVWD7Uysb-punr5kVR8JHI11qobuvOzIMdJ6w14" target="_blank" rel="noopener noreferrer" className="ml-2">
                      <FaInstagramSquare size={25} color="white" />
                    </a>

                    {/* TikTok */}
                    <a href="https://www.tiktok.com/@datalpine?_t=8gsoksxpqdz&_r=1" target="_blank" rel="noopener noreferrer" className="ml-2">
                      <FaTiktok size={25} color="white" />
                    </a>
                  </div>
                <div className="row  d-flex align-items-center justify-content-center" >
                  <div className="col-md-6">
                    <div className="text-white pl-4 pr-4  text-center">
                      <p className="copyright-desc pb-0">2024 DatAlpine. Todos los Derechos Reservados</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="text-white pl-4 pr-4  text-center">
                      <p className="copyright-desc pb-0">Politica de Privacidad</p>
                    </div>
                  </div>
                </div>          
              </section> 
            </AUX>
        );
    }
}

export default Footer;   