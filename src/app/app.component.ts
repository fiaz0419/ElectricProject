import { Component, OnInit } from '@angular/core';
import {ElementRef} from '@angular/core'; 
import {MyNewServiceService} from './components/comp1/comp1-service.service'
declare var jQuery:any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers :[MyNewServiceService]
})
export class AppComponent implements OnInit{
  title = 'app works!';
  constructor(){}
  ngOnInit():any {
        
  }

}
     
  
 

