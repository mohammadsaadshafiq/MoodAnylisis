import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoodApiService {
  Url="https://api.promptapi.com/text_to_emotion";
  allAnswers=null;
  constructor(private http: HttpClient) { }
  addCampaign(value:string) {
    const headerDict = {
      'apikey': 'e2ZnOVS1SR9UI9qcPRvudgC8GhjeFYeN',
      //'apikey': 'w1ve6O9zLxJjEnAEVHpDqGXvHg1rfDTF',
      //'apikey': '6sl9H2vhAd0og41qLF1ZffxXXsoCNDSP',
      //'apiKey':'SiV9M7QLBDTcdVo4nsGbLhdDnih1QhSx'
    }
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict), 
    };
    return this.http.post(this.Url,value,requestOptions )
  }
}
