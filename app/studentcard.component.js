System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var StudentCardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            StudentCardComponent = (function () {
                function StudentCardComponent(_routeParams) {
                    this._routeParams = _routeParams;
                }
                StudentCardComponent.prototype.ngOnInit = function () {
                    this.firstName = this._routeParams.get('firstName');
                    this.lastName = this._routeParams.get('lastName');
                    this.studentId = this._routeParams.get('studentId');
                    this.school = this._routeParams.get('school');
                    this.grade = this._routeParams.get('grade');
                };
                StudentCardComponent = __decorate([
                    core_1.Component({
                        selector: "studentcard",
                        template: "\n     <h1 class=\"page-header\">{{lastName}}, {{firstName}}</h1>\n          <div class=\"row placeholders\"> \n            <div class=\"col-xs-6 col-sm-3 placeholder\">             \n              <img src=\"./images/Student1{{studentId}}.jpg\"\n                        width=\"100\" height=\"100\" \n                        class=\"img-responsive\" \n                                  />\n              <div> <span class=\"text-muted\">{{school}} </span></div>\n              <div> <span class=\"text-muted\">{{grade}} </span></div>\n            </div>\n          </div>\n    ",
                        styleUrls: ['dashboard.css'],
                    }), 
                    __metadata('design:paramtypes', [router_1.RouteParams])
                ], StudentCardComponent);
                return StudentCardComponent;
            }());
            exports_1("StudentCardComponent", StudentCardComponent);
        }
    }
});
//# sourceMappingURL=studentcard.component.js.map