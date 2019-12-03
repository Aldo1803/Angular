import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { GLOBAL } from './global';

import { Income } from '../models/income';
import { Expenditure } from '../models/expenditure';


@Injectable()
export class UserService {
  public url: string;
  public token;
  public identity;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  saving(user: User): Observable<any> {
    const params = JSON.stringify(user);
    const _headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());
    return this._http.put(this.url + 'add/' + user._id, params, {
      headers: _headers
    });
  }

  removing(user: User): Observable<any> {
    const params = JSON.stringify(user);
    const _headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());
    return this._http.put(this.url + 'substract/' + user._id, params, {
      headers: _headers
    });
  }

  getIncomes(id): Observable<any> {
    const _headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());
    return this._http.get(this.url + 'incomes/' + id, {
      headers: _headers
    });
  }

  getExpenditures(id): Observable<any> {
    const _headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());
    return this._http.get(this.url + 'expenditures/' + id, {
      headers: _headers
    });
  }

  newExpenditure(expenditure: Expenditure): Observable<any> {
    const params = JSON.stringify(expenditure);
    const _headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());

    return this._http.post(this.url + 'expenditure', params, {
      headers: _headers
    });
  }
  newIncome(income: Income): Observable<any> {
    const params = JSON.stringify(income);
    const _headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());

    return this._http.post(this.url + 'income', params, {
      headers: _headers
    });
  }
  addIncome(user: User): Observable<any> {
    const params = JSON.stringify(user);
    const _headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());

    return this._http.put(this.url + 'newincome/' + user._id, params, {
      headers: _headers
    });

  }
  addExpenditure(user: User): Observable<any> {
    const params = JSON.stringify(user);
    const _headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', this.getToken());

    return this._http.put(this.url + 'newexpenditure/' + user._id, params, {
      headers: _headers
    });
  }

  register(user: User): Observable<any> {
    const params = JSON.stringify(user);
    const _headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'register', params, {
      headers: _headers
    });
  }

  login(user: User, gettoken = null): Observable<any> {
    if (gettoken != null) {
      user.gettoken = gettoken;
    }

    const params = JSON.stringify(user);
    const _headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this._http.post(this.url + 'login', params, { headers: _headers });
  }

  getIdentity() {
    const identity = JSON.parse(localStorage.getItem('identity'));
    if (this.identity !== 'undefined') {
      this.identity = identity;
    } else {
      this.identity = null;
    }

    return this.identity;
  }

  getToken() {
    const token = localStorage.getItem('token');

    if (token !== 'undefined ') {
      this.token = token;
    } else {
      this.token = null;
    }
    return this.token;
  }
  getSaving() {
    const saving = this.getIdentity().saving;

    return saving;
  }
}
