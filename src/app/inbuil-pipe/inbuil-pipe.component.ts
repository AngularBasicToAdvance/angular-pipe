import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inbuil-pipe',
  templateUrl: './inbuil-pipe.component.html',
  styleUrls: ['./inbuil-pipe.component.css']
})
export class InbuilPipeComponent implements OnInit {

  name = "Tekdi Technologies";
  today = new Date();
  no = 32.389;

  constructor() { }

  public Organization = 
  {
    "Name" : "Tekdi",
    "Location" : "Pune"
  }

  ngOnInit() 
  {
  }

}
