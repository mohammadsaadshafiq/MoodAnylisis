import { Component, OnInit } from "@angular/core";
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {ViewChild} from '@angular/core';
import { MatTable, MatTableDataSource } from "@angular/material/table";
@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"],
})
export class ContentComponent implements OnInit {
  options: any = {};
  themeSubscription: any;
  pageTitle: string = 'Deal Share by Contact';
  chartData: any[] = [];
  mode = 'Indeterminate';
  value = 50;
  data=null;
  value1=0;
  value2=0
  value3=0
  value4=0
  value5=0
  IsWait
  Url="https://api.promptapi.com/text_to_emotion";
   model={};
  constructor(private http: HttpClient) {
    this.dataSource = new MatTableDataSource();
  }
  getTooltipFormatter() {
    return (params:any) => {
          return '<div style="width:300px; height: 400px">working</div>'
        };
  }
  @ViewChild(MatTable) matTable: MatTable<any>;
  delete(): void {
    this.matTable.dataSource = this.ELEMENT_DATA;
    this.matTable.renderRows();
    this.IsWait =false
  }
  
  ngOnInit() {
    const echarts: any = 0;
      this.options = {
        backgroundColor: echarts.bg,
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.ELEMENT_DATA,
          textStyle: {
            color: echarts.textColor,
          },
        },
        series: [
          {
            name: 'Moods',
            type: 'pie',
            radius: '80%',
            center: ['50%', '50%'],
            data: [
              { value: this.value1, name: 'Angry' },
              { value: this.value2, name: 'Happy' },
              { value: this.value3, name: 'Sad' },
              { value: this.value4, name: 'Surprise' },
              { value: this.value5, name: 'Fear' },
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: echarts.itemHoverShadowColor,
              },
            },
            label: {
              normal: {
                textStyle: {
                  color: echarts.textColor,
                },
              },
            },
            labelLine: {
              normal: {
                lineStyle: {
                  color: echarts.axisLineColor,
                },
              },
            },
          },
        ],
      };
  }
  registerUser(form: NgForm) {
    var name = "message"
    let value=form.value[name];
    this.IsWait =true
    this.addCampaign(value).subscribe(x => {
      this.data = x ;
      this.value1 =this.data.Angry 
      this.value2=this.data.Happy 
      this.value3=this.data.Sad 
      this.value4 =this.data.Surprise
      this.value5=this.data.Fear 
      this.ELEMENT_DATA.push(this.data)
      this.delete()
      this.ngOnInit()
    })
  }
  addCampaign(value:string) {
    const headerDict = {
      //'apikey': 'e2ZnOVS1SR9UI9qcPRvudgC8GhjeFYeN',
      //'apikey': 'w1ve6O9zLxJjEnAEVHpDqGXvHg1rfDTF',
      'apikey': '6sl9H2vhAd0og41qLF1ZffxXXsoCNDSP',
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    return this.http.post(this.Url,value,requestOptions )
  }
  
  displayedColumns: string[] = ['Angry', 'Happy', 'Sad', 'Surprise','Fear'];
  dataSource = this.data;
  ELEMENT_DATA: PeriodicElement[] = [];
  }
  export interface PeriodicElement {
    Angry: number;
    Sad: number;
    Happy: number;
    Fear: number;
    Surprise: number;
  }
  