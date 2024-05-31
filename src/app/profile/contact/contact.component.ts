import { Component, OnInit } from '@angular/core';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  email = {
    from_name: '',
    from_email: '',
    from_subject: '',
    message: ''
  };
  //model: any = {};

  constructor(){
    // Load the SMTPJS script dynamically
    const script = document.createElement('script');
    script.src = 'https://smtpjs.com/v3/smtp.js';
    script.async = true;
    document.head.appendChild(script);
  }

  ngOnInit() {
    
     }
     sendEmail() {
      debugger;
      (window as any).Email.send({
        
        //SecureToken: "your-smtpjs-secure-token", // Generate a secure token from smtpjs.com
        //SecureToken: "C973D7AD-F097-4B95-91F4-40ABC5567812",
        Host : "smtp.elasticemail.com",
        Username : "wipewen666@fresec.com", // Replace with your Elastic Email username
        Password : "Audree@123", // Replace with your Elastic Email password
        To: 'wipewen666@fresec.com',             // Replace with the recipient's email address
        From: this.email.from_email,
        Subject: `Contact Form: ${this.email.from_name}`,
        Body: `Name: ${this.email.from_name}<br>Email: ${this.email.from_email}<br>Message: ${this.email.message}`,
        Port: 587,                             // Port for non-SSL or 587 for TLS/SSL
        UseDefaultCredentials: false,           // Do not use default credentials
        EnableSsl: false  
      }).then((message: string) => {
        debugger;
        alert('Email sent successfully');
        //this.resetForm();
        
        // Optionally, display a success message to the user
      }
      , (error: any) => {
        console.error('Failed to send email', error);
        // Optionally, display an error message to the user
      });
      
      
    }
    
   
}
