import { Component, OnInit } from '@angular/core';
import {ElementRef} from '@angular/core'; 
import {Comp4Service} from './comp4.service';
import { ElecHOur } from './elechour';
declare var jQuery:any;
declare var Chartist:any;
declare var moment:any;



@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})

export class Comp4Component implements OnInit{
 elechour: ElecHOur;
 private tsk = [];
  constructor(private _Comp4Service:Comp4Service ) { }

  ngOnInit():any {

this._Comp4Service.getElecHOur()
    .subscribe(
        reselechour => {this.elechour = reselechour,
        this.drachart(this.elechour)
        
  });

}

drachart(value){

console.log(value);

var v_Data =[];
var v_Label =[];

value.forEach(e=> {
    v_Data.push(e.value)
});

value.forEach(e=> {
    v_Label.push(moment(e.time).format('LT'))
});


var Chart = require('chart.js');
var ctx = jQuery("#myChart");
  
var data = {
    labels: v_Label,
    datasets: [
        {
            data: v_Data,
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
};

var myDoughnutChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        animation:{
            animateScale:true
        },
        scales: {
            yAxes: [{
                ticks: {
                    min: 0,
                   
                }
            }]
        }
    }
});

/*below code for chartist */

var datachartist = {
  labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10','W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10','W1', 'W2', 'W3', 'W4'],
  series: [
    [1, 2, 4, 8, 6, 2, 1, 4, 6, 2,1, 2, 4, 8, 6, 2, 1, 4, 6, 2,1, 2, 4, 8]
  ]
};

var options = {
    low: 0,
};

new Chartist.Bar('.ct-chart', datachartist, options);

jQuery('.ct-chart').animate({
  opacity: {
    dur: 1000,
    from: 0,
    to: 1
  },
  x1: {
    dur: '1000ms',
    from: 100,
    to: 200,
    easing: 'easeOutQuart'
  },
  y1: {
    dur: '2s',
    from: 0,
    to: 100
  }
});

jQuery('.datepicker').datepicker();

/* chartist code ends*/

}

} 