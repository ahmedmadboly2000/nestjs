import { Model } from 'objection';
import AttributeModel from './AttributesModel';
import CarModel from './CarsModel';


export default class CarAttrbuteModel extends Model {
    id	:number
    name:string
    created_at	:Date
  modefied_at:Date
  attribute_id:number
  car_id:number
    static get tableName() {
        return 'car_attribute';
    }

    //  static relationMappings = {
       
      static get relationMappings() {
       
        return {

        };
      }
}


