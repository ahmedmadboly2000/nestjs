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

  @Get('allAgencies')
  async findAllAgencies(@Request() req:any) {
    // console.log(req);
    
    return this.DrobDownService.findAllAgencies(req.headers['lang']);
  }
  @Get('allAttributes')
  async findAllAttributes(@Request() req:any) {
    // console.log(req);
    
    return this.DrobDownService.findAllAttributes(req.headers['lang']);
  }
  @Get('allBranches')
  async findAllBravches(@Request() req:any) {
    // console.log(req);
    
    return this.DrobDownService.findAllBranches(req.headers['lang']);
  }
 
} 