import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { AuthHttp } from 'angular2-jwt';
import { Observable } from "rxjs/Rx";
import { AppSettings } from '../../app-settings';
import { AlertService } from '../alert/alert.service';

@Injectable()
export class DataService {

    private api_url: string;
    private headers: Headers;

    /*constructor(private authHttp: AuthHttp, private appSettings: AppSettings) {
        this.api_url = this.appSettings.api_url;
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json");
        this.headers.append("Accept", "application/json");
    }*/

    constructor(private _http: Http, private appSettings: AppSettings, private alertService: AlertService) {
        this.api_url = this.appSettings.api_url;
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json");
        this.headers.append("Accept", "application/json");
    }

    GetAll(action: string): Observable<any> {
        return this._http.get(this.api_url + action)
            .map(res => res.json())
            .catch((error: any) => this.handleError(error));
    }

    Get(action: string, id: number): Observable<any> {
        return this._http.get(this.api_url + action + "/" + id)
            .map(res => res.json())
            .catch((error: any) => this.handleError(error));
    }

    Add(action: string, itemToAdd: any): Observable<any> {
        return this._http.post(this.api_url + action, JSON.stringify(itemToAdd), { headers: this.headers })
            .map(res => res.json())
            .catch((error: any) => this.handleError(error));
    }

    Update(action: string, id: number, itemToUpdate: any): Observable<any> {
        return this._http
            .put(this.api_url + action + "/" + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .catch((error: any) => this.handleError(error));
    }

    Delete(action: string, id: number): Observable<any> {
        return this._http.delete(this.api_url + action + "/" + id)
            .catch((error: any) => this.handleError(error));
    }

     /*GetAll(action: string): Observable<any> {
        return this.authHttp.get(this.api_url + action)
            .map(res => res.json())
            .catch(this.handleError);
    }

    Get(action: string, id: number): Observable<any> {
        return this.authHttp.get(this.api_url + action + "/" + id)
            .map(res => res.json())
            .catch(this.handleError);
    }

    Add(action: string, itemToAdd: any): Observable<any> {
        return this.authHttp.post(this.api_url + action, JSON.stringify(itemToAdd), { headers: this.headers })
            .map(res => res.json())
            .catch(this.handleError);
    }

    Update(action: string, id: number, itemToUpdate: any): Observable<any> {
        return this.authHttp
            .put(this.api_url + action + "/" + id, JSON.stringify(itemToUpdate), { headers: this.headers })
            .catch((error: any) => Observable.throw(error.json().error || "Server Error"));
    }

    Delete(action: string, id: number): Observable<any> {
        return this.authHttp.delete(this.api_url + action + "/" + id)
            .catch((error: any) => Observable.throw(error.json().error || "Server Error"));
    }*/

    
    private extractData(res: Response) {
        const body = res.json();
        return body || {};
    }
    
    private handleError(error: any) {
        const errMsg = (error.message)
            ? error.message
            : error.status ? `${error.status} - ${error.statusText}` : "Server Error";
        this.alertService.error("Server Error", "Please consult an admin for help");
        return Observable.throw(errMsg);
    }
}