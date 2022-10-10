import { Injectable } from '@nestjs/common';
import knex  from 'knex';
import User from 'src/models/user';
({
  client: 'mysql',
  connection: {
    // host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'myapp2_test',
  }
})
// export type User = any;
@Injectable()
export class UsersService {
      // update(id: string, arg1: { refreshToken: null; }) {
      //   throw new Error('Method not implemented.');
      // }
      
      // private readonly users=knex('users');
    // private readonly users = 
    // [
    //     {
    //       id: 1,
    //       username: 'john',
    //       password: 'changeme',
    //     },
    //     {
    //       id: 2,
    //       username: 'maria',
    //       password: 'guess',
    //     },
    //   ];
    
      async findOne(username:string,password:string): Promise<User | undefined>{
        return User.query().where({username}).first()
        // return this.users.find(user => user.username === username);
     
      }
   
    async updateToken(id,access_token) {
      // console.log(token,'1');
      const q= await User.query().update(access_token).where('id',id)
     
          // console.log(token,'2');
      return q;
    };
    async findToken(access_token:string): Promise<User | undefined>{
      console.log(access_token);
      
      if(access_token.split(" ").length > 1){
        // console.log(access_token.split(" ")[1]);
        console.log(access_token.includes("Bearer "));
        access_token = access_token.split(" ").pop()
        
        // if(access_token.includes("Bearer ")){
        //   access_token = access_token.split(" ")[1]
        // }
      }
        

      return User.query().where({access_token}).first()
      // return this.users.find(user => user.username === username);
   
    }
    
  }