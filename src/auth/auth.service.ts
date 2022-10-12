import { BadRequestException,HostParam,Injectable, UnauthorizedException, UseFilters } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from '../users/dto/create-user.dto';
export class UpdateUserDto extends PartialType(CreateUserDto){}
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import User from 'src/models/user';
// import { AllExceptionsFilter } from '../err/excptionFilter';
import { ERROR } from 'sqlite3';
import { error } from 'console';


({
  client: 'mysql',
  connection: {
    // host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'myapp2_test',
  }
})

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    // private allExceptionFilter:AllExceptionsFilter,
   
    @InjectModel() private readonly knex: Knex
  ) {}
  // @UseFilters(AllExceptionsFilter)
  async createUser(data:any): Promise<User | undefined>{
  
    return User.query().insert(data)
    // return this.users.find(user => user.username === username);
 
  }
  // public createUser(newUser: Partial<User>): Promise<User> {
    // return this.usersService.insertUser(newUser)
    // .catch((e) => {
    //   console.log(e)
    //   if (/(username)[\s\S]+(already exists)/)
    //   // .test(e.detail)) 
    //   {
    //     throw new BadRequestException(
    //       'Account with this username already exists.',
    //     );
        
    //   }
    //   return e;
    // });
  
  // async createUser(username:string,password:string,email:string){
  //   // const user = await this.usersService.findOne(username);
  //   if(username=username.unique()){
  //     return ("this user is already exist")
  //   }else{
  //     const q=await this.usersService.insertUser({username,password,email});
  //     // console.log(q);
  //     return ("user created successfully");

  //   }
  // }


    async validateUser(username: string, password: string): Promise<any> {
   
      const user = await this.usersService.findOne(username);
      if (user && user.password === password) {
        const { password, ...result } = user;
        return result;
      }
      return null;
    }

    async login(user: any) {
      const payload = { username: user.username, sub: user.id };
      
      const token={access_token: this.jwtService.sign(payload,{secret:'secretKey'})};
      const q = await this.usersService.updateToken(user.id,token);
      return {
        // access_token: this.jwtService.sign(payload,{secret:'secretKey'}),
        token
        
      };
    }
 
    async check (access_token:string){
      //  access_token = authorizationHeader.substring("Bearer ".length);
    //   const user = await this.usersService.findToken(access_token);
    //   if (user && user.access_token === access_token) {
    //     const { access_token, ...result } = user;
    //     return result;
    //   }
    //   return 'not found';
    // // // }
    const user = await this.usersService.findToken(access_token);
    if (!user) {
      throw new UnauthorizedException("token is not correct");
    }
    return user;
  }
}
