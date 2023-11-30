import React, {Component} from 'react';
import AUX from '../../hoc/Aux_';
import { Link } from 'react-router-dom';
import $ from 'jquery';
class Header extends Component{

    componentDidMount() {
        $('.navbar-toggle').on('click', function(event) {
            $(this).toggleClass('open');
            $('#navigation').slideToggle(400);
        });
        
        $('.navigation-menu>li').slice(-2).addClass('last-elements');
        
        $('.menu-arrow,.submenu-arrow').on('click', function(e) {
            if ($(window).width() < 992) {
                e.preventDefault();
                $(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
            }
        });
    }

    
    render(){
        return(
        <AUX>
            <header id="topnav" className="defaultscroll ">
                <div className="container">
                        <div>
                            <Link to="index_1" className="logo">
                                <img src="images/Logo.png" style={{ width: '200px' }} alt="Logo de Steix"/>
                            </Link>
                        </div>
                    <div className="menu-extras">
                        <div className="menu-item">
                            <Link to="#" className="navbar-toggle">
                                <div className="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div id="navigation">
                        
                        <ul className="navigation-menu menu-right">
                            <li className="mobile-none">
                                <Link to="../Sections/QuienesSomos">Quienes somos</Link>
                            </li>
                            <li className="mobile-none">
                                <Link to="../Sections/Pricing.js">Planes</Link>
                            </li>
                            <li className="mobile-none">
                            <a href="https://datalphine.4tocreativo.mx/login.php" target="_blank" rel="noopener noreferrer">
                                Log In
                            </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </AUX>
        );
    }
}

export default Header;   