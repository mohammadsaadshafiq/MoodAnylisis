import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { throwError } from "rxjs";
import { ViewChild } from "@angular/core";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { QuestionsModalComponent } from "../questions-modal/questions-modal.component";
import { MatDialog } from "@angular/material/dialog";
import { MoodApiService } from "../mood-api.service";
@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit {
  options: any = {};
  val;
  utc;
  ana = false;
  dataList = [];
  themeSubscription: any;
  pageTitle: string = "Deal Share by Contact";
  chartData: any[] = [];
  mode = "Indeterminate";
  value = 50;
  data = null;
  value1 = 0;
  value2 = 0;
  value3 = 0;
  value4 = 0;
  value5 = 0;
  IsWait;
  ans;
  model: any = {};
  constructor(
    public _MoodApiService: MoodApiService,
    private http: HttpClient,
    public dialog: MatDialog
  ) {
    this.dataSource = new MatTableDataSource();
  }
  getTooltipFormatter() {
    return (params: any) => {
      return '<div style="width:300px; height: 400px">working</div>';
    };
  }
  @ViewChild(MatTable) matTable: MatTable<any>;
  delete(): void {
    this.matTable.dataSource = this.ELEMENT_DATA;
    this.matTable.renderRows();
    this.IsWait = false;
  }

  ngOnInit() {
    const echarts: any = 0;
    this.options = {
      backgroundColor: echarts.bg,
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: "vertical",
        left: "left",
        data: this.ELEMENT_DATA,
        textStyle: {
          color: echarts.textColor
        }
      },
      series: [
        {
          name: "Moods",
          type: "pie",
          radius: "80%",
          center: ["50%", "50%"],
          data: [
            { value: this.value1, name: "Angry" },
            { value: this.value2, name: "Happy" },
            { value: this.value3, name: "Sad" },
            { value: this.value4, name: "Surprise" },
            { value: this.value5, name: "Fear" }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: echarts.itemHoverShadowColor
            }
          },
          label: {
            normal: {
              textStyle: {
                color: echarts.textColor
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: echarts.axisLineColor
              }
            }
          }
        }
      ]
    };
  }
  openDialog() {
    const dialogRef = this.dialog.open(QuestionsModalComponent, {
      height: "60%",
      width: "50%"
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result.data}`);
      this.ans = result.data;
      if (this.ans) {
        this.registerUser();
      }
    });
  }
  save() {
    this.utc = new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "/");
    let a: PeriodicElement = {
      Dairy: this.val,
      Date: this.utc
    };
    this.ELEMENT_DATA.push(a);
    this.delete();
    this.val = null;
  }
  
  concatinate() {
    this.ana = true;
  }
  registerUser() {
    // var name = "message"
    // this.IsWait =true
    // debugger;
    // if(this.ans){this._MoodApiService.addCampaign(this.ans).subscribe(x => {
    //   this.data = x ;
    //   this.value1 =this.data.Angry
    //   this.value2=this.data.Happy
    //   this.value3=this.data.Sad
    //   this.value4 =this.data.Surprise
    //   this.value5=this.data.Fear
    //   this.ELEMENT_DATA.push(this.data)
    //   this.delete()
    //   this.ngOnInit()
    // })}
    // else{
    //   alert("API Error 404")
    // }
  }
  displayedColumns: string[] = ["Dairy", "Date"];
  dataSource = this.data;
  ELEMENT_DATA: PeriodicElement[] = [];
  
//   concatinate() {
//     const map = new Map(arrays.map(({name, value}) => [name, { name, value: [] }])); 
// for (let {name, value} of arrays) map.get(name).value.push(...[value].flat());
// console.log([...map.values()]);
//   }
}
export interface PeriodicElement {
  Dairy: string;
  Date: string;
}
