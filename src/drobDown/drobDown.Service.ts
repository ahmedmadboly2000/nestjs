import { Injectable} from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import AgencyModel from 'src/models/AgencyModel';
import AreaModel from 'src/models/Areas';
import AttributeModel from 'src/models/AttributesModel';
import BranchesModel from 'src/models/BranchModel';


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
export class DrobDownService {
    constructor(
        @InjectModel() private readonly knex: Knex
      ) {}
     
      async findAllArea(header) {
      var names= header == 'en' ? 'name_en as name' : 'name as name'
      const row =await AreaModel.query().select('id',names )
      return row
      // const row =await AreaModel.query()

      // let names: any[] = []
      // row.forEach((row ) => {
      //   console.log(row);
      //   console.log(data,'en');
        
      //   names.push({id : row.id,name : data == 'en' ? row.name_en : row.name })
      // })
      // return names

        // let logs = await AreaModel.query();
        //   return {
        //     status: 200,
        //     data: logs,
        //     msg: 'All categories fetched successfully',
        //   };
      }
    
      async findAllAgencies(header) {
        var names= header == 'en' ? 'name_en as name' : 'name as name'
        const row =await AgencyModel.query().select('id',names )
        return row
      }
      async findAllAttributes(header) {
        var names= header == 'en' ? 'name_en as name' : 'name as name'
        const row =await AttributeModel.query().select('id',names )
        return row
      }
      async findAllBranches(header) {
        var names= header == 'en' ? 'name_en as name' : 'name as name'
        const row =await BranchesModel.query().select('id',names )
        return row
      }
    
  }