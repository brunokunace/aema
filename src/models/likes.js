import { Model } from 'objection'

class Likes extends Model {
  static get tableName () {
    return 'likes'
  }
}

export default Likes
