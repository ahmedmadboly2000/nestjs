import { Injectable } from '@nestjs/common';
import AttributeModel from './models/AttributesModel';
import CarModel from './models/CarsModel';
import CarAttributeTypesModel from './models/car_attribute_types';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  
  async findAllcars() {
   const row = await CarModel.query().withGraphFetched('CarAttributeTypesModel.[attributes]')
  //  const row = await CarModel.query().withGraphFetched('attribute_type')
    return row
}
}
// .[cars,carAttrbuteType]
