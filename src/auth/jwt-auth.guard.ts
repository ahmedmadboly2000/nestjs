
import {  Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthenticatedGuard {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
       
        @InjectModel() private readonly knex: Knex
      ) {}

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
    return true;
  }
}
