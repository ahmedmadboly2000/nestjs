// import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
// import { log } from 'console';
// import { Observable } from 'rxjs';
// import { tap } from 'rxjs/operators';
// import UserLogs from 'src/models/user_log';
// import { LogService } from '../logs/logsService';

// @Injectable()
// export class AreaInterceptor implements NestInterceptor {
//     private LogService= new LogService
//   async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<UserLogs>> {
//     const request = context.switchToHttp().getRequest();
//     // const response = context.switchToHttp().getResponse();
//     if(request)
//  console.log(request);
//  console.log(request.user,"uuuuuuuuuuuser");
// //  const user_id=(request.user as UserLogs).id
//  console.log(request.ip);
//  console.log(request.headers['user-agent']);
//  const platform=request.headers['user-agent']
// //  console.log(request.platform);
 
//  const ip=request.ip
//  console.log(request.route.path,"jjjjjjjjjjjj");
 
//  const route=request.route.path
// const controller = route.split("/")[1]
// console.log(controller,"ccccccc");
// const body={ip,route,controller,platform}

// //  this.logger.log("hhhhh",message)
//        await this.LogService.insertlog(body)
    
 

  
//     return next
//       .handle()
//       .pipe(
//         tap(),
//       );
      
//   }};
  
