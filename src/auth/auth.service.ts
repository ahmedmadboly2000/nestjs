import { BadRequestException,Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from '../users/dto/create-user.dto';
export class UpdateUserDto extends PartialType(CreateUserDto){}
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
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
           return  User.query().where({}).first()

      // return {
      //   access_token: this.jwtService.sign(payload,{secret:'secretKey'}),
      // };
    }

  }
    

