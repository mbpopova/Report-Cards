import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';


@Injectable()
export class StudentsService {
    constructor(private _http: Http) {
    }


   getStudents() {
        var headers = new Headers();
        headers.append('Authorization', 'Basic ' +   btoa('authentica:@uth3nt1c@'));
        return this._http.get("http://interviewapi20170221095727.azurewebsites.net/api/Student/All", {headers})
                .map(res => res.json());
    }

    getEnrollment(studentId: string) {
     //   console.log(studentId);
        var headers = new Headers();
        headers.append('Authorization', 'Basic ' +   btoa('authentica:@uth3nt1c@'));
        return this._http.get("http://interviewapi20170221095727.azurewebsites.net/api/Student/EnrollmentHistory?StudentId=" + studentId, {headers})
                .map(res => res.json());
    }

        getGrades(studentId: string) {
     //   console.log(studentId);
        var headers = new Headers();
        headers.append('Authorization', 'Basic ' +   btoa('authentica:@uth3nt1c@'));
        return this._http.get("http://interviewapi20170221095727.azurewebsites.net/api/Student/AssignmentHistory?StudentId=" + studentId, {headers})
                .map(res => res.json());
    }


}