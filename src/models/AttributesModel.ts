import { Model } from 'objection';
import CarAttrbuteModel from './CarAttrbuiteModel';
import CarModel from './CarsModel';
import CarAttributeTypesModel from './car_attribute_types';
// import CarAttributeTypesModel from './car_attribute_types';

export default class AttributeModel extends Model {
    
id	:number
name:string
name_en	:string
created_at	:Date
attribute_type_id:number

    static get tableName() {
        return 'attributes';
    }

    // static relationMappings = {
        static get relationMappings() {

        return {
        
        
    }
}
}

