import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';
@Component({
  selector: 'app-subject-example',
  standalone: true,
  imports: [],
  templateUrl: './subject-example.component.html',
  styleUrl: './subject-example.component.css',
})
export class SubjectExampleComponent implements OnInit {
  subjectsdata: number | undefined;
  behaviorsubject:any;
  replaySubjetsdata:any;
  asyncsubjects:any;

  constructor() {}
  ngOnInit(): void {
    this.subjectUse();
    this.behavioursubject();
    this.replaySubjets();
    this.asyncsubject();
    this.apicallwithsubject()
  }
  // exaple of subject
  subjectUse() {
    const subjects = new Subject<number>();
    subjects.subscribe((data) => {
      this.subjectsdata = data;
     //console.log('subject example');
      console.log('subject testing data', data);
    });
    subjects.next(1);
    subjects.next(2);
  }
  // exaple of behaviour subject
  behavioursubject() {
    const behsubject = new BehaviorSubject(0);
    behsubject.subscribe((databeh) => {
      this.behaviorsubject = databeh;
      console.log('Behaviuor subject', databeh);
    });
  }
  // expale of replay subject
  replaySubjets() {
    const replaysubject = new ReplaySubject(2);
    replaysubject.subscribe((datareply) => {
      this.replaySubjetsdata = datareply
      console.log('replay subject expamle', datareply);
    });
    replaysubject.next('hi1');
    replaysubject.next('hi2');
    replaysubject.next('hi3');
    replaysubject.next('hi4');
  }
  //example of async subject async subject doesnot take the data  without comeplete methdod
  // put the completed methd then take the before next data from obserbales
  // it will one value aftre put the complted the method
  asyncsubject(){
    const asyncsubject = new AsyncSubject();
    asyncsubject.subscribe((dataAsync)=>{
      this.asyncsubjects = dataAsync;
      console.log('test data Async subject', dataAsync)
    });
     asyncsubject.next(1);
     asyncsubject.next(2);
     asyncsubject.next(3);
     asyncsubject.next(4);
     asyncsubject.complete()
  }
  // how to call api with subject
  
   
apicallwithsubject() {
  const urlSubject = new Subject<string>();
  urlSubject.pipe( 
    switchMap(url => ajax(url))) // triggers the API call
    .subscribe(response => {
    console.log('API response: with subject', response.response);
  });

  urlSubject.next('https://jsonplaceholder.typicode.com/users');
}


}


