import { Component, OnInit} from '@angular/core';
import {Comp4Service} from './comp4.service';
import { ElecHOur } from './elechour';
declare var jQuery:any;
declare var Chartist:any;
declare var moment:any;



@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css'],
 })

export class Comp4Component implements OnInit{


 elechour: ElecHOur;
 private tsk = [];
  constructor(private _Comp4Service:Comp4Service ) { 
     
         
  }

  ngOnInit():any {

this._Comp4Service.getElecHOur()
    .subscribe(
        reselechour => {this.elechour = reselechour,
        this.drachart(this.elechour)
           
  });

  this._Comp4Service.getElecDays()
    .subscribe(
        reselechour => {this.elechour = reselechour,
        this.drachart1(this.elechour)
        
  });
}

/*
getHour(){
    console.log('clicked');
    event.preventDefault();
    jQuery("#myChart").remove();
    jQuery(".chartjs-hidden-iframe").remove();
    jQuery("#myChart-parent").append('<canvas id="myChart" style="height: 171px;" class="myChart"></canvas>');
    this._Comp4Service.getElecHOur()
    .subscribe(
        reselechour => {this.elechour = reselechour,
        this.drachart(this.elechour)
        
        
  });

}


getDays(){
    console.log('clicked');
    event.preventDefault();
    jQuery("#myChart").remove();
    jQuery(".chartjs-hidden-iframe").remove();
    jQuery("#myChart-parent").append('<canvas id="myChart" style="height: 171px;" class="myChart"></canvas>');
    this._Comp4Service.getElecDays()
    .subscribe(
        reselechour => {this.elechour = reselechour,
        this.drachart(this.elechour)
        
  });

}   
*/

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
ctx.height = 200;
  
var data = {
    labels: v_Label,
    datasets: [
        {
            data: v_Data,
            //backgroundColor:"rgba(24,166,137,0.6)",
            backgroundColor:"#18a689",
            hoverBackgroundColor:"rgba(24,166,137,0.6)"
            
        }]
};

var myDoughnutChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: {
        maintainAspectRatio: false,
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

/*below code for chartist 

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

 chartist code ends*/

}


drachart1(value){

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
    var ctx = jQuery("#myChart1");
    ctx.height = 200;
    
    var data = {
        labels: v_Label,
        datasets: [
            {
                data: v_Data,
                //backgroundColor:"rgba(24,166,137,0.6)",
                backgroundColor:"#18a689",
                hoverBackgroundColor:"rgba(24,166,137,0.6)"
                
            }]
    };

    var myDoughnutChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            maintainAspectRatio: false,
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

}

} 