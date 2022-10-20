import { Model } from 'objection';
// import CarAttributeTypesModel from './car_attribute_types';

export default class AttributeModel extends Model {
    
id	:number
photo	:string
name_ar	:string
name_en	:string
created_at	:Date
attribute_type_id:number

    static get tableName() {
        return 'attributes';
    }

    // static relationMappings = {
    //     cars: {
    //         relation: Model.HasManyRelation,
    //         modelClass: __dirname + '/CarAttrbuiteModel',
    //         join: {
    //             from: 'car_attribute.attribute_id',
    //             to: 'attributes.id',
    //         },
    //     }
    // }
}


