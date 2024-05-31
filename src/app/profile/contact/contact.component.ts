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
     
      
    
    
   
}
