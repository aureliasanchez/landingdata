import React, { Component } from 'react';
import Services from '../Sections/Services';
import Features from '../Sections/Features';
import Counter from '../Sections/Counter';
import Pricing from '../Sections/Pricing';
import Client from '../Sections/Client';
import Faq from '../Sections/Faq';
import { Link } from 'react-router-dom';
import AUX from '../../../hoc/Aux_';
import { connect } from 'react-redux';
import * as actionTypes from '../../../store/action';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';



class HomeSix extends Component {


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
        if (this.props.islight === true) {
            this.props.UpdateLight();
        }
    }

    render() {


        return (
            <AUX>

                <section className="home-fullscreen" id="home">
                    <div className="bg-overlay"></div>
                    <div className="home-center">
                        <div className="home-desc-center">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 text-center text-white">
                                        <h1 className="mt-5 pt-5 home-title">We help startups launch their awesome website</h1>
                                        <p className="home-subtitle mx-auto pt-2">It is a long established fact that a reader will be of a page when looking at its layout.</p>
                                        <div className="mt-5">
                                            <Link to="#" className="btn btn-custom">Free Signup</Link>
                                        </div>



                                        <span onClick={this.openModal} className="pt-4 video-play-icon watch-overview d-inline-block text-white">Watch the overview &nbsp;<i className="mdi mdi-chevron-right"></i></span>


                                        <ModalVideo channel='youtube' videoId='JlvxDa7Sges' isOpen={this.state.isOpen} onClose={() => this.setState({ isOpen: false })} />



                                    </div>
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

export default connect(mapStatetoProps, mapDispatchtoProps)(HomeSix);

