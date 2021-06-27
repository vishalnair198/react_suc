import React, {Component} from 'react';
import emailjs from 'emailjs-com';
import './joinus.css';
import hands from '../../assets/handes.png';
import horizone from '../../horizone.png';
import rbc from '../../assets/rbc.png';
import wings from '../../assets/wings.png';


function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_69dmsge', 'template_vzun5ao', e.target, 'user_CbBx0n49Mq2OsKNdERjiu')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

 class joinus extends Component  {
     
   render(){
    return (
        <div className="joinus">
           <div class="container">
           <img src='WC.png' alt="" class="d"></img>
           <img src={hands} alt="" class="hand"></img>
           <img src={horizone} alt="" class="hor"></img>
           <img src={rbc} alt="" class="rbc"></img>
           <img src={wings} alt="" class="wings"></img>
            <form onSubmit={sendEmail} class="rcform">
            
            <div class="formcontrol">
                <div class="tag">Full Name</div>
                <input type="text" name="name"/>
            </div>
            <div class="formcontrol">
                <div class="tag">Contact number</div>
                <input type="text" name="contact" />
            </div>
            <div class="formcontrol">
                <div class="tag">Email</div>
                <input type="text" name="email"/>
            </div>
            <div class="formcontrol">
                <div class="tag">Date of Birth</div>
                <input type="text" name="dob"/>
            </div>
            <div class="formcontrol">
                <div class="tag">Address</div>
                <input type="text" name="address"/>
            </div>
            <div class="formcontrol">
                <div class="tag">Blood group</div>
                <input type="text" name="blood"/>
            </div>
            <div class="formcontrol">
                <div class="tag">college name</div>
                <input type="text" name="college"/>
            </div>
            <div class="formcontrol">
                <div class="tag">Branch</div>
                <input type="text" name="branch"/>
            </div>
            <div class="formcontrol">
                <div class="tag">member of rcpu before yes/no</div>
                <input type="text" name="member"/>
            </div>

            <div class="formcontrol">
                <div class="tag">payment date</div>
                <input type="text" name="pdate"/>
            </div>
            <input type="submit" value="Send" />
         
        </form>
    </div>
           
        
        </div>
       
    );
  }
}

export default joinus;