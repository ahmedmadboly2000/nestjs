import { Get, Controller, Request, Post, UseGuards, UseInterceptors, UploadedFiles, UploadedFile, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FileInterceptor } from '@nestjs/platform-express/multer';
import { AuthService } from './auth/auth.service';
import { AuthenticatedGuard } from './auth/jwt-auth.guard';
import { AppService } from "./app.service";
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
  constructor(private authService: AuthService,
    private appService:AppService
    ) {}
  getHello(): any {
    throw new Error('Method not implemented.');
  }
  // @Post('upload')
  // // @UseGuards(AuthenticatedGuard)
  // @UseInterceptors(FileInterceptor('file', { dest: './uploads' }))
  // uploadSingle(@UploadedFile() file,@Request() req) {
  //   console.log(file);
  //   return file.filename
  // }


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
        @Get('allcars')
        getalldata(@Request() req) {
          // console.log(req.header('authorization')); 
        
          return this.appService.findAllcars();
          
        }
  // @UseGuards(AuthGuard('local'))
  // @Post('auth/login')
  // async login(@Request() req) {
  //   console.log("hhhhhhhh");
    
  //   return this.authService.login(req.user);
  // }
}
