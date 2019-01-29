import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:User[];
  showExtended:boolean=true;
  loaded:boolean=true;
  enableAdd: boolean = true; 
  currentClasses ={};
  currentStyles ={};


  constructor() { }

  ngOnInit() {

      this.users=[
        {
          firstname:'Noraiz',
          secondname:'Azam',
          age:23,
          address :{
              street:'hussain street', 
              town:'muslim town',
              city:'lahore'   
        },
        image:'http://lorempixel.com/600/600/people/3',
        isActive :true,
        balance : 100,
        registered : new Date ('01/02/2018 08:30:00')

      },
      {
        firstname:'sherry',
        secondname:'wahiyat',
        age:25,
        address :{
            street:'hussain street',
            town:'township',
            city:'lahore'   
      },
      image:'http://lorempixel.com/600/600/people/2',
      isActive :false,
      balance : 400,
        registered : new Date ('01/02/2018 10:30:00')
    },
    {
      firstname:'Ammar',
      secondname:'iqbal',
      age:24,
      address :{
          street:'hussain street',
          town:'muslim town',
          city:'faislabad'   
    },
    image:'http://lorempixel.com/600/600/people/1',
    isActive :true,
    balance : 200,
        registered : new Date ('01/02/2018 09:30:00')
  }            
      ];
      this.loaded=true;
    
    
  // this.addUser({
    //  firstname:'husnain',
    //  secondname:'butt'
    //});

    this.setCurrentClasses();
    this.setCurrentStyles();

  }


  addUser(user:User){
    this.users.push(user);


}
  setCurrentClasses(){
    this.currentClasses={
      'btn-success':this.enableAdd,
      'big-text':this.showExtended
   }
  }

  setCurrentStyles(){
    this.currentStyles ={
      'padding-top': this.showExtended ? '0' : '40px'
    }


  }
}
