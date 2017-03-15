import {Component} from 'angular2/core';
import {StudentsComponent} from './students.component'
import {GradesComponent} from './grades.component'
import {EnrollmentComponent} from './enrollment.component'
import {NavbarComponent} from './navbar.component'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'
import {StudentCardComponent} from './studentcard.component';


@RouteConfig(
  [
        {
          path: '/enrollment/:studentId/:firstName/:lastName/:school/:grade', 
          name: 'Enrollment', 
          component: EnrollmentComponent
        },

        {
           path: '/gradehistory/:studentId/:firstName/:lastName/:school/:grade', 
           name: 'Grades', 
           component: GradesComponent
        },

        {
          path: '/*other', 
          name: 'Other', 
          redirectTo: [EnrollmentComponent]
        }
  ]
  
)
@Component({
    selector: 'my-app',
    styleUrls: ['dashboard.css'],
    directives: 
    [
        ROUTER_DIRECTIVES,  
        StudentsComponent, 
        EnrollmentComponent, 
        NavbarComponent
    ],
    template: `

      <navbar></navbar>
      <div class="container-fluid"> 
        <div class="row">          
          <div class="col-sm-3 col-md-2 sidebar">
            <students></students>     
          </div>  
          <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">       
                 <router-outlet></router-outlet>
          </div>      
         </div>
        </div>
    `
})

export class StudentappComponent { }