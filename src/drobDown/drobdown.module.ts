import {  Module } from '@nestjs/common';
import { DrobDownController } from './drobDown.controller';
import { DrobDownService } from './drobDown.Service';



@Module({
  
    imports: [
DrobDownModule
    ],
    controllers: [DrobDownController],
    providers: [DrobDownService,DrobDownController,
    
  ],
    exports: [DrobDownService,DrobDownController],
  })
export class DrobDownModule {}