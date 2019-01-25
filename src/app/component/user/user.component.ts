import {Component} from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    
})

export class UserComponent {
    firstname='Noraiz'
    secondname='azam'
    age=30
    address ={
        street:'hussain street',
        town:'muslim town',
        city:'lahore'

    }

    //methods
    constructor(){
        this.hello()
        console.log(this.age)
        this.myage();
        console.log(this.age)


    }

    myage(){
        this.age=this.age+1;
        console.log(`my age is ${this.age}`)
        

    }

    hello (){
        console.log(`hello ${this.firstname}`);
    }

}