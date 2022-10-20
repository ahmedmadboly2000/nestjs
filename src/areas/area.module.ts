
import { AreaService } from './area.Service';
import {  Module } from '@nestjs/common';
import { AreaController } from './area.controller';



@Module({
  
    imports: [
AreaModule
    ],
    controllers: [AreaController],
    providers: [AreaService,AreaController,
    
  ],
    exports: [AreaService,AreaController],
  })
export class AreaModule {}