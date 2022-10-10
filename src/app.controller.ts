import { Get, Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/jwt-auth.guard';
import knex from './db/client_knex';
var DB=require("./db/migrations/20220927155625_users")
knex;

function userConnect(myapp2_test: any) {
  var db: any = new DB();
  var knex = db.connect(myapp2_test);
  userConnect("myapp2_test");

}
@Controller('')
export class AppController {
  constructor(private authService: AuthService) {}
  getHello(): any {
    throw new Error('Method not implemented.');
  }

  @Get('test')
  test()
  {
    return "test" 
  }
  // @UseGuards(AuthGuard('local'))
  // @Post('login')
  // async login(@Request() req:any) {
  //   console.log(req.body);
    
  //   return this.authService.login(req.user);
  // }
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req:any) {
    console.log(req.body);
    
    return (req.user);
  }
  
  @UseGuards(AuthenticatedGuard)
        @Get('profile')
        getProfile(@Request() req) {
          // console.log(req.header('authorization')); 
        
          return this.authService.check(req.header('authorization'));
          
        }
  // @UseGuards(AuthGuard('local'))
  // @Post('auth/login')
  // async login(@Request() req) {
  //   console.log("hhhhhhhh");
    
  //   return this.authService.login(req.user);
  // }
}
