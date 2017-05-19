import { Component, OnInit } from '@angular/core';
import {ElementRef} from '@angular/core'; 
import {MyNewServiceService} from './comp1-service.service'
import { Task } from './Tasks'
declare var jQuery:any;

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})

export class MyNewCompComponent implements OnInit{
 Tasks: Task;
 private tsk = [];
  constructor(private _MyNewServiceService:MyNewServiceService ) { }

  ngOnInit():any {

this._MyNewServiceService.getTask()
    .subscribe(
        resTasks => {this.Tasks = resTasks,
        this.drachart(this.Tasks)
        
  });

}

drachart(value){

console.log(value);

var v_Data =[];
var v_Label =[];

value.forEach(e=> {
    v_Data.push(e.id)
});

value.forEach(e=> {
    v_Label.push(e.title)
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
    type: 'doughnut',
    data: data,
    options: {
        animation:{
            animateScale:true
        }
    }
});

}

} 
