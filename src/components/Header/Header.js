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
                    

                    <div id="navigation">
                        
                        <ul className="navigation-menu menu-right">
                            <li className="mobile-none">
                            <a href="#quienessomos">Quiénes somos</a>
                            </li>
                            <li className="mobile-none">
                            <a href="#pricing">Planes</a>
                            </li>
                            <li className="mobile-none">
                                <div className='button-nav'>
                                <a href="https://datalpine.mx/login.php" target="_blank" rel="noopener" class="styled-button">
                                Log In
                            </a>
                                </div>
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