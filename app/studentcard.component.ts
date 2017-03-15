import {Component} from 'angular2/core';
import {RouteParams} from 'angular2/router';

@Component({
    selector: "studentcard",
    template: 
    `
     <h1 class="page-header">{{lastName}}, {{firstName}}</h1>
          <div class="row placeholders"> 
            <div class="col-xs-6 col-sm-3 placeholder">             
              <img src="./images/Student1{{studentId}}.jpg"
                        width="100" height="100" 
                        class="img-responsive" 
                                  />
              <div> <span class="text-muted">{{school}} </span></div>
              <div> <span class="text-muted">{{grade}} </span></div>
            </div>
          </div>
    `,
    styleUrls: ['dashboard.css'],


})

export class StudentCardComponent {
    firstName: string;
    lastName: string;
    studentId: string;
    school: string;
    grade: string;

    constructor (
          private _routeParams : RouteParams) {}

    ngOnInit() {
      this.firstName =  this._routeParams.get('firstName');
      this.lastName =  this._routeParams.get('lastName');
      this.studentId =  this._routeParams.get('studentId');
      this.school = this._routeParams.get('school');
      this.grade = this._routeParams.get('grade');
    }
}