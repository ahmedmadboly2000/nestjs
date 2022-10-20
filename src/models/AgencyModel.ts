import { Model } from 'objection';
// import BranchesModel from './BranchModel';
// import UserPackagesModel from './UserPackages';
// import UsersModel from './Users';

export default class AgencyModel extends Model {
  id!: number;
  name!: string;
  name_en!: string;
  logo!: string;
  cover!: string;
  minimum!: number;
  delivery_time!: number;
  taxes!: number;
  created!: Date;
  modified!: Date;
  navigationId!: number;
  license_number!: string;
  taxes_number!: string;
  // user!: UsersModel;
  // socket_id?: UsersModel;
  category_id?: number;
  discount_percentage?: number;
  discount_to?: string;

  static get tableName() {
    return 'agencies';
  }

  // static relationMappings = {
  //   user: {
  //     relation: Model.BelongsToOneRelation,
  //     modelClass: UsersModel,
  //     join: {
  //       from: 'users.id',
  //       to: 'branches.user_id',
  //     },
  //   },
  //   pack: {
  //     relation: Model.BelongsToOneRelation,
  //     modelClass: UserPackagesModel,
  //     join:{
  //         from: 'agencies.id',
  //         to: 'user_packages.agency_id',
  //     }
  //   },
  //   packges: {
  //     relation: Model.HasManyRelation,
  //     modelClass: UserPackagesModel,
  //     join: {
  //       from: 'agencies.id',
  //       to: 'user_packages.agency_id',
  //     }
  //   }
  // };
}
