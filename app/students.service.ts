import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map';
import {Injectable} from 'angular2/core';


@Injectable()
export class StudentsService {
    url: string = "http://interviewapi20170221095727.azurewebsites.net";
    creds = btoa("authentica:@uth3nt1c@");

    headers: Headers;
        
    constructor(private _http: Http) {
        this.headers = new Headers();
        this.headers.append('Authorization', 'Basic ' +   this.creds);
    }


   getStudents() {
        return this._http.get(
               this.url + "/api/Student/All",  {headers: this.headers})
                .map(res => res.json());
    }

    getEnrollment(_studentId: string) {
        return this._http.get(
               this.url + "/api/Student/EnrollmentHistory?StudentId=" + _studentId, 
            {headers: this.headers})
                .map(res => res.json());
    }

        getGrades(_studentId: string) {
        return this._http.get(
               this.url + "/api/Student/AssignmentHistory?StudentId=" + _studentId,  {headers: this.headers})
                .map(res => res.json());
    }

}