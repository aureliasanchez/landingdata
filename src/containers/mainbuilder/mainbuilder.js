import React , { Component } from 'react';
import { Route,Switch } from 'react-router-dom';
import HomeOne from '../MainContent/Pages/HomeOne';
import HomeTwo from '../MainContent/Pages/HomeTwo';
import HomeThree from '../MainContent/Pages/HomeThree';
import HomeFour from '../MainContent/Pages/HomeFour';
import HomeFive from '../MainContent/Pages/HomeFive';
import HomeSix from '../MainContent/Pages/HomeSix';
import HomeSeven from '../MainContent/Pages/HomeSeven';
import HomeEight from '../MainContent/Pages/HomeEight';
import HomeNine from '../MainContent/Pages/HomeNine';
import HomeTen from '../MainContent/Pages/HomeTen';
import Login from '../MainContent/Pages/Login';
import PasswordForget from '../MainContent/Pages/PasswordForget';
import ContactoVentas from '../MainContent/Pages/ContactoVentas';
import ContactMessage from '../MainContent/Pages/ContactMessage';
import Registro from '../MainContent/Pages/Registro';
import FloatingButton from '../MainContent/Sections/FloatingButton';
import Contact from '../MainContent/Sections/Contact';
import Counter from '../MainContent/Sections/Counter';
import Faq from '../MainContent/Sections/Faq';
import Features from '../MainContent/Sections/Features';
import Pricing from '../MainContent/Sections/Pricing';
import QuienesSomos from '../MainContent/Sections/QuienesSomos';

class mainbuilder extends Component{
    render(){
        return(
                <Switch>  
                    
                <Route exact path="/home" component={HomeOne} />
                <Route exact path="home/contact" component={Contact} />
                <Route exact path="home/counter" component={Counter} />
                <Route exact path="home/faq" component={Faq} />
                <Route exact path="home/features" component={Features} />
                <Route exact path="home/floating-button" component={FloatingButton} />
                <Route exact path="home/pricing" component={Pricing} />
                <Route exact path="home/quienes-somos" component={QuienesSomos} />

                    <Route exact path="/index_1" component={HomeOne} />
                    <Route exact path="/index_2" component={HomeTwo} />
                    <Route exact path="/index_3" component={HomeThree} />
                    <Route exact path="/index_4" component={HomeFour} />
                    <Route exact path="/index_5" component={HomeFive} />
                    <Route exact path="/index_6" component={HomeSix} />
                    <Route exact path="/index_7" component={HomeSeven} />
                    <Route exact path="/index_8" component={HomeEight} />
                    <Route exact path="/index_9" component={HomeNine} />
                    <Route exact path="/index_10" component={HomeTen} />
                   
                    <Route path={`${process.env.PUBLIC_URL}/login`} component={Login} />
                    <Route path={`${process.env.PUBLIC_URL}/password_forget`} component={PasswordForget} />
                    <Route path={`${process.env.PUBLIC_URL}/contacto_ventas`} component={ContactoVentas} /> 
                    <Route path={`${process.env.PUBLIC_URL}/contact_message`} component={ContactMessage} />
                    <Route path={`${process.env.PUBLIC_URL}/registro`} component={Registro} /> 

                </Switch>
        );
    }
}

export default mainbuilder;