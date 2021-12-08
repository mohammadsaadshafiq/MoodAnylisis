export class Questions {
 constructor(){}
  questions= {
    1:"What has been your greatest accomplishment?",
    2:"What has been your greatest failure?",
    3:"What is your biggest fear?",
    4:"What is your favorite hobby?",
    5:"What would you change about yourself if you could?",
    6:"What really makes you angry?",
 };
 check;
 cur=0;
 next(cur?:number){
   this.check = this.questions[this.cur+1]
   if(this.check){  
       this.cur=this.cur+1
       const value= this.questions[this.cur]
       return value;
  }
   else{
       return 'Submit for the result' 
  }
 }
 previous(cur:number){
    this.check = this.questions[this.cur-1]
    if(this.check){  
        this.cur=this.cur-1
        const value= this.questions[this.cur]
        return value;
      }
   else{
      alert("No Previous Question")
      return 'Click Next To Start' 
   }
 }
 getAll(){
    for (const key of Object.keys(this.questions)) {
        const value = this.questions[key]
        return value
    }
 }
}
