import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { KnexModule } from 'nest-knexjs';
import { UsersService } from './users/users.service';
import { JwtService } from '@nestjs/jwt';
// import { AllExceptionsFilter} from './err/excptionFilter';
// import LogsMiddleware from './history';
import { logsModule } from './logs/logs.module';
import { AreaModule } from './areas/area.module';
import { DrobDownModule } from './drobDown/drobdown.module';
// import { LogService } from './logs/logsService';

@Module({
  imports: [    
  
    KnexModule.forRoot({
      config: {
        client: 'mysql',
        version: '5.7',
        useNullAsDefault: true,
        connection: {
          host: '127.0.0.1',
          user: 'root',
          password: '',
          database: 'myapp2_test',
        },
      },
    }),
   
  AuthModule, UsersModule,logsModule,AreaModule,DrobDownModule

],
  controllers: [AppController],
  providers: [AppService, UsersService,JwtService,
  //   {
  //   provide: APP_FILTER,
  //   useClass: AllExceptionsFilter,
  // },
  
], 
// ServeStaticModule.forRoot({
//   rootPath: join(__dirname, '..', 'files')
// })

})
export class AppModule {
  // configure(consumer: MiddlewareConsumer) {
  //   consumer
  //     .apply(LogsMiddleware)
  //     .forRoutes('*');
  // }
}
