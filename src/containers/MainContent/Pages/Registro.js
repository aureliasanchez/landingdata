import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AUX from '../../../hoc/Aux_';
import * as actionTypes from '../../../store/action';
import { connect } from 'react-redux';
import emailjs from 'emailjs-com';
import { withRouter } from 'react-router-dom';



class Registro extends Component {

    componentDidMount() {
        if (this.props.loginpage === false) {
            this.props.UpdateLogin();
        }
        window.onpopstate = (e) => {
            this.props.UpdateLoginAgain();
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            formData: {
                fullName: '',
                email: '',
                phone: '',
                estate: '',
                address: '',
                postalCode: '',
            },
        };
    }
    handleInputChange = (event, fieldName) => {
        const { value } = event.target;
        this.setState((prevState) => ({
            formData: {
                ...prevState.formData,
                [fieldName]: value,
            },
        }));
    };
    handleSubmit = async (event) => {
        event.preventDefault();
    
        const { fullName, email, phone, estate, address, postalCode } = this.state.formData;
    
        try {
            // Use EmailJS to send the email
            const templateParams = {
                fullName,
                email,
                phone,
                estate,
                address,
                postalCode,
            };
    
            // Replace 'YOUR_EMAILJS_SERVICE_ID', 'YOUR_EMAILJS_TEMPLATE_ID', and 'YOUR_EMAILJS_USER_ID' with your actual values
            const response = await emailjs.send(
                'service_nlgwtrr',
                'template_x7m5qja',
                templateParams,
                'Wh-J2AXXNyIZIN9xb'
            );
    
             // Check the response from EmailJS
        if (response.status === 200) {
            console.log('Form data sent successfully.');

            // Redirect to the registration confirmation page
            this.props.history.push('/contact_message');
        } else {
            console.error('Failed to send form data.');
        }
    } catch (error) {
        console.error('Error sending form data:', error.message);
    }
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
        const { formData } = this.state;
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
                                                <h2 className="" style={{ color: '#3D45C0' }}>Take the first step towards success in the real estate market</h2>
                                                <p className="text-white-50 text-center">Sign Up For a new Account</p>
                                            </div>
                                            <div className="p-4 mt-4 rounded" style={{ backgroundColor: '#F7F8FC', boxShadow: '2px 8px 8px rgba(0, 0, 0, 0.1)' }}>
                                                <form className="login-form" onSubmit={this.handleSubmit}>
                                                    <div className="row">
                                                    <div className="col-lg-12 mt-4">
                                                        <input
                                                            type="text"  // Set type to "text"
                                                            className="form-control"
                                                            placeholder="Nombre Completo"
                                                            required=""
                                                            value={formData.fullName}
                                                            onChange={(e) => this.handleInputChange(e, 'fullName')}
                                                        />
                                                    </div>
                                                    <div className="col-lg-12 mt-4">
                                                        <input
                                                            type="email"  // Set type to "email"
                                                            className="form-control"
                                                            placeholder="Correo Electrónico"
                                                            required=""
                                                            value={formData.email}
                                                            onChange={(e) => this.handleInputChange(e, 'email')}
                                                        />
                                                    </div>
                                                    <div className="col-lg-12 mt-4">
                                                        <input
                                                            type="tel"  // Set type to "tel"
                                                            className="form-control"
                                                            placeholder="Teléfono"
                                                            required=""
                                                            value={formData.phone}
                                                            onChange={(e) => this.handleInputChange(e, 'phone')}
                                                        />
                                                    </div>
                                                    <div className="col-lg-12 mt-4">
                                                        <input
                                                            type="text"  // Set type to "text"
                                                            className="form-control"
                                                            placeholder="Estado"
                                                            required=""
                                                            value={formData.estate}
                                                            onChange={(e) => this.handleInputChange(e, 'estate')}
                                                        />
                                                    </div>
                                                    <div className="col-lg-12 mt-4">
                                                        <input
                                                            type="text"  // Set type to "text"
                                                            className="form-control"
                                                            placeholder="Direccion"
                                                            required=""
                                                            value={formData.address}
                                                            onChange={(e) => this.handleInputChange(e, 'address')}
                                                        />
                                                    </div>
                                                    <div className="col-lg-12 mt-4">
                                                        <input
                                                            type="text"  // Set type to "text"
                                                            className="form-control"
                                                            placeholder="Codigo Postal"
                                                            required=""
                                                            value={formData.postalCode}
                                                            onChange={(e) => this.handleInputChange(e, 'postalCode')}
                                                        />
                                                    </div>

                                                        
                                                        {/* <div className="col-lg-12 mt-4">
                                                            <div id="my_icon" className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                                <label className="custom-control-label" for="customCheck1">I accept Terms and Conditions</label>
                                                            </div>
                                                        </div> */}
                                                        <div className="col-lg-12 mt-4 mb-3">
                                                            <button type="submit" className="btn btn-custom w-100">
                                                            Register
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

export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(Registro));
