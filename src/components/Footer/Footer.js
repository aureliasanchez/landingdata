import React, {Component} from 'react';
import AUX from '../../hoc/Aux_';
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitterSquare, FaLinkedin, FaInstagramSquare, FaTiktok } from 'react-icons/fa';

class Footer extends Component{
    
    constructor(){
        super();
        this.state={ email:'',name:'',subject:'',message:'',email_err:'',name_err:'',subject_err:'',message_err:'',return_msg:'',flag : false }

         this.handleChangeEmail = this.handleChangeEmail.bind(this);
         this.handleChangeName = this.handleChangeName.bind(this);
         this.handleChangeSubject = this.handleChangeSubject.bind(this);
         this.handleChangeMessage = this.handleChangeMessage.bind(this);
         this.handleSubmit1 = this.handleSubmit1.bind(this);
         
    }

    handleChangeEmail(e){
        this.setState({email:  e.target.value});
        var EmailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(e.target.value === '') 
          this.setState({email_err: 'Required Field'});
        else if(EmailReg.test(e.target.value)) 
          this.setState({email_err: ''});
        else 
          this.setState({email_err: 'Enter Valid Email'});
      }

      handleChangeName(e){
        this.setState({name:  e.target.value});
          if(e.target.value === '') 
            this.setState({name_err: 'Required Field'});
          else 
            this.setState({name_err: ''});
      }
      handleChangeSubject(e){
        this.setState({subject:  e.target.value});
          if(e.target.value === '') 
            this.setState({subject_err: 'Required Field'});
          else 
            this.setState({subject_err: ''});
      }
      handleChangeMessage(e){
        this.setState({message:  e.target.value});
          if(e.target.message === '') 
            this.setState({message_err: 'Required Field'});
          else 
            this.setState({message_err: ''});
      }

      handleSubmit1()
      {
          if(this.state.name === '') 
              this.setState({name_err: 'Required Field'});
          if(this.state.email === '')
              this.setState({email_err: 'Required Field'});
          if(this.state.subject === '')
             this.setState({subject_err: 'Required Field'});
         if(this.state.message === '')
             this.setState({message_err: 'Required Field'});

             if(this.state.name === '' || this.state.email === '' || this.state.subject === '' || this.state.message === '')
             {
                this.setState({return_msg: 'Fill All First', flag: true });
             }
             else
             {
                this.setState({return_msg: 'Success.', flag: true});
             }
      }
    
    render(){
        return(
            <AUX>
              <section className="pt-5 bg-dark" id="contact" style={{paddingTop: '30px', paddingBottom: '0px'}}>
                    <div className="row mt-5 pt-5 pb-2">
                  <div className="col-md-6">
                    <div className="text-white pl-4 pr-4">
                      <p className="copyright-desc pb-0">2023 DatAlpine. Todos los derechos reservados</p>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-end align-items-center">
                    {/* Facebook */}
                    <a href="https://www.facebook.com/profile.php?id=61552173002247" target="_blank" rel="noopener noreferrer" className="ml-2">
                      <FaFacebookSquare size={20} color="white" />
                    </a>

                    {/* Twitter */}
                    <a href="https://twitter.com/DatAlpine" target="_blank" rel="noopener noreferrer" className="ml-2">
                      <FaTwitterSquare size={20} color="white" />
                    </a>

                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/company/datalpine/" target="_blank" rel="noopener noreferrer" className="ml-2">
                      <FaLinkedin size={20} color="white" />
                    </a>

                    {/* Instagram */}
                    <a href="https://www.instagram.com/DatAlpine/?fbclid=IwAR0B-HYWqGM5of0fBiCHFVWD7Uysb-punr5kVR8JHI11qobuvOzIMdJ6w14" target="_blank" rel="noopener noreferrer" className="ml-2">
                      <FaInstagramSquare size={20} color="white" />
                    </a>

                    {/* TikTok */}
                    <a href="https://www.tiktok.com/@datalpine?_t=8gsoksxpqdz&_r=1" target="_blank" rel="noopener noreferrer" className="ml-2">
                      <FaTiktok size={20} color="white" />
                    </a>
                  </div>
                </div>          
              </section> 
            </AUX>
        );
    }
}

export default Footer;   