// import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';
// import User from './models/user';
// import UserLogs from './models/user_log';
// import { LogService } from "./logs/logsService";
// import knex from 'knex';
// @Injectable()
// class LogsMiddleware implements NestMiddleware {
//     private UserLogs = new UserLogs
//   private readonly logger = new Logger('HTTP');
//    private LogService= new LogService
 
//   use(request: Request, response: Response, next: NextFunction) {
//     response.on('finish', async () => {
//       const { method, originalUrl } = request;
//       const { statusCode, statusMessage } = response;
 
//       const message = `${method} ${originalUrl} ${statusCode} ${statusMessage}`;
//  if(request)
//  console.log(request);
//  console.log(request.user,"uuuuuuuuuuuser");
//  const user_id=(request.user as UserLogs).id
//  console.log(request.ip);
// //  console.log(request.platform);
 
//  const ip=request.ip
//  console.log(request.route.path,"jjjjjjjjjjjj");
 
//  const route=request.route.path
// //  this.logger.log("hhhhh",message)
//        const log=await this.LogService.insertlog({ip,user_id,route})
 
//       return log;
//     });
 
//     next();
//   }
 
// }
 
// export default LogsMiddleware;