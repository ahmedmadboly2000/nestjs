const { objection } = require('objection');
import { Model } from "objection";
export default class User extends Model {
  id(id: any, username: any) {
    throw new Error('Method not implemented.');
  }
  username(id: any, username: any) {
    throw new Error('Method not implemented.');
  }
  static this: any;
  password: string;
  
  static get tableName() {
    return 'users';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      // required: ['username', 'password','token'],

      properties: {
        id: { type: 'integer' },
        username: { type: 'string', minLength: 1, maxLength: 255 },
        password: { type: 'string', minLength: 1, maxLength: 255 },
        email: { type: 'string', minLength: 1, maxLength: 255 },
        token: { type: 'string', minLength: 1, maxLength: 255 },

      }
    };

}}
export{User}