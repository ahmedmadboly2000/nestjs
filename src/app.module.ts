import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { KnexModule } from 'nest-knexjs';
import { UsersService } from './users/users.service';
import { JwtService } from '@nestjs/jwt';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { AllExceptionsFilter} from './err/excptionFilter';

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
   
  AuthModule, UsersModule,

],
  controllers: [AppController],
  providers: [AppService, UsersService,JwtService, 
    {
    provide: APP_FILTER,
    useClass: AllExceptionsFilter,
  },
  
],

})
export class AppModule {
   
}
