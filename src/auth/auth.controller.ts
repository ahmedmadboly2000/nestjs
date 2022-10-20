import { Controller, Post, UseGuards , Request, Get ,Response, UseFilters, UseInterceptors, UploadedFile} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './newGuard';
import { AuthenticatedGuard } from './jwt-auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path = require('path');
import { LoggingInterceptor } from 'src/logs/interceptor';

export const storage = {
  storage: diskStorage({
    destination: './uploads/profileimages',
    filename: (req, file, cb) => {
        const filename: string = path.parse(file.originalname).name.replace(/\s/g, '') + uuidv4();
        const extension: string = path.parse(file.originalname).ext;

        cb(null, `${filename}${extension}`)
    }
})

}
@Controller('auth')
// @UseGuards(AuthenticatedGuard)
export class AuthController {
    constructor(private authService:AuthService){}

    // @UseGuards(JwtAuthGuard)
  
     @UseGuards(AuthGuard('local'))
     @UseInterceptors(LoggingInterceptor)
      @Post('login')
      async login(@Request() req:any) {
        // console.log(req.body);
        // this.authService.
        return this.authService.login(req.user);
      }

      // @UseGuards(JwtAuthGuard)
      @UseGuards(AuthenticatedGuard)
      // @UseFilters(InCorrectToken)
        @Get('profile')
        getProfile(@Request() req) {
          // console.log(req.header('authorization'),'jjjjjjjjjjjjj'); 
        // return "ok"
          return this.authService.check(req.header('authorization'));
          
        }

        // @UseGuards(AuthGuard('local'))
      // @UseFilters(AllExceptionsFilter)
      // @UseGuards(QueryErrorFilter)
      @Post('register')
      @UseInterceptors(FileInterceptor('image',storage))
      async register(@UploadedFile() file,@Request() req:any) {
        console.log(req.body);
        console.log(file.path);
        req.body.image = file.path
        
        // this.authService. 
        return this.authService.createUser(req.body)
        // ( req.body.username,
        //   req.body.password,
        //   req.body.email);
      }
      @Post('upload')
      // @UseGuards(AuthenticatedGuard)
      @UseInterceptors(FileInterceptor('image'))
      upload(@UploadedFile() file: Express.Multer.File,@Request() req) {
        console.log(file);
        return file.buffer
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
