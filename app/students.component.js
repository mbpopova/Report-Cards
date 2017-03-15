System.register(['angular2/core', './students.service', 'angular2/http', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, students_service_1, http_1, router_1;
    var StudentsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (students_service_1_1) {
                students_service_1 = students_service_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            StudentsComponent = (function () {
                function StudentsComponent(_studentsService) {
                    var _this = this;
                    this._studentsService = _studentsService;
                    this.clickedStudentId = -1;
                    this._studentsService.getStudents().subscribe(function (students) {
                        _this.students = students;
                    });
                }
                StudentsComponent.prototype.onClick = function (_studentId) {
                    this.clickedStudentId = _studentId;
                };
                StudentsComponent.prototype.isActive = function (_studentId) {
                    this.clickedStudentId = _studentId;
                };
                StudentsComponent = __decorate([
                    core_1.Component({
                        selector: "students",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [students_service_1.StudentsService, http_1.HTTP_PROVIDERS],
                        template: "\n    \n    \n    <div class = \"row\">\n          <ul class=\"nav nav-sidebar\" *ngFor = \"#student of students\">        \n\n            <li>\n        \n                <div class=\"btn-group\"> \n                <!--<span class=\"caret\"></span>--> \n                <button type=\"button\" \n                        class=\"btn btn-default dropdown-toggle \" \n                        style = \"height:25px;   width:250px;   text-align:left;\"\n                        data-toggle=\"dropdown\" \n                        aria-haspopup=\"true\" \n                        aria-expanded=\"false\"\n                        [class.active] =  \"isActive(student.id)\"\n                        (click)=\"onClick(student.id)\"\n                             >\n                   {{student.firstName}} {{student.lastName}} \n                   \n                </button>\n                \n                <ul class=\"dropdown-menu\">\n                    <li><a [routerLink]=\"['Grades', \n                        {\n                            studentId : student.studentId, \n                            firstName : student.firstName, \n                            lastName : student.lastName,\n                            school : student.schoolName,\n                            grade : student.grade\n                        }]\">\n                        Assignments\n                        </a>\n                    </li>\n                    <li><a [routerLink]=\"['Enrollment',\n                    {\n                            studentId : student.studentId, \n                            firstName : student.firstName, \n                            lastName : student.lastName,\n                            school : student.schoolName,\n                            grade : student.grade\n                        }\n                        ]\">Enrollment Hist  </a> </li>\n                </ul>\n                </div>\n            </li>\n          </ul>\n        </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [students_service_1.StudentsService])
                ], StudentsComponent);
                return StudentsComponent;
            }());
            exports_1("StudentsComponent", StudentsComponent);
        }
    }
});
//# sourceMappingURL=students.component.js.map