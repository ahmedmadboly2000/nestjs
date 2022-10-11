import { Controller, Post, UseGuards , Request, Get ,Response} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import {AuthenticatedGuard } from './jwt-auth.guard';
import knex from "../db/client_knex";
import { access } from 'fs';
var DB=require("../db/migrations/20220927155625_users")
knex;

function userConnect(myapp2_test: any) {
  var db: any = new DB();
  var knex = db.connect(myapp2_test);
  userConnect("myapp2_test");

}
@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    // @UseGuards(JwtAuthGuard)
     @UseGuards(AuthGuard('local'))
      @Post('login')
      async login(@Request() req:any) {
        console.log(req.body);
        // this.authService.
        return this.authService.login(req.user);
      }

      @UseGuards(AuthenticatedGuard)
        @Get('profile')
        getProfile(@Request() req) {
          // console.log(req.header('authorization')); 
        
          return this.authService.check(req.header('authorization'));
          
        }

        // @UseGuards(AuthGuard('local'))
      @Post('register')
      async register(@Request() req:any) {
        console.log(req.body);
        // this.authService.
        return this.authService.createUser
        ( req.body.username,
          req.body.password,
          req.body.email);
      }
// @UseGuards(AuthGuard('local'))
//  @Post('signup')
//  signup(){
//      return "i'm signup";
//  }
// @UseGuards(AuthGuard('local'))
//   @Post('login')
//   async login(@Request() req:any) {
//     console.log(req.body);
    
//     return (req.user);
//   }
  
//     //  @Post('login')
//     //  login(){
//     //     return "i'm login";
//     // }
}
