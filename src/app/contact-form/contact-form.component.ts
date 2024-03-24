import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'contact-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {

  contactMethod=[
    {id:1 , value:"phone"},
    {id:2, value:"email"}
  ]

  log(event){
    console.log(event)
  }

  onSubmit(event){
    console.log(event);
  }

}
