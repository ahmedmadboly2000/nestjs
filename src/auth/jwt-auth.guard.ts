
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException, BadRequestException, HttpStatus } from '@nestjs/common';
import { response } from 'express';
import User from 'src/models/user';


@Injectable()
export class AuthenticatedGuard implements CanActivate {
  
  async canActivate(
    context: ExecutionContext,
  ): Promise<any> {
    const request = context.switchToHttp().getRequest();
    const response = context.switchToHttp().getResponse();
    
    let status: HttpStatus;
    let errorMessage: string= 'token is not correct';
      const user = await this.findToken(request.header('authorization'));
        if (user) {
          
          return true;
        }else {
          response.json("token is not correct")
          // response.("token is not correct")
          // throw new BadRequestException("token is not correct");
           }
 
}
  
      async findToken(access_token:string): Promise<User | undefined>{
        // console.log(access_token,"llllllljjjjjjl");
        
        if(access_token.split(" ").length > 1){
          // console.log(access_token.split(" ")[1]);
          // console.log(access_token.includes("Bearer "));
          access_token = access_token.split(" ").pop()
          
          // if(access_token.includes("Bearer ")){
          //   access_token = access_token.split(" ")[1]
          // }
        }
          
  
        return User.query().where({access_token}).first()
        // return this.users.find(user => user.username === username);
     
      
      }
     
      
    }


      

