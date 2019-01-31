import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user :User={
    firstname:'',
    secondname:'',
    email:''

  }
  users:User[];
  showExtended:boolean=true;
  loaded:boolean=true;
  enableAdd: boolean = false; 
  showUserForm:boolean= false;

  constructor() { }

  ngOnInit() {
  
      this.users=[
        {
          firstname:'Noraiz',
          secondname:'Azam',
          email : 'noraiz.ch410@gmail.com',
        
        isActive :true,
        registered : new Date ('01/02/2018 08:30:00'),
        hide:true

      },
      {
        firstname:'sherry',
        secondname:'wahiyat',
        email : 'sherry@gmail.com',
        isActive :false,
        registered : new Date ('01/02/2018 10:30:00'),
        hide:true
    },
    {
      firstname:'Ammar',
      secondname:'iqbal',
      email : 'Ammar@gmail.com',  
      isActive :true,
      registered : new Date ('01/02/2018 09:30:00'),
        hide:true
  }            
      ];
      this.loaded=true;

  
  }


//   addUser(){
//     this.user.isActive = true;
//     this.user.registered = new Date();
//     this.users.unshift(this.user);

//     this.user = {
//     firstname:'',
//     secondname:'',
//     email : '',

//   }
// }

  onSubmit(e:any){
    console.log(123);

    e.preventDefault();
  }

  }

