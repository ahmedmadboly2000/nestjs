import { BadRequestException,Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from '../users/dto/create-user.dto';
export class UpdateUserDto extends PartialType(CreateUserDto){}
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import User from 'src/models/user';
import knex from 'src/db/client_knex';


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
   
    @InjectModel() private readonly knex: Knex
  ) {}

    async validateUser(username: string, password: string): Promise<any> {
   
      const user = await this.usersService.findOne(username,password);
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
    // async check(access_token:any): Promise<any> {
    //   const user = await User.query().where('access_token',access_token)
    //   if (!user) {
    //     throw new UnauthorizedException("token is not correct");
    //   }
    //   return user;
    // }
    
    async check (access_token:any){
      // const row =await User.query()
      // .where('access_token',data.access_token).first()
    //   const user = await this.usersService.findToken(access_token);
    //   if (user && user.access_token === access_token) {
    //     const { access_token, ...result } = user;
    //     return result;
    //   }
    //   return 'not found';
    // }
    const user = await this.usersService.findToken(access_token);
    if (!user) {
      throw new UnauthorizedException("token is not correct");
    }
    return user;
  }
}
