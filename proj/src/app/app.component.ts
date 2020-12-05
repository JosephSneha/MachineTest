import {​ Component, OnInit }​ from '@angular/core';
@Component({​
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
}​)
export class AppComponent implements OnInit {​
    title = 'Street Styles';
    public isSubmitted = false;
    constructor() {​}​
    ngOnInit() {​
    }​
    submit() {​
        this.isSubmitted = true;
    }​
}​

