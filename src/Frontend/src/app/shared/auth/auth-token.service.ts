import { Injectable } from '@angular/core';
import { JwtHelper } from 'angular2-jwt';
import { Response, Headers, RequestOptions, Http } from '@angular/http';
import { LoginModel } from '../../login/login-model';
import { Observable } from 'rxjs';
import { AuthTokenModel } from './auth-token-model';
import { User } from '../../user/user';
import { AppSettings } from '../../app-settings';

@Injectable()
export class AuthTokenService {

   jwtHelper: JwtHelper = new JwtHelper();

   getTokens(data: LoginModel, grantType: string): Observable<void> {
        // data can be any since it can either be a refresh tokens or login details
        // The request for tokens must be x-www-form-urlencoded
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded'});
        let options = new RequestOptions({ headers: headers });

        Object.assign(data, {
            grant_type: grantType,
            // offline_access is required for a refresh token
            scope: ['openid+email+name+profile+roles offline_access']
        });

        return this.http.post(this.appSettings.base_url + '/connect/token', this.encodeObjectToParams(data) , options)
            .map( res => res.json())
            .map( (tokens: AuthTokenModel) => {
                let now = new Date();
                tokens.expiration_date = new Date(now.getTime() + tokens.expires_in * 1000).getTime().toString();

                let user = this.jwtHelper.decodeToken(tokens.id_token) as User;

                localStorage.setItem('id_token', JSON.stringify(tokens));
            });

    }

    deleteTokens() {
        localStorage.removeItem('id_token');
    }

     private encodeObjectToParams(obj: any): string {
        return Object.keys(obj)
            .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
            .join('&');
    }

  constructor(private http: Http, private appSettings: AppSettings) { }

}
