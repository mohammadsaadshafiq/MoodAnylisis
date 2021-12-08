import { Component, OnInit, Optional, Inject } from '@angular/core';
import {Questions} from './questions' 
import {MoodApiService }from'../mood-api.service'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-questions-modal',
  templateUrl: './questions-modal.component.html',
  styleUrls: ['./questions-modal.component.css']
})
export class QuestionsModalComponent implements OnInit {
  value;
  que;
  answers=[]
  cur=null
  local_data
  action:string;
  end=false;
  constructor(
    public _questions:Questions,
    public dialogRef: MatDialogRef<QuestionsModalComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any) {
    this.local_data = {...data};
    this.action = this.local_data.action;
  }


  ngOnInit(): void {
  this.value=null
  this.que=null
  this.answers=[]
  this.cur=0;
  this.local_data=null
  this.getVal();
  }
  doAction(){
    this.dialogRef.close({event:this.action,data:this.local_data});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
  getVal(){
    this.que=this._questions.next()
  }
  next(){
    if(!this.value){
      alert("Please Answer")
    }
    if (this.value){
        this.que=this._questions.next(this.cur);
        this.answers.push(this.value);
        this.value=null
    }
    if (this.que =='Submit for the result'){
      this.end=true;
    }
  }
  prev(){     
  this.que=this._questions.previous(this.cur);
  this.end =false
  }
  done(){
    if(this.answers){
      this.local_data = this.answers.join()
      this.doAction()
    }
    else{
      alert ("Please fill the questions again")
      this.closeDialog();
    }
  }
}
