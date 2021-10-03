import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User } from 'src/app/beans/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  baseUrl = 'localHost:8080/';

  constructor(private http: HttpClient) { }

  save(entity: User, endpoint: string): Observable<User> {
    return this.http.post<any>(environment.context + endpoint, entity);
  }

  getById(id: number, endpoint: string): Observable<any> {
    return this.http.get(environment.context + endpoint + id);
  }

  getByEmail(email: number, endpoint: string): Observable<any> {
    return this.http.get(environment.context + endpoint + email);
  }

  getByDisplayName(displayName: number, endpoint: string): Observable<any> {
    return this.http.get(environment.context + endpoint + displayName);
  }
}
