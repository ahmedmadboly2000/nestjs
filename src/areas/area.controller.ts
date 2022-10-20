import { Controller, Get, Post, Body, Patch, Param, Delete ,Request, UseInterceptors} from '@nestjs/common';
import { ID } from '@nestjs/graphql';
import { LoggingInterceptor } from 'src/logs/interceptor';
// import { AreaInterceptor } from './area.interceptor';
import { AreaService } from './area.Service';

@Controller('Areas')
export class AreaController {

  constructor(private readonly AreaService: AreaService) {}

  @Post('createArea')
 async create(@Request() req:any) {
    return this.AreaService.insertArea(req.body);
  }

  @Get('allAreas')
  async findAll(@Request() req:any) {
    // console.log(req);
    
    return this.AreaService.findAllArea();
  }

  @Post('findArea')
  async findOne(@Request() req:any) {
    console.log(req.body);
    console.log(this.AreaService.findArea(req.body));
    
    return this.AreaService.findArea(req.body);
  }

  @Patch('updateArea')
  @UseInterceptors(LoggingInterceptor)
   async update(@Request() req:any) {
    console.log(req.body,"kkkk");
     
    console.log(this.AreaService.updateArea(req.body),"hhhhhhhhhh")
    return this.AreaService.updateArea( req.body);
  }
  
  @Delete('deleteLog')
  async remove(@Request() req:any) {
    return this.AreaService.deleteArea(req.body);
  }
}