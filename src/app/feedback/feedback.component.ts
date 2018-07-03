import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';
import { Router } from '@angular/router';
import { FeedbackService } from '../services/feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  response;
  feedback;

  constructor(private feed:FeedbackService, private router:Router) { }

  ngOnInit() {  
    
  }

  submit(f){ 
    this.feedback ={
     name:f.value.fullName,
     subject:f.value.subject,
     comment:f.value.comment
   }

   this.feed.saveFeedBack(this.feedback);
   this.router.navigate([""]);
    
  }

}
