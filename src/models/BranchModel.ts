import { Model } from 'objection';
// import CarsBaseModels from './CarsBaseModel';
// import ContractsModel from './ContractsModel';
// import ReciptModels from './ReciptesModel';
// import UsersModel from './Users';

export default class BranchesModel extends Model {
  // user!: UsersModel;
  agenciesId!: number;
  name: string;
  name_en: string;
  address: string;
  address_en: string;
  phone: string;
  phone_two: string;
  latitude: number;
  longitude: number;
  user_id: number;
  status: number;
  activated: number;
  status_id: number;
  code: string;
  static get tableName() {
    return 'branches';
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

  //   agency: {
  //     relation: Model.BelongsToOneRelation,
  //     modelClass: __dirname + '/AgencyModel',
  //     join: {
  //       from: 'agencies.id',
  //       to: 'branches.agenciesId',
  //     },
  //   },
  //   cars: {
  //     relation: Model.HasManyRelation,
  //     modelClass: CarsBaseModels,
  //     join: {
  //       from: 'cars.branch_id',
  //       to: 'branches.id',
  //     },
  //   },
  //   receipts: {
  //     relation: Model.HasManyRelation,
  //     modelClass: ReciptModels,
  //     join: {
  //       from: 'receipts.branch_id',
  //       to: 'branches.id',
  //     },
  //   },
  //   users: {
  //     relation: Model.HasManyRelation,
  //     modelClass: UsersModel,
  //     join: {
  //       from: 'users.branch_id',
  //       to: 'branches.id',
  //     },
  //   },
  //   contracts: {
  //     relation: Model.HasManyRelation,
  //     modelClass: ContractsModel,
  //     join: {
  //       from: 'contracts.branch_id',
  //       to: 'branches.id',
  //     },
  //   },
  // };
}
