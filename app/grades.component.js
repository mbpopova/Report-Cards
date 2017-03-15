System.register(['angular2/core', './students.service', 'angular2/http', 'angular2/router', './studentcard.component'], function(exports_1, context_1) {
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
    var core_1, students_service_1, http_1, router_1, studentcard_component_1;
    var GradesComponent;
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
            },
            function (studentcard_component_1_1) {
                studentcard_component_1 = studentcard_component_1_1;
            }],
        execute: function() {
            GradesComponent = (function () {
                function GradesComponent(_studentsService, _routeParams) {
                    this._studentsService = _studentsService;
                    this._routeParams = _routeParams;
                }
                GradesComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._studentsService.getGrades(this._routeParams.get('studentId'))
                        .subscribe(function (grades) {
                        _this.grades = grades;
                    });
                };
                GradesComponent.prototype.getFormattedDate = function (arg) {
                    return new Date(arg).toLocaleString();
                };
                GradesComponent = __decorate([
                    core_1.Component({
                        selector: "enrollment",
                        template: "\n\n    <div class=\"col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main\">    \n     <studentcard></studentcard>\n          <h3 class=\"sub-header\">Assignment History</h3>\n\n      \n         <div class=\"table-responsive\">\n            <table class=\"table table-striped\">\n              <thead>\n                <tr>\n    \n                  <th> Assignment Name:</th>\n                  <th>Due Date:</th>\n                  <th>Max Score: </th>\n                  <th>Completion Date: </th>\n                  <th>Score Earned: </th>\n                </tr>\n              </thead>\n              <tbody>\n              \n                <tr *ngFor = \"#grade of grades\">\n                  <td>{{grade.assignmentName }} </td>\n                  <td>{{getFormattedDate(grade.dueDate)}} </td>\n                  <td> {{grade.maxScore}} </td>\n                  <td> {{getFormattedDate(grade.completionDate)}} </td>\n                  <td> {{grade.scoreEarned}} </td>\n          \n                </tr>\n               </tbody>\n            </table>\n\n            </div>\n       \n    ",
                        providers: [students_service_1.StudentsService, http_1.HTTP_PROVIDERS],
                        directives: [studentcard_component_1.StudentCardComponent],
                        styleUrls: ['dashboard.css'],
                    }), 
                    __metadata('design:paramtypes', [students_service_1.StudentsService, router_1.RouteParams])
                ], GradesComponent);
                return GradesComponent;
            }());
            exports_1("GradesComponent", GradesComponent);
        }
    }
});
//# sourceMappingURL=grades.component.js.map