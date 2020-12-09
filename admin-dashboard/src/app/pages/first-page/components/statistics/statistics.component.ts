import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, AfterViewInit {
    constructor() { }


    ngAfterViewInit(): void {
        const canvas = <HTMLCanvasElement> document.getElementById("chart");
        const ctx = canvas.getContext('2d');

        var gradient = ctx.createLinearGradient(0, 400, 0, 0);
        gradient.addColorStop(0, 'rgba(105, 56, 161, 0.8)');
        gradient.addColorStop(1, 'rgba(101, 104, 252, 0.8)');

        var gradient2 = ctx.createLinearGradient(0, 400, 0, 0);
        gradient2.addColorStop(1, 'rgba(56, 58, 161 , 1)');
        gradient2.addColorStop(0, 'rgba(101, 104, 252, 1)');

        const chartPlaceHolder = new Chart(ctx , {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
                datasets: [{
                    label: '# of Votes',
                    data: [0 , 20, 15 , 30, 40],
                    backgroundColor: gradient,
                    borderColor: gradient2,
                    borderWidth: 4
                }]
            },
            options: {
                tooltips: {
                    mode: 'x-axis'
                },
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero: false
                        } ,
                        gridLines: {
                            display: true
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: false
                        }
                    }]
                }
            }
        });
    }

    ngOnInit(): void {}
}
