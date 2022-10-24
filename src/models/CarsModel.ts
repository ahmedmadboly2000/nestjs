import { Model, RelationMappings, RelationMappingsThunk } from 'objection';
import { retry } from 'rxjs';
import AttributeModel from './AttributesModel';
import BranchesModel from './BranchModel';
import CarAttrbuteModel from './CarAttrbuiteModel';
import CarAttributeTypesModel from './car_attribute_types';
// import TermsModel from './terms';

export default class CarModel extends Model {
  id	:number
  name:string
  created_at	:Date
modefied_at:Date
attribute_type_id:number
  static get tableName() {
    return 'cars';
  }

  // static relationMappings = {
    static get relationMappings() {
  
      return {
    // attributes: {
    //   relation: Model.ManyToManyRelation,
    //   modelClass: AttributeModel,
    //   join: {
    //     from: 'cars.id',
    //     through: {
    //       // persons_movies is the join table.
    //       from: 'car_attribute.car_id',
    //       to: 'car_attribute.attribute_id'
    //     },
    //     to: 'attributes.id'
    //   },
    // },
    
    CarAttributeTypesModel: {
      relation: Model.ManyToManyRelation,
      modelClass: CarAttributeTypesModel,
      join: {
        from: 'cars.id',
        through: {
          // persons_movies is the join table.
          from: 'car_attribute.car_id',
          to: 'car_attribute.car_attribute_id'
        },
        to: 'car_attribute_types.id'
      }
},
attributes: {
      relation: Model.ManyToManyRelation,
      modelClass: AttributeModel,
      join: {
        from: 'car_attribute_types.id', 
        through: {
          // persons_movies is the join table.
          from: 'car_attribute.car_attribute_id',
          to: 'car_attribute.attribute_id'
        },
        to: 'attributes.id'
      },
    },
}
}
}
// const AttributeModel=require('./AttributesModel')