import { Component, OnInit, AfterViewInit } from '@angular/core';
import {Chart} from 'chart.js';

interface ChartGradiant {body: CanvasGradient;  border: CanvasGradient; }

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, AfterViewInit {
    constructor() { }


    gradiantsTheme = {
        bluePurple: {
            body: this.gradiantGenerator('rgba(105, 56, 161, 0.8)' , 'rgba(101, 104, 252, 0.8)' ) ,
            border: this.gradiantGenerator('rgba(56, 58, 161 , 1)' , 'rgba(101, 104, 252, 1)' )
        },
        greenLime: {
            body: this.gradiantGenerator('rgba(0, 201, 51, 0.8)' , 'rgba(95, 201, 121 ,0.8)'),
            border: this.gradiantGenerator('rgba(30, 166, 66 , 1)' , 'rgba(27, 128, 79 , 1)')
        }
    };

    gradiantGenerator(color1: string , color2: string ): CanvasGradient {
        const canv = document.createElement('canvas');
        const canvas = canv.getContext('2d');
        const target = canvas.createLinearGradient(0 , 400 , 0 , 0);
        target.addColorStop(0, color1);
        target.addColorStop(1, color2);

        return target;
    }

    createChart(canvasElement: HTMLCanvasElement): Chart {
        // Get Ctx
        const ctx = canvasElement.getContext('2d');

        // create Cahrt
        Chart.defaults.global.defaultFontFamily = 'Defualt Font';
        return new Chart(ctx , {
            type: 'line',
            data: {
                labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد'],
                datasets: [{
                    label: canvasElement.getAttribute('data-chart-title'),
                    data: [0 , 20, 15 , 30, 40],
                    backgroundColor: this.gradiantsTheme.greenLime.body,
                    borderColor: this.gradiantsTheme.greenLime.border,
                    borderWidth: 4
                }]
            },
            options: {
                legend: {
                    labels: {
                        fontFamily: 'Defualt Font'
                    },
                    rtl: true
                } ,
                tooltips: {
                    mode: 'x-axis',
                    footerFontFamily: 'Defualt Font',
                    bodyFontFamily: 'Defualt Font' ,
                    titleFontFamily: 'Defualt Font',
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

    ngAfterViewInit(): void {
        const chart = this.createChart(document.getElementById('sell-chart-linear') as HTMLCanvasElement);
    }

    ngOnInit(): void {}
}
