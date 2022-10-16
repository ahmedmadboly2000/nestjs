import { Controller, Post, UseGuards , Request, Get ,Response, UseFilters} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './newGuard';
import { AuthenticatedGuard } from './jwt-auth.guard';

@Controller('auth')
// @UseGuards(AuthenticatedGuard)
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
      async register(@Request() req:any) {
        console.log(req.body);
        // this.authService.
        return this.authService.createUser(req.body)
        // ( req.body.username,
        //   req.body.password,
        //   req.body.email);
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
