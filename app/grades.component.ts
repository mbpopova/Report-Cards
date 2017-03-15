import {Component} from 'angular2/core';
import {StudentsService} from './students.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {RouteParams} from 'angular2/router';
import {StudentCardComponent} from './studentcard.component';

@Component({
    selector: "enrollment",
    template: `

    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">    
     <studentcard></studentcard>
        <h3 class="sub-header">Assignment History</h3>      
         <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>    
                  <th> Assignment Name:</th>
                  <th>Due Date:</th>
                  <th>Max Score: </th>
                  <th>Completion Date: </th>
                  <th>Score Earned: </th>
                </tr>
              </thead>
              <tbody>              
                <tr *ngFor = "#grade of grades">
                  <td>{{grade.assignmentName }} </td>
                  <td>{{getFormattedDate(grade.dueDate)}} </td>
                  <td> {{grade.maxScore}} </td>
                  <td> {{getFormattedDate(grade.completionDate)}} </td>
                  <td> {{grade.scoreEarned}} </td>          
                </tr>
               </tbody>
            </table>
          </div>
       
    `,
    providers: [StudentsService, HTTP_PROVIDERS],
    directives: [StudentCardComponent],
    styleUrls: ['dashboard.css'],
})

export class GradesComponent {
      grades : Grades[];
      
      constructor(
          private _studentsService: StudentsService, 
          private _routeParams : RouteParams) {     
      }

      ngOnInit() {
            this._studentsService.getGrades(this._routeParams.get('studentId'))
       .subscribe(grades => {
           this.grades = grades;
        });
  
      }

       getFormattedDate (arg: string): string {
         return new Date(arg).toLocaleString();
      }
      
}

interface Grades {
  assignmentName: string,
  dueDate: string,
  maxScore: number;
  completionDate: string;
  scoreEarned: number;
}