import {Component ,OnInit} from '@angular/core';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { compileNgModuleFromRender2 } from '@angular/compiler/src/render3/r3_module_compiler';
import {User} from '../../models/User';


@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css'],
    
})

export class UserComponent implements OnInit {
    user:User;


    //methods
    constructor(){
        

        }

    

    ngOnInit(){
        this.user ={
        firstname:'Noraiz',
        secondname:'Azam',
        age:23,
        address :{
            street:'hussain street',
            town:'muslim town',
            city:'lahore'   
    }

    }    
 }
 
    
 }

