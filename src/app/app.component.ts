import { Component, OnInit } from '@angular/core';
import {ElementRef} from '@angular/core'; 
import {Comp4Service} from './components/comp4/comp4.service'
declare var jQuery:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers :[Comp4Service]
})
export class AppComponent implements OnInit{
  title = 'app works!';
  constructor(){}
  ngOnInit():any {
        
  }

}
     
  
 

