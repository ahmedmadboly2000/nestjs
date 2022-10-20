import { ExecutionContext, Injectable, UnauthorizedException, BadRequestException, Inject, CanActivate, forwardRef } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { map, Observable } from 'rxjs';
import User from 'src/models/user';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtAuthGuard implements CanActivate{
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    throw new Error('Method not implemented.');
  }

//   constructor(
//       @Inject(forwardRef(() => UsersService))
//       private usersService: UsersService
//   ) {

//   }
// canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
//     const request = context.switchToHttp().getRequest();

//     const params = request.params;
//     const user: User = request.user;

//     return this.usersService.findToken(user.header('au')).pipe(
//         map((user: User) => {
//             let hasPermission = false;
            
//             if(user.id === Number(params.id)) {
//                 hasPermission = true;
//             }

//             return user && hasPermission;                
//         })
//     )
// }
    
}
