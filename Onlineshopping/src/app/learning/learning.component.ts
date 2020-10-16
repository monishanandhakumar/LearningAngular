import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learning',
  templateUrl: './learning.component.html',
  styleUrls: ['./learning.component.css']
})
export class LearningComponent implements OnInit {

  username:string="Monisha";
  count:number;
  constructor() {
    this.count=0;
   }

  ngOnInit() {
  }

  thumbsUp()
  {
    this.count+=1;
  }
}
