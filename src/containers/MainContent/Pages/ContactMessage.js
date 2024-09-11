import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AUX from '../../../hoc/Aux_';
import * as actionTypes from '../../../store/action';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class ContactMessage extends Component {

    componentDidMount() {
        if (this.props.loginpage === false) {
            this.props.UpdateLogin();
        }
        window.onpopstate = (e) => {
            this.props.UpdateLoginAgain();
        }
    }

    render() {
        return (
            <AUX>
                <div className="">
                    <section className="">
                        <div className="container-fluid">
                            <div className="col-lg-12 pt-4">
                                <Link to="index_1" className="logo">
                                    <img src="images/Logo.png" style={{ width: '200px' }} alt="Logo Datalpine" />
                                </Link>
                            </div>
                        </div>
                    </section>

                    <section class="section-contactmessage">
                        <div class="container-contactmessage">
                            <div class="icon-contactmessage">
                                <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                                    <path d="M66.6665 13.3335H13.3332C9.6665 13.3335 6.69984 16.3335 6.69984 20.0002L6.6665 60.0002C6.6665 63.6668 9.6665 66.6668 13.3332 66.6668H66.6665C70.3332 66.6668 73.3332 63.6668 73.3332 60.0002V20.0002C73.3332 16.3335 70.3332 13.3335 66.6665 13.3335ZM66.6665 26.6668L39.9998 43.3335L13.3332 26.6668V20.0002L39.9998 36.6668L66.6665 20.0002V26.6668Z" fill="#6774DF" />
                                </svg>
                            </div>
<<<<<<< HEAD
<<<<<<< HEAD
                            <h2 class="title-contactmessage pb-4">¡Gracias por contactarnos!</h2>
                            <p class="body-text-contactmessage">Pronto recibirá un correo electrónico con más información sobre su solicitud</p>
                            <a href="/" class="button-contactmessage">Regresar</a>
                            <a href="https://datalpine.mx/dashboard/ttam.html" class="button-contactmessage">Ver Demo</a>

=======
>>>>>>> 7c03ef609a52bf578ee6b77fcc1add2402abc84d
=======
>>>>>>> 7c03ef609a52bf578ee6b77fcc1add2402abc84d
                            <h2 class="title-contactmessage pb-4">Thank you for contacting us!</h2>
                            <p class="body-text-contactmessage">You will soon receive an email with more information about your request.</p>
                            <a href="/" class="button-contactmessage">Return</a>
                        </div>
                    </section>
                </div>
            </AUX>
        );
    }
}



const mapStatetoProps = state => {
    return {
        loginpage: state.ui_red.loginpage
    };
}

const mapDispatchtoProps = dispatch => {
    return {
        UpdateLogin: () => dispatch({ type: actionTypes.LOGINPAGE, value: true }),
        UpdateLoginAgain: () => dispatch({ type: actionTypes.LOGINPAGE, value: false })
    };
}

export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(ContactMessage));
