import { Injectable} from '@nestjs/common';
import { Knex } from 'knex';
// import {Knex } from "knex";
import { InjectModel } from 'nest-knexjs';
import { Observable } from 'rxjs';
import AreaModel from 'src/models/Areas';
import UserLogs from 'src/models/user_log';
({
    client: 'mysql',
    connection: {
      // host: '127.0.0.1',
      user: 'root',
      password: '',
      database: 'myapp2_test',
    }
  })

@Injectable()
export class AreaService {
    constructor(
        @InjectModel() private readonly knex: Knex
      ) {}
     
    async insertArea(data:any): Promise<AreaModel | undefined>{
      
        const row=await AreaModel.query().insert(data)
      
   return row
    }
    async findAllArea() {
        let logs = await AreaModel.query();
          return {
            status: 200,
            data: logs,
            msg: 'All categories fetched successfully',
          };
      }
    
      async findArea(id){
      
        const row = await AreaModel.query().where({id})
          return row
     
      }
   
    async updateArea(data) {
      // console.log(token,'1'); 
      const row= await AreaModel.query().update(data).where('id',data.id)
     
          // console.log(token,'2');
      return row;
    };
    async deleteArea(data:any){
      
        const row = await AreaModel.query().delete().where('id',data.id)

      return row
      // return this.users.find(user => user.username === username);
   
    }
    
  }