import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserAuthService } from '../shared/auth/auth.module';
import { AlertService } from '../shared/alert/alert.module';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
    loginForm : FormGroup;
    authenticated: boolean
    loading = false;
    returnUrl: string;

    constructor(private fb: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userAuthService: UserAuthService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.userAuthService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        this.loginForm = this.fb.group({
            'email' : [null, Validators.compose([Validators.required, CustomValidators.email])],
            'password': [null, Validators.required]
        })
    }

    submitForm() {
        this.loading = true;
        /*this.userAuthService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });*/
    }
}
