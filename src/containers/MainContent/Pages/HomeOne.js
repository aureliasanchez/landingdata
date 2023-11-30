import React , {Component } from 'react';
import Services from '../Sections/Services';
import Features from '../Sections/Features';
import Counter from '../Sections/Counter';
import Pricing from '../Sections/Pricing';
import Client from '../Sections/Client';
import Faq from '../Sections/Faq';
import QuienesSomos from '../Sections/QuienesSomos';
import { Link } from 'react-router-dom';
import AUX from '../../../hoc/Aux_';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/action';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
class HomeOne extends Component{

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };
        this.openModal = this.openModal.bind(this);
    }
 
    openModal() {
        this.setState({ isOpen: true })
    }
  
    componentDidMount() {
        if(this.props.islight === true)
        {
          this.props.UpdateLight();
        }
       }
    
    render(){

        return(
            <AUX>

                <section className="home-bg-color" id="home">
                  <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 text-center text-white">
                            <h1 className="mt-5 pt-5 home-title">Plataforma #1 líder en el mercado</h1>
                            <p className="home-subtitle mx-auto pt-2">Transformando datos en estrategias inmobiliarias.</p>
                            <div className="mt-5">
                                <Link to="/src/containers/Sections/Features.js" className="btn btn-custom">Empieza Ahora</Link>
                            </div>
                           
                           
                            <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='JlvxDa7Sges' onClose={() => this.setState({ isOpen: false })} />
                                               
                            <div className=""> 
                                <img src="images/macbook.png" alt="" className="img-fluid center-block home-dashboard" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Features />
            <Counter />
            <Services />
            <Pricing />
            <Client />
            <Faq />
            <QuienesSomos />

        </AUX>
        );
    }
}


const mapStatetoProps = state => {
    return {
        islight: state.ui_red.islight
    };
}

const mapDispatchtoProps = dispatch => {
    return {
        UpdateLight: () => dispatch({ type: actionTypes.ISLIGHT, value: true })
    };
}

export default connect(mapStatetoProps, mapDispatchtoProps)(HomeOne);

