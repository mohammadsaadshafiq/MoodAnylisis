import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";
import { throwError, Observable } from "rxjs";
import { ViewChild } from "@angular/core";
import { MatTable, MatTableDataSource } from "@angular/material/table";
import { QuestionsModalComponent } from "../questions-modal/questions-modal.component";
import { MatDialog } from "@angular/material/dialog";
import { MoodApiService } from "../mood-api.service";
import { AngularFirestore } from "@angular/fire/firestore";
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject
} from "@angular/fire/database";
import { Test } from "tslint";
@Component({
  selector: "app-content",
  templateUrl: "./content.component.html",
  styleUrls: ["./content.component.css"]
})
export class ContentComponent implements OnInit {
  studentsRef: AngularFireList<any>; // Reference to Student data list, its an Observable
  studentRef: AngularFireObject<any>; // Reference to Student object, its an Observable too
  options: any = {};
  val;
  utc;
  policies;
  ar;
  hide = 'Show';
  items: Observable<any[]>;
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
  edata
  ans;
  arr =[];
  ELEMENT_DATA = [];
  model: any = {};
  constructor(
    public db: AngularFireDatabase,
    public store: AngularFirestore,
    public _MoodApiService: MoodApiService,
    private http: HttpClient,
    public dialog: MatDialog
  ) {
    this.studentsRef = db.list("Dairy");
    this.items = this.studentsRef.snapshotChanges().pipe(
      map(changes => 
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    this.dataSource = new MatTableDataSource();
  }
  getTooltipFormatter() {
    return (params: any) => {
      return '<div style="width:300px; height: 400px">working</div>';
    };
  }
  @ViewChild(MatTable) matTable: MatTable<any>;
  delete(): void {
    this.matTable.dataSource = this.items;
    this.matTable.renderRows();
    this.IsWait = false;
  }

  ngOnInit() {
    this.eChart();
    this.ans=[]
    this.IsWait=false;
    setTimeout( () => { this.delete();}, 200 );
  }

  save() {
    if (!this.val){
      alert("Please enter text")
    }
    else{
      this.utc = new Date()
      .toJSON()
      .slice(0, 10)
      .replace(/-/g, "/");
    this.studentsRef.push({
      Dairy: this.val,
      Date: this.utc,
    });
    let a = {
      Dairy: this.val,
      Date: this.utc
    };
    this.ELEMENT_DATA.push(a);
    this.delete();
    this.val = null;
    }

  }
  show() {
    if (this.ana == false){
      this.hide ='Hide'
      this.ana =true
    }
    else{
      this.hide ='Show'
      this.ana = false
    }
    
  }
  removeCart(j){
    let tru =confirm("Are you sure you want to delete it?")
    if (tru == true ){
      this.studentsRef.remove(j.key);
    }
  }
  registerUser() {
    this.IsWait= true;
    this.items.subscribe(x=>{
      this.edata =x
      this.api()
    })
  }
  api(){
    this.edata.forEach(x => {
      this.ar = x
      this.arr.push(this.ar.Dairy)
    });
    this.hide ='Hide'
    this.ana =true
    this.ans = this.arr.join();
    if(this.ans){this._MoodApiService.addCampaign(this.ans).subscribe(x => {
      this.data = x ;
      this.value1 =this.data.Angry
      this.value2=this.data.Happy
      this.value3=this.data.Sad
      this.value4 =this.data.Surprise
      this.value5=this.data.Fear
      this.ELEMENT_DATA.push(this.data)
      this.delete()
      this.ngOnInit()
    })}
    else{
      alert("API Error 404")
    }
  }
  displayedColumns: string[] = ["Dairy", "Date","delete"];
  dataSource = this.data;
  eChart() {
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
}
export interface Dairy {
  Dairy: string;
  Date: Date;
}
