import React, {Component} from 'react';
import AUX from '../../hoc/Aux_';
import { Link } from 'react-router-dom';

class Topbar extends Component{
    
    render(){
        return(
            <AUX>
                 <div className="topbar"> 
                    <div className="container"> 
                        <div className="float-left"> 
                                              
                        </div>
                        
                        <div className="clearfix"></div>
                    </div>
                </div>
        </AUX>
        );
    }
}

export default Topbar;   