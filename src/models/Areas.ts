import { Model } from 'objection';
const { objection } = require('objection');
// import BranchesModel from './BranchModel';
// import TownsModel from './Towns';

export default class AreasModel extends Model {
  branches?: any[];
  static this: any;
  name: any;
  id: any;
  name_en: any;
  static get tableName() {
    return 'areas';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      // required: ['username', 'password','token'],

      properties: {
        id: { type: 'integer' },
        name: { type: 'string' },
        name_en: { type: 'string', minLength: 1, maxLength: 255 },
        latitude: { type: 'string', minLength: 1, maxLength: 255 },
       longitude: { type: 'string', minLength: 1, maxLength: 255 },
       town_id: { type: 'integer'},
       google_id: { type: 'string', minLength: 1, maxLength: 255 },
      },

      }
    };
  // static relationMappings = {
  //   branches: {
  //     relation: Model.ManyToManyRelation,
  //     modelClass: BranchesModel,
  //     join: {
  //       from: 'areas.id',
  //       through: {
  //         // persons_movies is the join table.
  //         from: 'restaurant_areas.area_id',
  //         to: 'restaurant_areas.branch_id',
  //       },
  //       to: 'branches.id',
  //     },
  //   },
  //   towns: {
  //     relation: Model.BelongsToOneRelation,
  //     modelClass: TownsModel,
  //     join: {
  //       from: 'towns.id',
  //       to: 'areas.town_id',
  //     },
  //   },
  // };
}
