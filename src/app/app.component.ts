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

    var cpplugin = jQuery(".cpgauge");
     cpplugin.cp_gauge({

        design: {
            needleColor: "blue",
            lowerBoxVisible: "false",
            lowerBoxHeight: 25,
            lowerBoxBackground: "#AAA",
            lowerBoxTextcolor: "#FFF",
            lowerBoxTextSize: 13,
            upperBoxVisible: "fasle",
            upperBoxText: "80",
            upperBoxTextColor: "#777",
            upperBoxTextSize: 30,

        },

        size: {
            rangeSize: 25,
            minorTick: 10,
        },

        data: {
            value: '80',
            dataRange: [{
                from: 0,
                to: 60,
                color: "#9CC96B"
            }, {
                from: 60,
                to: 85,
                color: "#EFAD4D"
            }, {
                from: 85,
                to: 100,
                color: "#E85C63"
            }],
            textBox: [{
                    lowerBoxText: "Target is 60"
                },
                {
                lowerBoxText:"Value is 80"
                },

            ]
        }
    });
        
  }

}
     
  
 

