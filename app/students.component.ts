import {Component} from 'angular2/core';
import {StudentsService} from './students.service';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {StudentCardComponent} from './studentcard.component';


@Component({
    selector: "students",
    directives: [ROUTER_DIRECTIVES],
    providers: [StudentsService, HTTP_PROVIDERS],
    template: `
    
    
    <div class = "row">
          <ul class="nav nav-sidebar" *ngFor = "#student of students">        

            <li>
        
                <div class="btn-group"> 
                <!--<span class="caret"></span>--> 
                <button type="button" 
                        class="btn btn-default dropdown-toggle " 
                        style = "height:25px;   width:250px;   text-align:left;"
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false"
                        [class.active] =  "isActive(student.id)"
                        (click)="onClick(student.id)"
                             >
                   {{student.firstName}} {{student.lastName}} 
                   
                </button>
                
                <ul class="dropdown-menu">
                    <li><a [routerLink]="['Grades', 
                        {
                            studentId : student.studentId, 
                            firstName : student.firstName, 
                            lastName : student.lastName,
                            school : student.schoolName,
                            grade : student.grade
                        }]">
                        Assignments
                        </a>
                    </li>
                    <li><a [routerLink]="['Enrollment',
                    {
                            studentId : student.studentId, 
                            firstName : student.firstName, 
                            lastName : student.lastName,
                            school : student.schoolName,
                            grade : student.grade
                        }
                        ]">Enrollment Hist  </a> </li>
                </ul>
                </div>
            </li>
          </ul>
        </div>
    `
  
})


export class StudentsComponent {
      clickedStudentId=-1;
      students: Student[];
      constructor(private _studentsService: StudentsService) {
       this._studentsService.getStudents().subscribe(students => {
           this.students = students;
        });
      }

      onClick(_studentId: number) {
          this.clickedStudentId=_studentId;
      }

      isActive(_studentId: number) {
          this.clickedStudentId = _studentId;
      }
}


interface Student {
   studentId: string;
   firstName: string;
   lastName: string;
   grade: number;
   schoolName: string;
}
