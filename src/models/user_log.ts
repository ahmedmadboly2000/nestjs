const { objection } = require('objection');
import { Model } from "objection";
export default class UserLogs extends Model {

  static this: any;
    id: any;
    static id: any;
 
    
  static get tableName() {
    return 'user_logs';
  }
  static get jsonSchema() {
    return {
      type: 'object',
      // required: ['username', 'password','token'],

      properties: {
        id: { type: 'integer' },
        ip: { type: 'string' },
        user_id: { type: 'integer' },
        route: { type: 'string', minLength: 1, maxLength: 255 },
       platform: { type: 'string', minLength: 1, maxLength: 255 },
       controller: { type: 'string', minLength: 1, maxLength: 255 },
      },

      }
    };

}