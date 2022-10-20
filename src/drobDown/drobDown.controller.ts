import { Controller, Get, Post, Body, Patch, Param, Delete ,Request, UseInterceptors} from '@nestjs/common';
import { DrobDownService } from "./drobDown.Service";
@Controller('drobDown')
export class DrobDownController {

  constructor(private readonly DrobDownService: DrobDownService) {}


  @Get('allAreas')
  async findAll(@Request() req:any) {
    // console.log(req);
    
    return this.DrobDownService.findAllArea(req.headers['lang']);
  }

  // @Post('findArea')
  // async findOne(@Request() req:any) {
  //   console.log(req.body);
  //   // console.log(this.AreaService.findArea(req.body));
    
  //   // return this.AreaService.findArea(req.body);
  // }

 
}