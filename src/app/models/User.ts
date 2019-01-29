
export interface User{
    firstname:string;
    secondname:string;
    age?:number;
    address?:{
        street:string;
        town:string;
        city:string;
    },
    image?:string,
    isActive? : boolean
    balance? : number,
    registered?: any

} 