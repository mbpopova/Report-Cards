System.register(['angular2/core', './students.component', './grades.component', './enrollment.component', './navbar.component', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, students_component_1, grades_component_1, enrollment_component_1, navbar_component_1, router_1;
    var StudentappComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (students_component_1_1) {
                students_component_1 = students_component_1_1;
            },
            function (grades_component_1_1) {
                grades_component_1 = grades_component_1_1;
            },
            function (enrollment_component_1_1) {
                enrollment_component_1 = enrollment_component_1_1;
            },
            function (navbar_component_1_1) {
                navbar_component_1 = navbar_component_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            StudentappComponent = (function () {
                function StudentappComponent() {
                }
                StudentappComponent = __decorate([
                    router_1.RouteConfig([
                        {
                            path: '/enrollment/:studentId/:firstName/:lastName/:school/:grade',
                            name: 'Enrollment',
                            component: enrollment_component_1.EnrollmentComponent
                        },
                        {
                            path: '/gradehistory/:studentId/:firstName/:lastName/:school/:grade',
                            name: 'Grades',
                            component: grades_component_1.GradesComponent
                        },
                        {
                            path: '/*other',
                            name: 'Other',
                            redirectTo: [StudentappComponent]
                        }
                    ]),
                    core_1.Component({
                        selector: 'my-app',
                        styleUrls: ['dashboard.css'],
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            students_component_1.StudentsComponent,
                            enrollment_component_1.EnrollmentComponent,
                            navbar_component_1.NavbarComponent
                        ],
                        template: "\n\n      <navbar></navbar>\n      <div class=\"container-fluid\"> \n        <div class=\"row\">          \n          <div class=\"col-sm-3 col-md-2 sidebar\">\n            <students></students>     \n          </div>  \n          <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">       \n                 <router-outlet></router-outlet>\n          </div>      \n          </div>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], StudentappComponent);
                return StudentappComponent;
            }());
            exports_1("StudentappComponent", StudentappComponent);
        }
    }
});
//# sourceMappingURL=studentapp.component.js.map