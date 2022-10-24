import { Model, RelationMappings, RelationMappingsThunk } from 'objection'
import AttributeModel from './AttributesModel'
import CarAttrbuteModel from './CarAttrbuiteModel'

export default class CarAttributeTypesModel extends Model {
  id	:number
  name:string
  created_at	:Date
modefied_at:Date

  static get tableName(){
    return 'car_attribute_types'
  }
  static get relationMappings() {
    
    return {
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
      AttributeTypes: {
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
  attribute_type: {
    relation: Model.BelongsToOneRelation,
    modelClass: CarAttributeTypesModel, 
    join: {
      from: 'attributes.attribute_type_id',
      to: 'car_attribute_types.id',
    },
  },
    };
  }
}