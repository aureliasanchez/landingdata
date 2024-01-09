import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AUX from '../../../hoc/Aux_';
import * as actionTypes from '../../../store/action';
import { connect } from 'react-redux';



class Registro extends Component {

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
                                                <form className="login-form" action="index_1">
                                                    <div className="row">
                                                        <div className="col-lg-12 mt-4">
                                                            <input type="text" className="form-control" placeholder="Nombre Completo" required="" />
                                                        </div>
                                                        <div className="col-lg-12 mt-4">
                                                            <input type="email" className="form-control" placeholder="Correo Electrónico" required="" />
                                                        </div>
                                                        <div className="col-lg-12 mt-4">
                                                            <input type="tel" className="form-control" placeholder="Teléfono" required="" />
                                                        </div>
                                                        <div className="col-lg-12 mt-4">
                                                            <input type="tel" className="form-control" placeholder="Direccion" required="" />
                                                        </div>
                                                        <div className="col-lg-12 mt-4">
                                                            <input type="tel" className="form-control" placeholder="Codigo Postal" required="" />
                                                        </div>
                                                        
                                                        {/* <div className="col-lg-12 mt-4">
                                                            <div id="my_icon" className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                                <label className="custom-control-label" for="customCheck1">I accept Terms and Conditions</label>
                                                            </div>
                                                        </div> */}
                                                        <div className="col-lg-12 mt-4 mb-3">
                                                            <Link to="#" className="btn btn-custom w-100">Registrar</Link>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(Registro);
