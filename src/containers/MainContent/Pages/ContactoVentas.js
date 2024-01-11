import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com'; // Import the emailjs-com library
import AUX from '../../../hoc/Aux_';
import * as actionTypes from '../../../store/action';
import { connect } from 'react-redux';

class ContactoVentas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            phone: '',
            selectedPlan: '',
        };
    }

    handleInputChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();

        // Use the EmailJS send function to send the email
        emailjs.send(
            'service_1pw3hxb',
            'template_yatrpuq',
            {
                fullName: this.state.fullName,
                email: this.state.email,
                phone: this.state.phone,
                selectedPlan: this.state.selectedPlan,
            },
            'Wh-J2AXXNyIZIN9xb'
        )
        .then((response) => {
            console.log('Email sent successfully:', response);
            // TODO: Add logic for successful form submission
        })
        .catch((error) => {
            console.error('Email sending failed:', error);
            // TODO: Add logic for failed form submission
        });
    };

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

                    <section className="section">
                        <div className="login-table">
                            <div className="login-table-cell">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-6">
                                            <div className="text-center">
                                                <h2 className="" style={{ color: '#3D45C0' }}>Da el primer paso hacia el éxito en el mercado inmobiliario</h2>
                                                <p className="text-white-50 text-center">Sign Up For a new Account</p>
                                            </div>
                                            <div className="p-4 mt-4 rounded" style={{ backgroundColor: '#F7F8FC', boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)' }}>
                                                <form className="login-form" onSubmit={this.handleSubmit}>
                                                    <div className="row">
                                                    <div className="col-lg-12 mt-4">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Nombre Completo"
                                                            required=""
                                                            name="fullName" // Add the name attribute to bind with state
                                                            value={this.state.fullName} // Bind the value with state
                                                            onChange={this.handleInputChange} // Handle input changes
                                                        />
                                                    </div>
                                                    <div className="col-lg-12 mt-4">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="Correo Electrónico"
                                                            required=""
                                                            name="email" // Add the name attribute to bind with state
                                                            value={this.state.email} // Bind the value with state
                                                            onChange={this.handleInputChange} // Handle input changes
                                                        />
                                                    </div>
                                                    <div className="col-lg-12 mt-4">
                                                        <input
                                                            type="tel"
                                                            className="form-control"
                                                            placeholder="Teléfono"
                                                            required=""
                                                            name="phone" // Add the name attribute to bind with state
                                                            value={this.state.phone} // Bind the value with state
                                                            onChange={this.handleInputChange} // Handle input changes
                                                        />
                                                    </div>
                                                    <div className="col-lg-12 mt-4">
                                                        <select
                                                            name="selectedPlan"
                                                            className="form-control"
                                                            value={this.state.selectedPlan}
                                                            onChange={this.handleInputChange}
                                                        >
                                                            <option disabled value="">
                                                                Selecciona un plan
                                                            </option>
                                                            <option value="Factibilidad Financiera">Factibilidad Financiera</option>
                                                            <option value="Optimizacion del Producto">Optimización del producto</option>
                                                        </select>
                                                    </div>
                                                        {/* <div className="col-lg-12 mt-4">
                                                            <div id="my_icon" className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                                <label className="custom-control-label" for="customCheck1">I accept Terms and Conditions</label>
                                                            </div>
                                                        </div> */}
                                                        <div className="col-lg-12 mt-4 mb-3">
                                                            <button type="submit" className="btn btn-custom w-100">
                                                                Solicitar Información
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(ContactoVentas);
