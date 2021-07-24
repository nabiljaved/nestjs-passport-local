import { Injectable } from '@nestjs/common';

export type User = {
    id:number; 
    name:string; 
    username:string; 
    password:string; 
}


@Injectable()
export class UsersService {

    private readonly users :User[] = [

        {
            id: 1, 
            name : 'nabeel javed', 
            username : 'nabeel', 
            password : 'debian'
        },
        
        {
            id: 2, 
            name : 'aqsa kareem', 
            username : 'aqsa', 
            password : 'aq123'
        },
        
        {
            id: 3, 
            name : 'kashif khan', 
            username : 'kashif', 
            password : 'kashif123'
        }

    ]

    async findOne(username: string) : Promise<User | undefined> {
         const user =  this.users.find(user => user.username === username)
         return user;
    }

}
