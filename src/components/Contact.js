import React from 'react';
import '../css/Contact.css';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import {form,Row, TextInput,Container , Select , Textarea , Button ,Icon ,Section} from 'react-materialize'
export default function Contact() {
  const {theme , toggle , dark} = useContext(ThemeContext)
   
    
    const handleSubmit = (e) => {
        e.preventDefault()
    }
      return (
    <Row  style={{ padding:'10px',margin:'0px',backgroundColor:theme.darkbackGroundColor , color:theme.focusedTextColor}}>
 <h3> Get in touch with us  </h3>
      <form onSubmit={handleSubmit} style={{backgroundColor: theme.darkbackGroundColor}}>
    
         <p className="links">
            <p style={{fontSize:'20px'}}><Icon left><i class="fa-solid fa-envelope"></i> </Icon>baam1772003@gmail.com    
            <br/>    
            <Icon left><i class="fa-brands fa-facebook"></i></Icon>NamKim
            <br/>
            <Icon left><i class="fa-solid fa-phone"></i></Icon>(+84)0343380437
            <br/>
            <Icon left><i class="fa-brands fa-github"></i></Icon>https://github.com/AtakiRen
            <br/>
            <Icon left><i class="fa-sharp fa-solid fa-location-dot"></i></Icon>Binh Thanh - Ho Chi Minh
           </p>

           
        </p>
      </form> 
      <form onSubmit={handleSubmit} className="formX" >
                    <Row >
                        <TextInput style={{color:theme.focusedTextColor}} icon={<Icon>face</Icon>} label="Your First Name" s={6} />
                        <TextInput style={{color:theme.focusedTextColor}} icon={<Icon>face</Icon>} label="Your Last Name" s={6} />
                    </Row>
                    <Row >
                        <TextInput style={{color:theme.focusedTextColor}} icon={<Icon>contact_phone</Icon>} label="Your Phone" s={12} />
                    </Row>
                    <Row >
                        <TextInput  style={{color:theme.focusedTextColor}} icon={<Icon>email</Icon>} label="Your Email" email validate s={12} />
                    </Row> 
                    {/* <span class="helper-text" data-error="Wrong email format" data-success="Good to go">Helper text</span> */}
                   <Row >
                   <Textarea  style={{color:theme.focusedTextColor}} icon={<Icon>mode_edit</Icon>} label="Give us a nice welcome"></Textarea>

                   </Row>
                   <Row>
                   <Button className="wave-effects wave-circle">Submit</Button>

                   </Row>
        </form>
    </Row>
  )
}
