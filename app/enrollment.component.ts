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
        <h3 class="sub-header">Enrollment History</h3>
         <div class="table-responsive">
            <table class="table table-striped">
              <thead>
                <tr>    
                  <th>Entry Date</th>
                  <th>Exit Date</th>
                  <th>Exit Reason </th>
                </tr>
              </thead>
              <tbody>              
                <tr *ngFor = "#enrollment of enrollments">
                  <td>{{getFormattedDate(enrollment.entryDate)}}</td>
                  <td>{{getFormattedDate(enrollment.exitDate)}} </td>
                  <td>{{enrollment.exitReason}}</td>          
                </tr>
               </tbody>
             </table>
            </div>
    
    `,
    providers: [StudentsService, HTTP_PROVIDERS],
    directives: [StudentCardComponent],
    styleUrls: ['dashboard.css'],
})

export class EnrollmentComponent {
      enrollments : Enrollment[]; 
    
      
      constructor(
          private _studentsService: StudentsService, 
          private _routeParams : RouteParams) {
         
     
      }

      ngOnInit() {
            this._studentsService.getEnrollment(this._routeParams.get('studentId'))
       .subscribe(enrollments => {
           this.enrollments = enrollments;
        });
  
      }

      getFormattedDate (arg: string): string {
         return new Date(arg).toLocaleString();
      }
      
}

interface Enrollment {
    entryDate: Date; 
    exitDate: Date;
    exitReason: string;
}