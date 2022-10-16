
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constant';
import {  Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { ConfigService } from '@nestjs/config';
import { AuthController } from './auth.controller';


@Module({
  
    imports: [
      UsersModule,
      PassportModule,
      JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' },
      }),
    ],
    controllers: [AuthController],
    providers: [AuthService, LocalStrategy, JwtStrategy,ConfigService,AuthController,
    
  ],
    exports: [AuthService,AuthController],
  })
export class AuthModule {}
