import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'form-array',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.scss'
})
export class FormArrayComponent {

  topics: string[] = [];
  
  add(e, topic:HTMLInputElement){
    e.preventDefault(); 
    e.stopPropagation();  
    this.topics.push(topic.value);
    console.log(this.topics);
    topic.value = '';
  }

  delete(topic : string){
    this.topics.splice(this.topics.indexOf(topic),1);

  }

}
