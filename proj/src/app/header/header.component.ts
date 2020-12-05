import {​ Component, Input, OnInit }​ from '@angular/core';
@Component({​
    selector: 'header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
}​)
export class HeaderComponent implements OnInit {​
    public collection: string[] = [];
    @Input() public set dataCollectionInput(val: any) {
        if (val) {
            this.collection.push('Dresses');
            this.collection.push('Footwear');
            this.collection.push('Shirts');
            this.collection.push('Active Wears');
            this.collection.push('Night Wears');
            this.collection.push('Winter Wears');
        }
    }
    constructor() {​}​
    ngOnInit() {​
    }​
}​
