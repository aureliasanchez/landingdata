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
import Demo from '../MainContent/Pages/Demo';

import Client from '../MainContent/Sections/Client';
import Contact from '../MainContent/Sections/Contact';
import Counter from '../MainContent/Sections/Counter';
import Features from '../MainContent/Sections/Features';
import Pricing from '../MainContent/Sections/Pricing';
import QuienesSomos from '../MainContent/Sections/QuienesSomos';
import Services from '../MainContent/Sections/Services';

class mainbuilder extends Component{
    render(){
        return(
                <Switch>
                    <Route exact path="/en" component={HomeOne} /> {/* Agregamos esta línea */}

                    <Route exact path="/en" component={Client} />
                    <Route exact path="/en" component={Contact} />
                    <Route exact path="/en" component={Counter} />
                    <Route exact path="/en" component={Features} />
                    <Route exact path="/en" component={FloatingButton} />
                    <Route exact path="/en" component={Pricing} />
                    <Route exact path="/en" component={QuienesSomos} />
                    <Route exact path="/en" component={Services} />

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
                    <Route path={`${process.env.PUBLIC_URL}/demo`} component={Demo} />  

                </Switch>
        );
    }
}


export default mainbuilder;