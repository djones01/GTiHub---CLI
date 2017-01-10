import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { LoginModel } from '../../login/login-model';
import { User } from '../../user/user';
import { AuthTokenService } from './auth-token.service';

@Injectable()
export class UserAuthService {
    constructor(private http: Http, private authTokens: AuthTokenService) { }

    register(user: User): Observable<User> {
        return this.http.post('api/account/', user)
            .catch(res => Observable.throw(res.json()));
    }

    login(user: LoginModel) {
        return this.authTokens.getTokens(user, 'password').catch(res => Observable.throw(res.json()));
    }

    logout() {
        // remove user from local storage to log user out
        this.authTokens.deleteTokens();
    }
}