import { Component, OnInit, OnDestroy } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { RegisterUser } from "./user-register";
import { UserService } from "../user.service";

@Component({
  selector: 'user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  public userForm: FormGroup;
    public phoneMask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
    user: RegisterUser;

    onSubmit(user: RegisterUser) {
        this.userService.submit(user);
        this.reset();
    }

    initUserForm() {
        this.userForm = this._fb.group({
            firstName: [this.user.firstName, Validators.required],
            lastName: [this.user.lastName, Validators.required],
            title: [this.user.title],
            phoneNumber: [this.user.phoneNumber],
            email: [this.user.email, Validators.required],
            password: [this.user.password, Validators.required],
        });
    }

    reset() {
        this.userForm.reset();
    }

    constructor(private _fb: FormBuilder, private userService: UserService) {
    }

    ngOnInit(): void {        
        this.userService.editUser.subscribe((user: RegisterUser) => {
            this.user = user;  
            this.initUserForm();
        });     
    }
}
